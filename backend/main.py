from fastapi import FastAPI, UploadFile, File

app = FastAPI()


@app.get("/home")
async def home():
    # load UI
    return "welcome to rize!"


@app.post("/upload")
async def create_upload_text(file: UploadFile = File(...)):
    return {"filename": file.filename}


