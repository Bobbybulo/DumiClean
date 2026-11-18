/**
 * Configuration Tailwind CSS du site DumiClean.
 * Le fichier css/style.css est généré à partir de src/style.css : voir README.md.
 */
module.exports = {
  // Fichiers dans lesquels Tailwind cherche les classes utilisées
  content: ['./index.html'],

  // Classes ajoutées uniquement par le JavaScript : à conserver même si absentes du HTML
  safelist: [
    'opacity-70',        // bouton d'envoi pendant l'envoi du formulaire
    'translate-y-full',  // barre d'appel mobile masquée pendant la saisie
    'shadow-lg',         // ombre de l'en-tête au défilement
    'overflow-hidden',   // page bloquée quand la fenêtre des mentions légales est ouverte
    'is-active',         // lien du menu correspondant à la section visible
    'status-success',    // messages de retour du formulaire
    'status-error',
    'status-info'
  ],

  theme: {
    // Points de rupture redéfinis pour ajouter "xs" (petits smartphones) dans le bon ordre
    screens: { xs: '380px', sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'] // Classe "font-display"
      },
      colors: {
        navy: { DEFAULT: '#0F172A', light: '#1E293B' },                                     // Bleu marine : sérieux
        aqua: { DEFAULT: '#0EA5E9', dark: '#0369A1', light: '#E0F2FE', pale: '#F0F9FF' },  // Cyan : fraîcheur
        logo: '#1A71AE'                                                                     // Bleu du logo DumiClean
      }
    }
  }
};
