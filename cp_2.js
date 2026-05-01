const API_URL = "https://www.course-api.com/javascript-store-products";

// Fetch products from API with fallback to local data
async function fetchProducts() {
  try {
    showLoading(true);
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    showError("Failed to load products from server. Showing cached products instead.");
    displayFallbackProducts();
  } finally {
    showLoading(false);
  }
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
      name: "High Back Chair",
      price: "$109.95",
      image: "https://dl.airtable.com/.attachments/530c07c5571cc2f68eb359f943d35cdd/9eff3b02/chair-3.png"
    },
    {
      name: "Accent Chair",
      price: "$129.99",
      image: "https://dl.airtable.com/.attachments/b8bb6f253b0571a92f9a481b5ee7a24e/bd94f3cd/chair-1.png"
    },
    {
      name: "Wooden Chair",
      price: "$89.95",
      image: "https://dl.airtable.com/.attachments/56f990f07e4e2743a4b5bfcc6f7b84e6/7e82fe1e/chair-2.png"
    },
    {
      name: "Classic Sofa",
      price: "$299.99",
      image: "https://dl.airtable.com/.attachments/5020be05eb28bfea0a84439252d53cfb/8df4d7a8/sofa-1.png"
    },
    {
      name: "Modern Sofa",
      price: "$349.95",
      image: "https://dl.airtable.com/.attachments/c0af5f2a3e50f4e9c97c2926ce34aec3/0ea0b9fd/sofa-2.png"
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