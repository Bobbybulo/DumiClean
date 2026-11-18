# Site DumiClean

Site vitrine de DumiClean, publié sur https://www.dumiclean.fr via GitHub Pages
(branche `main`).

## Organisation

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | La page du site (textes, structure, scripts) |
| `css/style.css` | Feuille de style **générée** : ne pas la modifier à la main |
| `src/style.css` | Source de la feuille de style (composants, police, animations) |
| `tailwind.config.js` | Couleurs, police et réglages Tailwind CSS |
| `images/`, `fonts/` | Images et police du site |
| `CNAME` | Nom de domaine utilisé par GitHub Pages |

## Modifier le site

- **Changer un texte** dans `index.html` : aucune autre étape, la modification est en
  ligne environ une minute après l'enregistrement sur `main`.
- **Ajouter ou changer des classes Tailwind** (mise en page, couleurs…) dans
  `index.html`, ou modifier `src/style.css` / `tailwind.config.js` : régénérer la
  feuille de style avant d'enregistrer.

```bash
npm install
npm run build
```

Ensuite, modifier le paramètre `?v=` du lien vers `css/style.css` dans `index.html`
(par exemple la date du jour) pour que les visiteurs reçoivent la nouvelle version.
