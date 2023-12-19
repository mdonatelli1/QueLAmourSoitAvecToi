const charList = [
  {
    name: "Bender",
    imageSRC: "src/assets/bender.png",
    desc: "Un robot sarcastique avec une personnalité anticonformiste, il dévie de sa programmation initiale pour mener une vie pleine d'excès. Physiquement, il a une forme métallique avec des bras en pince et des yeux en fente. Alimenté par de l'alcool, il est connu pour ses commentaires cinglants et son attachement ambigu à l'humanité.",
    id: 1,
  },
  {
    name: "Lara Croft",
    imageSRC: "src/assets/lara-croft.png",
    desc: "Connue pour son intelligence, sa force physique et ses compétences en tir. Physiquement, elle est souvent représentée avec une silhouette athlétique, des cheveux bruns et ses pistolets jumeaux. Elle est une figure emblématique du monde du jeu vidéo depuis sa première apparition en 1996.",
    id: 2,
  },
  {
    name: "Heisenberg",
    imageSRC: "src/assets/heisenberg.png",
    desc: "Personnage principal d'une série, professeur de chimie transformé en fabricant de méthamphétamine en raison d'un cancer. Son évolution va d'un homme timide à un criminel impitoyable. Physiquement, il a des cheveux rasés et une barbe, reflétant son changement. Il est connu pour son intelligence et son attitude impitoyable.",
    id: 3,
  },
  {
    name: "Dark Vador",
    imageSRC: "src/assets/dark-vador.png",
    datePlace: "src/assets/dark-vador-date.jpg",
    id: 4,
  },
  {
    name: "R2D2",
    imageSRC: "src/assets/r2d2.png",
    datePlace: "src/assets/r2d2-date.png",
    id: 5,
  },
  {
    name: "Princess Leia",
    imageSRC: "src/assets/princess-leia.png",
    datePlace: "src/assets/leia-date.png",
    id: 6,
    questions: [
      {
        question: "Si tu avais accès à une technologie avancée comme le sabre laser, comment l'utiliserais-tu pour le bien de tous ?",
        answerGood: "Je l'utiliserais pour protéger et défendre ceux qui en ont besoin, pour apporter la paix et la justice dans l'univers. Je ne l'utiliserais jamais pour nuire à autrui.",
        answerBad: "Je l'utiliserais pour mes propres intérêts, pour obtenir du pouvoir et manipuler les gens. Je crois que la fin justifie les moyens.", 
      },
      {
        question: "Si tu avais la possibilité de changer le cours de l'histoire galactique, quelle action importante entreprendrais-tu ?",
        answerGood: "Je m'efforcerais de mettre fin aux conflits et de rétablir l'équilibre dans la galaxie. Je chercherais à unir les peuples plutôt qu'à les diviser.",
        answerBad: "Je profiterais de la situation pour me positionner en tant que leader incontesté, peu importe les conséquences pour les autres. Le pouvoir absolu serait mon objectif principal.",
      },
      {
        question: "Comment vois-tu la notion de sacrifice pour une cause qui te tient à cœur ?",
        answerGood: "Je suis prêt à sacrifier mes propres intérêts et même ma propre sécurité pour défendre ce en quoi je crois. Le bien-être de tous prime sur le mien.",
        answerBad: "Je ne suis pas prêt à faire de sacrifices personnels, je préfère privilégier mes propres intérêts et éviter tout risque pour moi-même, peu importe la cause."
      }
    ]
  },
  {
    name: "Personnage mystère",
    imageSRC: "src/assets/mystere.png",
    datePlace: "",
    id: 7,
  },
];

export default charList;
