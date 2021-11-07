from fastapi import FastAPI, UploadFile, File
from summary import Summary
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

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
async def create_upload_text(uploadfile: UploadFile = File(...)):
    # read file contents
    contents = await uploadfile.read()
    await uploadfile.close()

    s = Summary(contents.decode())

    # print(s.summary)
    return s


