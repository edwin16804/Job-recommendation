'''from flask import Flask,jsonify
from flask_cors import CORS


app=Flask(__name__)
CORS(app,origins='*')   

@app.route("/jobai",methods=['GET'])
def users():
    return jsonify(
        {
            "users":['a','b']
        }
    )

if __name__=='__main__':
    app.run(debug=True)'''

from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings: Allow all origins, methods, headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify allowed origins, but "*" allows all
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define root route to display available routes
@app.get("/")
def read_data():
    return {"message": "Hello from FastAPI"}

