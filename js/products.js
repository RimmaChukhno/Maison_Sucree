/* Catalogue produits — données partagées
   Commentaires en français · identifiants en anglais */

const PRODUCTS = [
  {
    id: "strawberry-tart",
    name: "Tarte aux fraises",
    category: "cakes",
    shortDescription: "Fraises fraîches, crème vanille et pâte sablée.",
    description:
      "Une tarte classique revisitée : fraises de saison, crème diplomate à la vanille et fond sablé beurré, préparée chaque matin.",
    price: 6.5,
    ingredients: "Fraises, farine, beurre, sucre, œufs, lait, vanille.",
    allergens: "Gluten, œufs, lait.",
    image: "assets/images2/Tarte-aux-fraises.jpg",
    featured: true
  },
  {
    id: "opera",
    name: "Opéra",
    category: "cakes",
    shortDescription: "Café, chocolat et biscuit joconde.",
    description:
      "Feuilletage de saveurs : biscuit joconde, ganache chocolat et crème au café, fini d’un glaçage brillant.",
    price: 5.8,
    ingredients: "Amandes, œufs, sucre, beurre, chocolat, café, farine.",
    allergens: "Gluten, œufs, lait, fruits à coque.",
    image: "assets/images2/Opera.jpg",
    featured: true
  },
  {
    id: "lemon-tart",
    name: "Tarte au citron",
    category: "cakes",
    shortDescription: "Citron confit et meringue légère.",
    description:
      "Acidité du citron et douceur de la meringue italienne sur une pâte croustillante.",
    price: 5.5,
    ingredients: "Citron, farine, beurre, sucre, œufs.",
    allergens: "Gluten, œufs, lait.",
    image: "assets/images2/Tarte-au-citron.jpg",
    featured: false
  },
  {
    id: "croissant",
    name: "Croissant",
    category: "pastries",
    shortDescription: "Beurre AOP, feuilletage croustillant.",
    description:
      "Croissant pur beurre, touré à la main, doré et aérien — signature du matin marseillais.",
    price: 1.8,
    ingredients: "Farine, beurre, lait, sucre, levure, sel.",
    allergens: "Gluten, lait.",
    image: "assets/images2/Croissant.jpg",
    featured: true
  },
  {
    id: "pain-chocolat",
    name: "Pain au chocolat",
    category: "pastries",
    shortDescription: "Deux barres de chocolat noir.",
    description:
      "Feuilletage beurré garni de chocolat noir intense, idéal pour le petit-déjeuner.",
    price: 1.9,
    ingredients: "Farine, beurre, chocolat, lait, sucre, levure, sel.",
    allergens: "Gluten, lait, soja.",
    image: "assets/images2/Pain-au-chocolat.jpg",
    featured: true
  },
  {
    id: "eclair",
    name: "Éclair au chocolat",
    category: "pastries",
    shortDescription: "Crème pâtissière et glaçage cacao.",
    description:
      "Pâte à choux légère, crème pâtissière chocolat et glaçage brillant.",
    price: 4.2,
    ingredients: "Farine, beurre, œufs, lait, sucre, cacao, chocolat.",
    allergens: "Gluten, œufs, lait.",
    image: "assets/images2/Eclair-au-chocolat.jpg",
    featured: false
  },
  {
    id: "baguette",
    name: "Baguette tradition",
    category: "bread",
    shortDescription: "Croûte fine, mie alvéolée.",
    description:
      "Baguette de tradition française, fermentation lente, croûte croustillante.",
    price: 1.4,
    ingredients: "Farine de blé, eau, sel, levure.",
    allergens: "Gluten.",
    image: "assets/images2/Baguette-tradition.jpg",
    featured: false
  },
  {
    id: "campagne",
    name: "Pain de campagne",
    category: "bread",
    shortDescription: "Levain naturel, croûte rustique.",
    description:
      "Pain au levain, farines sélectionnées, mie dense et parfumée.",
    price: 3.5,
    ingredients: "Farine de blé, farine de seigle, eau, sel, levain.",
    allergens: "Gluten.",
    image: "assets/images2/Pain-de-campagne.jpg",
    featured: false
  },
  {
    id: "brioche",
    name: "Brioche",
    category: "bread",
    shortDescription: "Moelleuse et légèrement sucrée.",
    description:
      "Brioche généreuse au beurre, idéale à partager au goûter.",
    price: 4.0,
    ingredients: "Farine, beurre, œufs, lait, sucre, levure, sel.",
    allergens: "Gluten, œufs, lait.",
    image: "assets/images2/Brioche.jpg",
    featured: false
  },
  {
    id: "cafe-creme",
    name: "Café crème",
    category: "drinks",
    shortDescription: "Espresso et lait onctueux.",
    description:
      "Café torréfié avec soin, servi avec une crème de lait veloutée.",
    price: 2.5,
    ingredients: "Café, lait.",
    allergens: "Lait.",
    image: "assets/images2/Cafe-creme.jpg",
    featured: false
  },
  {
    id: "chocolat-chaud",
    name: "Chocolat chaud",
    category: "drinks",
    shortDescription: "Chocolat noir fondant.",
    description:
      "Boisson réconfortante au chocolat noir, servie bien chaude.",
    price: 3.2,
    ingredients: "Chocolat, lait, sucre.",
    allergens: "Lait, soja.",
    image: "assets/images2/Chocolat-chaud.jpg",
    featured: false
  },
  {
    id: "the-vert",
    name: "Thé vert",
    category: "drinks",
    shortDescription: "Infusion délicate.",
    description: "Thé vert de qualité, notes végétales et fraîches.",
    price: 2.8,
    ingredients: "Thé vert, eau.",
    allergens: "Aucun allergène majeur.",
    image: "assets/images2/The-vert.jpg",
    featured: false
  }
];

/** Retourne un produit par id, ou null */
function getProductById(id) {
  return PRODUCTS.find(function (product) {
    return product.id === id;
  }) || null;
}

/** Formate un prix en euros */
function formatPrice(value) {
  return (
    value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " €"
  );
}
