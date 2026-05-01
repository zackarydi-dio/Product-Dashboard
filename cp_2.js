const API_URL = "https://www.course-api.com/javascript-store-products";

// Initialize app with curated product data
function fetchProducts() {
  showLoading(true);

  // Display curated fallback products with realistic pricing
  setTimeout(() => {
    displayFallbackProducts();
    showLoading(false);
  }, 300);
}

// Display products from API in grid
function displayProducts(products) {
  const container = document.querySelector("#product-container");
  container.innerHTML = "";
  clearError();

  if (products.length === 0) {
    showError("No products available.");
    return;
  }

  products.slice(0, 5).forEach((product) => {
    const { name, price, image } = product.fields;
    const formattedPrice = `$${(price / 100).toFixed(2)}`;
    renderCard(container, name, formattedPrice, image[0].url);
  });
}

// Display cached fallback products when API is unavailable
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

  fallback.forEach(({ name, price, image }) => {
    renderCard(container, name, price, image);
  });
}

// Render individual product card
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

// UI Helper: Show/hide loading spinner
function showLoading(show) {
  const loading = document.querySelector("#loading");
  loading.style.display = show ? "flex" : "none";
}

// UI Helper: Display error message
function showError(message) {
  const errorElement = document.querySelector("#error-message");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// UI Helper: Clear error message
function clearError() {
  const errorElement = document.querySelector("#error-message");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// Initialize app
fetchProducts();