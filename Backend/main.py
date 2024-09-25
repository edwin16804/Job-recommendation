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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # The frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def read_data():
    return {"message": "Hello from FastAPI"}
