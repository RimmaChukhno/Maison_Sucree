/* Filtrage du menu
   Commentaires en français · code en anglais */

/** Affiche tous les produits puis branche les filtres */
function initMenuPage() {
  const grid = document.querySelector("#menu-grid");
  const filters = document.querySelectorAll(".filter-btn");
  if (!grid) return;

  function render(category) {
    grid.innerHTML = "";
    const list =
      !category || category === "all"
        ? PRODUCTS
        : PRODUCTS.filter(function (product) {
            return product.category === category;
          });

    if (list.length === 0) {
      grid.innerHTML =
        '<p class="text-center">Aucun produit dans cette catégorie.</p>';
      return;
    }

    list.forEach(function (product) {
      grid.appendChild(createProductCard(product));
    });
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      render(btn.getAttribute("data-filter"));
    });
  });

  render("all");
}
