from fastapi import FastAPI
from seo_scanner import scan_seo

app = FastAPI()

@app.get("/analyze")
def analyze(url: str):
    return scan_seo(url)
