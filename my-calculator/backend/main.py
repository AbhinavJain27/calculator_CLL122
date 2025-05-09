from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import math

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "FastAPI backend is running"}

class IntegralRequest(BaseModel):
    function_str: str  # function as a string, e.g. "math.sin(x)"
    start: float
    end: float

def safe_eval_function(func_str: str, x: float) -> float:
    allowed_names = {
        "x": x,
        "math": math,
        "sin": math.sin,
        "cos": math.cos,
        "tan": math.tan,
        "exp": math.exp,
        "log": math.log,
        "sqrt": math.sqrt,
        "pi": math.pi,
        "e": math.e,
    }
    return eval(func_str, {"__builtins__": {}}, allowed_names)

@app.post("/compute_integral")
async def compute_integral(request: IntegralRequest):
    step = 0.01
    total_area = 0.0
    x = request.start
    while x < request.end:
        try:
            y = safe_eval_function(request.function_str, x)
            total_area += y * step
        except Exception as e:
            return {"error": f"Error evaluating function at x={x}: {str(e)}"}
        x += step
    return {"integral": total_area}

from fastapi import Request

@app.post("/calculate")
async def calculate(request: Request):
    data = await request.json()
    print("Received data at /calculate endpoint:", data)

    productCoefficients = data.get("productCoefficients", {})
    reactantCoefficients = data.get("reactantCoefficients", {})
    reactantMolarFlowRate = data.get("reactantMolarFlowRate", {})
    volumetricFlowRate = data.get("volumetricFlowRate", None)
    rateConstant = data.get("rateConstant", None)

    def compute_epsilon(productCoeffs, reactantCoeffs, reactantMolarFlow):
        try:
            sum_product = sum(float(v) for v in productCoeffs.values())
            sum_reactant = sum(float(v) for v in reactantCoeffs.values())
            reactant_A_coeff = float(reactantCoeffs.get("A", 1))
            reactant_A_molar = float(reactantMolarFlow.get("A", 1))
            sum_reactant_molar = sum(float(v) for v in reactantMolarFlow.values())

            epsilon = ((sum_product - sum_reactant) / reactant_A_coeff) * (reactant_A_molar / sum_reactant_molar)
            return epsilon
        except Exception as e:
            print(f"Error computing epsilon: {e}")
            return None

    def compute_initial_concentrations(reactantMolarFlow, volumetricFlowRate):
        concentrations = {}
        try:
            vol_flow = float(volumetricFlowRate)
            if vol_flow == 0:
                return concentrations
            for reactant, molar_flow in reactantMolarFlow.items():
                concentrations[reactant] = float(molar_flow) / vol_flow
        except Exception as e:
            print(f"Error computing initial concentrations: {e}")
        return concentrations
    
    def rateOfReaction(reactantCoefficients, efficiency , reactantMolarFlowRate , 
                       volumetricFlowRate, rateConstant):
        try:
            rate = rateConstant 

            for reactant, coeff in reactantCoefficients.items():
                initial_conc = compute_initial_concentrations(
                    float(reactantMolarFlowRate.get(reactant)), float(volumetricFlowRate)
                )
                rate *=  pow(initial_conc*(1-efficiency),float(float(coeff)) )
            return rate
        except Exception as e:
            print(f"Error computing rate of reaction: {e}")
            return None
        
    def arheniousEquation(rateConstant, temperature1 , temperature2 , activationEnergy):
        try:
            R = 8.314  # J/(mol*K)
            activation_energy = float(activationEnergy)
            rate_constant = rateConstant * math.exp(-activation_energy / (R)*(1/ temperature1 - 1/temperature2))
            return rate_constant
        except Exception as e:
            print(f"Error computing Arrhenius equation: {e}")
            return None
    def cstr(efficiency , reactantMolarFlowRate , volumetricFlowRate, rateConstant,
             reactantCoefficients):
        try:
            Volume = 1
            rate = rateOfReaction(reactantCoefficients, efficiency , 
                                  reactantMolarFlowRate , volumetricFlowRate, rateConstant)
            ini_conc = compute_initial_concentrations(reactantMolarFlowRate, volumetricFlowRate)
            conc_A = ini_conc.get("A", 0)
            if rate == 0:
                return None
            Volume = conc_A * efficiency / rate 
            return Volume
        except Exception as e:
            print(f"Error computing CSTR volume: {e}")
            return None 

def generate_cstr_volume_vs_efficiency(reactantMolarFlowRate, volumetricFlowRate, rateConstant, reactantCoefficients, step=0.1):
    efficiencies = []
    volumes = []
    eff = 0.0
    while eff <= 1.0:
        vol = cstr(eff, reactantMolarFlowRate, volumetricFlowRate, rateConstant, reactantCoefficients)
        if vol is not None:
            efficiencies.append(eff)
            volumes.append(vol)
        eff = round(eff + step, 10)
    return {"efficiencies": efficiencies, "volumes": volumes}

from fastapi import Request

@app.post("/cstr_volume_graph")
async def cstr_volume_graph(request: Request):
    data = await request.json()
    reactorType = data.get("reactorType", "")
    if reactorType.lower() != "cstr":
        return {"error": "This endpoint only supports reactorType 'CSTR'"}

    reactantCoefficients = data.get("reactantCoefficients", {})
    reactantMolarFlowRate = data.get("reactantMolarFlowRate", {})
    volumetricFlowRate = data.get("volumetricFlowRate", None)
    rateConstant = data.get("rateConstant", None)
    step = data.get("step", 0.1)

    if volumetricFlowRate is None or rateConstant is None:
        return {"error": "volumetricFlowRate and rateConstant are required"}

    result = generate_cstr_volume_vs_efficiency(reactantMolarFlowRate, volumetricFlowRate, rateConstant, reactantCoefficients, step)
    return result
        
    



    epsilon = compute_epsilon(productCoefficients, reactantCoefficients, reactantMolarFlowRate)
    initial_concentrations = compute_initial_concentrations(reactantMolarFlowRate, volumetricFlowRate)

    return {
        "message": "Data received",
        "received_data": data,
        "epsilon": epsilon,
        "initialConcentrations": initial_concentrations
    }
