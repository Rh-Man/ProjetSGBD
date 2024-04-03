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


// Au chargement de la page, afficher les requêtes fictives
window.onload = function() {
    afficherRequetes(requetesFictives);
};