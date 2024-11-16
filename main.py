from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your frontend URL for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/summary/")
async def create_file_upload(file: UploadFile):
    data = await file.read()
    if data:
        return {"filename": file.filename}
    return {"error": "No file received"}
