#!/bin/bash
cd "$(dirname "$0")"
echo "Installation des dépendances (peut prendre une minute la première fois)..."
npm install
echo ""
echo "Démarrage du site..."
echo "Ouvre http://localhost:8080 dans ton navigateur une fois que c'est prêt."
echo "Laisse cette fenêtre ouverte tant que tu travailles. Ferme-la pour arrêter."
echo ""
npm run dev
