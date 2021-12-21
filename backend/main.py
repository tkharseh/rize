from fastapi import FastAPI, UploadFile, File, Response
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from starlette.responses import JSONResponse

from summary import Summary
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


class SummaryModel(BaseModel):
    summary: str
    concepts: dict
    images: list


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/home")
async def home():
    # load UI
    return "welcome to rize!"


@app.post("/upload")
async def upload(uploadfile: UploadFile = File(...)):
    contents = await uploadfile.read()
    await uploadfile.close()

    s = Summary(contents.decode())
    json_format = s.json_format()
    json = JSONResponse(content=json_format)
    return json


@app.get("/summary")
async def summary():
    return "summary generated"
