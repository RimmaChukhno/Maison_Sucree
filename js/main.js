/* Scripts globaux : navigation, fiche produit, formulaire
   Commentaires en français · code en anglais */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  setActiveNavLink();
  updateCartBadge();
  initProductPage();
  initContactForm();

  // Pages spécifiques
  if (document.querySelector("#featured-grid")) {
    renderFeaturedProducts("#featured-grid");
  }
  if (document.querySelector("#menu-grid")) {
    initMenuPage();
  }
  if (document.querySelector("#cart-list")) {
    renderCartPage();
    initPlaceOrder();
  }
});

/** Menu burger mobile */
function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/** Marque le lien de navigation actif */
function setActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });
}

/** Page détail produit (?id=…) */
function initProductPage() {
  const root = document.querySelector("#product-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = id ? getProductById(id) : null;

  if (!product) {
    root.innerHTML =
      '<div class="cart-empty"><h2>Produit introuvable</h2>' +
      '<p>Ce produit n’existe pas ou a été retiré.</p>' +
      '<a class="btn btn--primary" href="menu.html">Retour au menu</a></div>';
    return;
  }

  document.title = product.name + " — Maison Sucrée";

  let quantity = 1;

  root.innerHTML =
    '<div class="product-detail__image">' +
    '<img src="' +
    product.image +
    '" alt="' +
    product.name +
    '">' +
    "</div>" +
    "<div>" +
    "<h1>" +
    product.name +
    "</h1>" +
    "<p>" +
    product.description +
    "</p>" +
    '<p class="product-detail__price">' +
    formatPrice(product.price) +
    "</p>" +
    '<div class="meta-block">' +
    "<h3>Ingrédients</h3><p>" +
    product.ingredients +
    "</p>" +
    "<h3>Allergènes</h3><p>" +
    product.allergens +
    "</p></div>" +
    '<div class="qty-row">' +
    "<span>Quantité</span>" +
    '<div class="qty-control">' +
    '<button type="button" class="qty-btn" id="qty-minus" aria-label="Diminuer">−</button>' +
    '<span class="qty-value" id="qty-value">1</span>' +
    '<button type="button" class="qty-btn" id="qty-plus" aria-label="Augmenter">+</button>' +
    "</div></div>" +
    '<button type="button" class="btn btn--primary" id="add-to-order">Ajouter à la commande</button>' +
    "</div>";

  const qtyValue = document.querySelector("#qty-value");
  document.querySelector("#qty-minus").addEventListener("click", function () {
    if (quantity > 1) {
      quantity -= 1;
      qtyValue.textContent = String(quantity);
    }
  });
  document.querySelector("#qty-plus").addEventListener("click", function () {
    quantity += 1;
    qtyValue.textContent = String(quantity);
  });
  document.querySelector("#add-to-order").addEventListener("click", function () {
    addToCart(product.id, quantity);
    showToast("Ajouté à votre commande.");
  });
}

/** Validation basique du formulaire contact */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const success = document.querySelector("#form-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    const fields = [
      { id: "name", test: function (v) { return v.trim().length >= 2; } },
      {
        id: "email",
        test: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
        }
      },
      { id: "message", test: function (v) { return v.trim().length >= 10; } }
    ];

    fields.forEach(function (field) {
      const input = document.querySelector("#" + field.id);
      const group = input.closest(".form-group");
      const ok = field.test(input.value);
      group.classList.toggle("is-error", !ok);
      if (!ok) valid = false;
    });

    if (!valid) return;

    form.reset();
    form.querySelectorAll(".form-group").forEach(function (g) {
      g.classList.remove("is-error");
    });
    if (success) success.classList.add("is-visible");
    showToast("Message envoyé (simulation).");
  });
}
