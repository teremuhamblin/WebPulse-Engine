import requests
from bs4 import BeautifulSoup

def scan_seo(url: str):
    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")

    return {
        "title": soup.title.string if soup.title else None,
        "description": soup.find("meta", {"name": "description"}),
        "h1": [h.get_text() for h in soup.find_all("h1")],
        "links": len(soup.find_all("a")),
    }
