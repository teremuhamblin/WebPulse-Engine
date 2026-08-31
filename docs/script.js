document.getElementById("scanBtn").addEventListener("click", async () => {
    const url = document.getElementById("urlInput").value;
    if (!url) return alert("Entre une URL à analyser !");
    document.getElementById("output").textContent = "Analyse en cours...";

    try {
        const response = await fetch(`https://webpulse-api.example.com/analyze?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").textContent = "Erreur : impossible d'analyser cette URL.";
    }
});
