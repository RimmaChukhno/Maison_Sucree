/* Panier — localStorage
   Commentaires en français · code en anglais */

const CART_STORAGE_KEY = "maisonSucreeCart";

/** Lit le panier depuis localStorage */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Impossible de lire le panier :", error);
    return [];
  }
}

/** Enregistre le panier */
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

/** Nombre total d’articles */
function getCartItemCount() {
  return getCart().reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);
}

/** Total monétaire */
function getCartTotal() {
  return getCart().reduce(function (sum, item) {
    const product = getProductById(item.id);
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);
}

/**
 * Ajoute un produit (ou augmente la quantité)
 * @param {string} productId
 * @param {number} quantity
 */
function addToCart(productId, quantity) {
  const qty = quantity && quantity > 0 ? quantity : 1;
  const product = getProductById(productId);
  if (!product) return false;

  const cart = getCart();
  const existing = cart.find(function (item) {
    return item.id === productId;
  });

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ id: productId, quantity: qty });
  }

  saveCart(cart);
  return true;
}

/** Met à jour la quantité d’une ligne */
function setCartQuantity(productId, quantity) {
  let cart = getCart();

  if (quantity <= 0) {
    cart = cart.filter(function (item) {
      return item.id !== productId;
    });
  } else {
    const line = cart.find(function (item) {
      return item.id === productId;
    });
    if (line) line.quantity = quantity;
  }

  saveCart(cart);
}

/** Supprime une ligne */
function removeFromCart(productId) {
  const cart = getCart().filter(function (item) {
    return item.id !== productId;
  });
  saveCart(cart);
}

/** Vide le panier */
function clearCart() {
  saveCart([]);
}

/** Met à jour le badge du header */
function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCartItemCount();
  badges.forEach(function (badge) {
    badge.textContent = count > 0 ? String(count) : "";
    badge.setAttribute("data-count", String(count));
    badge.setAttribute("aria-label", count + " article(s) dans la commande");
  });
}

/** Affiche une notification toast */
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast._timer);
  showToast._timer = window.setTimeout(function () {
    toast.classList.remove("is-visible");
  }, 2600);
}

/** Crée le HTML d’une carte produit */
function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.setAttribute("data-category", product.category);

  article.innerHTML =
    '<div class="product-card__image">' +
    '<img src="' +
    product.image +
    '" alt="' +
    product.name +
    '" width="400" height="300" loading="lazy">' +
    "</div>" +
    '<div class="product-card__body">' +
    "<h3>" +
    product.name +
    "</h3>" +
    '<p class="product-card__desc">' +
    product.shortDescription +
    "</p>" +
    '<p class="product-card__price">' +
    formatPrice(product.price) +
    "</p>" +
    '<div class="product-card__actions">' +
    '<a class="btn btn--ghost btn--sm" href="product.html?id=' +
    product.id +
    '">Voir détails</a>' +
    '<button type="button" class="btn btn--primary btn--sm" data-add="' +
    product.id +
    '">Ajouter</button>' +
    "</div></div>";

  const addBtn = article.querySelector("[data-add]");
  addBtn.addEventListener("click", function () {
    addToCart(product.id, 1);
    showToast("Ajouté à votre commande.");
  });

  return article;
}

/** Affiche les best-sellers sur l’accueil */
function renderFeaturedProducts(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const featured = PRODUCTS.filter(function (p) {
    return p.featured;
  }).slice(0, 4);

  featured.forEach(function (product) {
    container.appendChild(createProductCard(product));
  });
}

/** Page panier : rendu complet */
function renderCartPage() {
  const list = document.querySelector("#cart-list");
  const empty = document.querySelector("#cart-empty");
  const summary = document.querySelector("#cart-summary");
  const totalEl = document.querySelector("#cart-total");
  if (!list || !empty || !summary || !totalEl) return;

  const cart = getCart();
  list.innerHTML = "";

  if (cart.length === 0) {
    empty.hidden = false;
    summary.hidden = true;
    return;
  }

  empty.hidden = true;
  summary.hidden = false;

  cart.forEach(function (item) {
    const product = getProductById(item.id);
    if (!product) return;

    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML =
      '<div class="cart-item__image"><img src="' +
      product.image +
      '" alt="' +
      product.name +
      '"></div>' +
      "<div>" +
      '<h3 class="cart-item__name">' +
      product.name +
      "</h3>" +
      '<p class="cart-item__price">' +
      formatPrice(product.price) +
      " / pièce</p>" +
      '<div class="qty-control" data-id="' +
      product.id +
      '">' +
      '<button type="button" class="qty-btn" data-action="decrease" aria-label="Diminuer">−</button>' +
      '<span class="qty-value">' +
      item.quantity +
      "</span>" +
      '<button type="button" class="qty-btn" data-action="increase" aria-label="Augmenter">+</button>' +
      "</div></div>" +
      '<div class="cart-item__actions">' +
      '<span class="cart-item__line-total">' +
      formatPrice(product.price * item.quantity) +
      "</span>" +
      '<button type="button" class="remove-btn" data-remove="' +
      product.id +
      '">Supprimer</button>' +
      "</div>";

    list.appendChild(row);
  });

  totalEl.textContent = formatPrice(getCartTotal());

  list.querySelectorAll(".qty-control").forEach(function (control) {
    const id = control.getAttribute("data-id");
    control.addEventListener("click", function (event) {
      const btn = event.target.closest("[data-action]");
      if (!btn) return;
      const line = getCart().find(function (i) {
        return i.id === id;
      });
      if (!line) return;
      const action = btn.getAttribute("data-action");
      const next =
        action === "increase" ? line.quantity + 1 : line.quantity - 1;
      setCartQuantity(id, next);
      renderCartPage();
    });
  });

  list.querySelectorAll("[data-remove]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      removeFromCart(btn.getAttribute("data-remove"));
      renderCartPage();
      showToast("Article retiré.");
    });
  });
}

/** Bouton « Passer la commande » (simulation) */
function initPlaceOrder() {
  const btn = document.querySelector("#place-order");
  const success = document.querySelector("#order-success");
  if (!btn) return;

  btn.addEventListener("click", function () {
    if (getCart().length === 0) return;
    clearCart();
    renderCartPage();
    if (success) {
      success.classList.add("is-visible");
      success.focus && success.focus();
    }
    showToast("Commande enregistrée (simulation).");
  });
}
