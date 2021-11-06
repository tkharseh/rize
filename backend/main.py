from fastapi import FastAPI, UploadFile, File
from summary import Summary

app = FastAPI()


@app.get("/home")
async def home():
    # load UI
    return "welcome to rize!"


@app.post("/upload")
async def create_upload_text(uploadfile: UploadFile = File(...)):
    # read file contents
    contents = await uploadfile.read()
    uploadfile.close()

    s = Summary(contents.decode())

    return s


