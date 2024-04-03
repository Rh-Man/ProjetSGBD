// Fonction pour afficher les requêtes
function afficherRequetes(requetes) {
    const listeRequetes = document.getElementById('liste-requetes');
    listeRequetes.innerHTML = ''; // Effacer le contenu actuel

    requetes.forEach(requete => {
        const requeteBox = document.createElement('div');
        requeteBox.classList.add('requete-box');
    
        const methodInfo = document.createElement('div');
        methodInfo.classList.add('requete-info');
        methodInfo.textContent = `Méthode: ${requete.method}`;
    
        const urlInfo = document.createElement('div');
        urlInfo.classList.add('requete-info');
        urlInfo.textContent = `URL: ${requete.url}`;
    
        const ipInfo = document.createElement('div');
        ipInfo.classList.add('requete-info');
        ipInfo.textContent = `IP: ${requete.ip}`;
    
        const agentInfo = document.createElement('div');
        agentInfo.classList.add('requete-info');
        agentInfo.textContent = `Agent Utilisateur: ${requete.userAgent}`;
    
        requeteBox.appendChild(methodInfo);
        requeteBox.appendChild(urlInfo);
        requeteBox.appendChild(ipInfo);
        requeteBox.appendChild(agentInfo);
    
        listeRequetes.appendChild(requeteBox);
    });
    
}

// Exemple de requêtes fictives pour tester l'affichage
const requetesFictives = [    
    { method: "GET", url: "/images/logo.png", ip: "192.168.1.12", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" },
    { method: "POST", url: "/api/orders", ip: "192.168.1.2", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/images/logo.png", ip: "192.168.1.3", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" },
    { method: "GET", url: "/api/products", ip: "192.168.1.4", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "POST", url: "/api/orders", ip: "192.168.1.5", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/images/logo.png", ip: "192.168.1.6", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" },
    { method: "GET", url: "/api/products", ip: "192.168.1.7", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "POST", url: "/api/orders", ip: "192.168.1.8", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/images/logo.png", ip: "192.168.1.9", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" },
    { method: "GET", url: "/api/products", ip: "192.168.1.10", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "POST", url: "/api/orders", ip: "192.168.1.11", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/api/products", ip: "192.168.1.1", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/api/products", ip: "192.168.1.13", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "POST", url: "/api/orders", ip: "192.168.1.14", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36" },
    { method: "GET", url: "/images/logo.png", ip: "192.168.1.15", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1" }
];

// Au chargement de la page, afficher les requêtes fictives
window.onload = function() {
    afficherRequetes(requetesFictives);
};