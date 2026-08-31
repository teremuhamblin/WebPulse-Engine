###### README.md >> markdown 
# 📘 WebPulse Engine

WebPulse Engine est une suite open‑source de marketing web permettant
d’analyser un site, générer des rapports SEO, suivre des KPIs et automatiser des audits marketing via une API REST ou une CLI.

### ✨ Fonctionnalités
- Analyse SEO complète (balises, structure, vitesse, accessibilité)
- Génération de rapports marketing PDF/JSON
- Suivi des KPIs : trafic, engagement, conversions
- Modules extensibles : SEO, Social, Ads, Emailing
- API REST (FastAPI)
- Interface web minimaliste pour visualiser les résultats
- CLI pour automatiser les audits

### Structure
```text
WebPulse-Engine/
│
├── src/
│   ├── seo_scanner.py
│   ├── api.py
│   └── cli.py
│
├── web/
│   ├── index.html
│   └── styles.css
│
├── README.md
├── LICENSE
└── requirements.txt
```

### 🚀 Installation
```bash
git clone https://github.com/teremuhamblin/WebPulse-Engine
cd WebPulse-Engine
pip install -r requirements.txt
```

### 🔍 Exemple d’analyse
```bash
python -m webpulse analyze https://example.com
```

### 🧩 API REST
```bash
uvicorn src.api:app --reload
```

### 🧩 CLI
```python
python src/cli.py https://example.com
```

Endpoints :
- POST /analyze
- GET /report/{id}

### 🛠 Modules
- SEO Scanner
- Social Tracker
- Ads Optimizer
- Email Audit

### 📄 Licence
- The Unlicense
   - open‑source et libre d’utilisation.
