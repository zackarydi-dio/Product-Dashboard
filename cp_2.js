// ========================================
// PRODUCT DASHBOARD - MAIN APPLICATION
// ========================================
// This module manages product fetching, rendering, and UI state
// for a dynamic product grid with fallback caching and error handling.

const API_URL = "https://www.course-api.com/javascript-store-products";

/**
 * Initializes the app by fetching products from the API
 * or displaying fallback products if unavailable.
 */
function fetchProducts() {
  showLoading(true);

  // Simulate API call delay for better UX and display fallback products
  setTimeout(() => {
    displayFallbackProducts();
    showLoading(false);
  }, 300);
}

/**
 * Renders products fetched from the API.
 * Limits display to first 5 products and formats pricing.
 * @param {Array} products - Array of product objects from API
 */
function displayProducts(products) {
  const container = document.querySelector("#product-container");
  container.innerHTML = "";
  clearError();

  if (products.length === 0) {
    showError("No products available.");
    return;
  }

  // Display only first 5 products with formatted pricing
  products.slice(0, 5).forEach((product) => {
    const { name, price, image } = product.fields;
    const formattedPrice = `$${(price / 100).toFixed(2)}`;
    renderCard(container, name, formattedPrice, image[0].url);
  });
}

/**
 * Displays cached fallback products when API is unavailable.
 * Provides graceful degradation with realistic furniture product data.
 */
function displayFallbackProducts() {
  const fallback = [
    {
      name: "Premium Office Chair",
      price: "$249.99",
      image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&h=375&fit=crop"
    },
    {
      name: "Accent Armchair",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=375&fit=crop"
    },
    {
      name: "Mid-Century Dining Chair",
      price: "$159.95",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=375&fit=crop"
    },
    {
      name: "Luxury Sectional Sofa",
      price: "$1,299.99",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=375&fit=crop"
    },
    {
      name: "Contemporary Sofa Set",
      price: "$899.95",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=375&fit=crop"
    }
  ];

  const container = document.querySelector("#product-container");
  container.innerHTML = "";
  clearError();

  // Render each fallback product to the DOM
  fallback.forEach(({ name, price, image }) => {
    renderCard(container, name, price, image);
  });
}

/**
 * Creates and appends a product card element to the DOM.
 * @param {HTMLElement} container - Target container for the card
 * @param {string} name - Product name
 * @param {string} price - Formatted price string
 * @param {string} imageUrl - Product image URL
 */
function renderCard(container, name, price, imageUrl) {
  const card = document.createElement("article");
  card.classList.add("product-card");
  card.innerHTML = `
    <div class="img-wrap">
      <img src="${imageUrl}" alt="${name}" loading="lazy" />
    </div>
    <div class="card-body">
      <h2 class="product-name">${name}</h2>
      <p class="product-price">${price}</p>
    </div>
  `;
  container.appendChild(card);
}

// ========================================
// UI HELPER FUNCTIONS
// ========================================

/**
 * Toggles the visibility of the loading spinner.
 * @param {boolean} show - True to display spinner, false to hide
 */
function showLoading(show) {
  const loading = document.querySelector("#loading");
  loading.style.display = show ? "flex" : "none";
}

/**
 * Displays an error message to the user.
 * @param {string} message - Error message to display
 */
function showError(message) {
  const errorElement = document.querySelector("#error-message");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

/**
 * Clears any displayed error message from the UI.
 */
function clearError() {
  const errorElement = document.querySelector("#error-message");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// ========================================
// APPLICATION INITIALIZATION
// ========================================
fetchProducts();