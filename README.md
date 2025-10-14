# Portfolio — Haythem Ayadi

Site personnel (e-portfolio) réalisé en React (Create React App).

Ce dépôt contient la version source de mon portfolio, ainsi que les fichiers build prêts à être déployés dans le dossier `build/`.

## Aperçu
- Page d'accueil avec présentation (Hero)
- Section À propos (`About`) avec pays visités, compétences, licences
- Section Permis avec visionneuse intégrée (modal) pour consulter les scans recto/verso
- Section Formation avec diplômes et visionneuse
- Section Projets, Expérience, Compétences, Contact
- Widget date/heure/météo (dans `About`) et support i18n (FR / EN)

## Structure importante
```
public/                  # fichiers publics (index.html, assets statiques)
src/
	components/            # composants React (About, Licenses, Contact, Formation...)
	assets/certif/         # PDF des diplômes et permis
	locales/               # fichiers de traduction (fr/en)
	hooks/                 # hooks réutilisables (ex: useInView)
	styles/                # styles globaux (animations)
	index.js
	App.js

build/                   # build de production (généré)
```

## Lancer en local
Prérequis : Node.js (>=16 recommandé), npm.

1. Installer les dépendances

```bash
npm install
```

2. Lancer le serveur de développement

```bash
npm start
```

3. Générer le build de production

```bash
npm run build
```

Le dossier `build/` pourra être servi par n'importe quel serveur statique.

## Internationalisation
Le projet utilise `react-i18next` avec les fichiers de traduction situés dans `src/locales/fr/translation.json` et `src/locales/en/translation.json`.

Pour ajouter une clé :
- Ajouter la clé dans les deux fichiers (FR/EN)
- Utiliser `t('path.to.key')` dans les composants

## Permis & Diplômes (visionneuse)
- Les PDFs sont dans `src/assets/certif/` et s'ouvrent avec le même modal que les diplômes.
- Le modal est rendu via `createPortal` pour s'assurer qu'il n'est pas tronqué par des parents transformés.
- Le téléchargement s'effectue via un lien programmatique (download).

Remarques : pour un accès direct (sans bundler), vous pouvez déplacer les PDFs dans `public/` et utiliser `/Permis.pdf`.

## Modifier / ajouter un PDF
- Placer le PDF dans `src/assets/certif/`
- Importer le fichier dans le composant (ex: `import Permis from '../assets/certif/Permis.pdf'`)
- Appeler la fonction `openModal(Permis, 'Permis (Recto)')` (ou ajouter un bouton avec `downloadPDF`)

## Styles et animations
- Styles par composant : `src/components/*.css`
- Animations globales dans `src/styles/animations.css`

## Déploiement rapide
- Le build est prêt dans `build/` après `npm run build`.
- Hébergement conseillé : Netlify, Vercel, GitHub Pages (ou tout serveur statique).

## Notes de maintenance
- Garder les fichiers de traduction valides (attention aux virgules JSON).
- Les composants utilisent des hooks (ex: `useInView`) et i18n — si vous changez leur API, mettez à jour les imports.

## Contacter
- Email: Engineer.haithem.ayadi@gmail.com
- WhatsApp: +216 23294229

---

Si vous voulez, je peux :
- Ajouter un badge `README` avec capture d'écran et instructions de déploiement sur Netlify/Vercel.
- Ajouter des miniatures pour les PDFs.
- Traduire le README en anglais.

Dites-moi ce que vous préférez et j'ajoute ça.
