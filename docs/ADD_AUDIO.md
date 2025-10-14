# Ajouter la musique de fond

Placez votre fichier audio (format .mp3 ou .ogg recommandé) dans le dossier `public/audio/` avec le nom `background.mp3`.

Exemple de chemin final :

public/audio/background.mp3

Pourquoi `public/` ? Quand vous construisez l'application, tout ce qui est dans `public/` est servi tel quel. Le composant `BackgroundMusic` utilise le chemin `/audio/background.mp3`.

Étapes rapides :

1. Créez le dossier `public/audio` s'il n'existe pas.
2. Copiez votre fichier `background.mp3` dedans.
3. Lancer l'application en local :

```cmd
npm install
npm start
```

4. Sur la page, cliquez sur le bouton en bas à droite pour activer/désactiver la musique.

Notes :
- Les navigateurs bloquent parfois l'autoplay. Le composant démarre muet par défaut et attend que l'utilisateur active le son avec le bouton.
- Vous pouvez ajuster le volume par défaut dans `src/components/BackgroundMusic.js` (propriété `audio.volume`).
