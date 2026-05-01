# Store Products Dashboard

A dynamic product display app that fetches and renders real product data from a live API using JavaScript. Built to demonstrate asynchronous programming, DOM manipulation, and responsive UI design.

---

## 🛍️ What It Does

Store Products Dashboard connects to a live product API and dynamically renders a curated collection of items as styled cards on the page. Key features include:

- Fetches live product data from an external REST API
- Displays product name, price, and image for each item
- Falls back to local product data if the API is unavailable
- Smooth hover animations on each product card
- Fully responsive grid layout that adapts to any screen size

---

## 🛠️ Technologies Used

- **HTML5** — Semantic page structure
- **CSS3** — CSS Grid, custom properties (variables), hover transitions
- **JavaScript (Vanilla)** — Fetch API, async/await, dynamic DOM rendering
- **Google Fonts** — Playfair Display & DM Sans

---

## 🚀 How to Run

No installation or dependencies required.

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Products will load automatically from the API — if the API is unavailable, fallback products are displayed instead

---

## 💡 What I Learned

This project gave me hands-on experience with asynchronous JavaScript. I learned the difference between using `.then()` promise chaining and the cleaner `async/await` syntax for handling API responses. I also learned how to build a graceful fallback system so the app still works even when the external API fails. On the front-end side, I got more comfortable using CSS Grid and custom properties to build a polished, consistent UI.

---

## 📁 Project Structure

```
store-products-dashboard/
├── index.html      # Main HTML page
├── style.css       # Grid layout, card styles, animations
└── script.js       # API fetch, DOM rendering, fallback logic
```

---

*Built as part of a Business Application Development course project.*
