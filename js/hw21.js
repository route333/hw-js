const books = [
  { title: "Five feet apart", category: "Romance", price: 25 },
  { title: "emotional intelligence", category: "Psyhology", price: 15 },
  { title: "The Witcher", category: "Fantasy", price: 20 },
];

const wantedCategory = "Psyhology";
const minPrice = 15;
const maxPrice = 25;

const yourFiltersOnSite = books
  .filter((book) => book.category === wantedCategory)
  .filter((book) => book.price >= minPrice && book.price <= maxPrice);
console.log(yourFiltersOnSite);
