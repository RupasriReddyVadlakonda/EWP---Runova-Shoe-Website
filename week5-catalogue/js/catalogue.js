// Week 5 - Shoe catalogue using HTML + CSS + JavaScript

const shoes = [
    { id: "S101", name: "Air Max 270",           brand: "Nike",     category: "Sports",   gender: "Men",    size: 9, color: "Black", price: 8999, stock: 20 },
    { id: "S102", name: "Ultraboost 22",         brand: "Adidas",   category: "Running",  gender: "Women",  size: 7, color: "White", price: 9999, stock: 15 },
    { id: "S103", name: "Suede Classic",         brand: "Puma",     category: "Casual",   gender: "Unisex", size: 8, color: "Blue",  price: 5499, stock: 25 },
    { id: "S104", name: "Chuck Taylor All Star", brand: "Converse", category: "Sneakers", gender: "Unisex", size: 9, color: "Red",   price: 4499, stock: 30 },
    { id: "S105", name: "Classic Leather",       brand: "Reebok",   category: "Casual",   gender: "Men",    size: 10, color: "Grey", price: 5299, stock: 0 },
    { id: "S106", name: "Oxford Formal",         brand: "Bata",     category: "Formal",   gender: "Men",    size: 8, color: "Brown", price: 2999, stock: 18 },
    { id: "S107", name: "Pegasus 40",            brand: "Nike",     category: "Running",  gender: "Women",  size: 6, color: "Pink",  price: 10495, stock: 10 },
    { id: "S108", name: "Gazelle",               brand: "Adidas",   category: "Sneakers", gender: "Unisex", size: 9, color: "Green", price: 7999, stock: 12 }
];

const colorMap = { Black: "#d1d5db", White: "#f3f4f6", Blue: "#bfdbfe", Red: "#fecaca",
                   Grey: "#e5e7eb", Brown: "#e7d3bf", Pink: "#fbcfe8", Green: "#bbf7d0" };

let cartCount = 0, cartTotal = 0;

const grid = document.getElementById("shoeGrid");
const noResult = document.getElementById("noResult");

function render(list) {
    grid.innerHTML = "";
    noResult.style.display = list.length === 0 ? "block" : "none";

    list.forEach(s => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="pic" style="background:${colorMap[s.color] || "#eee"}">&#128095;</div>
            <div class="info">
                <h3>${s.name}</h3>
                <p class="meta">${s.brand} | ${s.category} | ${s.gender}</p>
                <p class="meta">Size ${s.size} | ${s.color}</p>
                <p class="price">Rs. ${s.price.toLocaleString("en-IN")}</p>
                ${s.stock === 0 ? '<span class="badge">Out of stock</span>' : '<p class="meta">In stock: ' + s.stock + '</p>'}
                <button ${s.stock === 0 ? "disabled" : ""} onclick="addToCart('${s.id}')">Add to Cart</button>
            </div>`;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const q = document.getElementById("search").value.toLowerCase().trim();
    const cat = document.getElementById("category").value;
    const gen = document.getElementById("gender").value;
    const sort = document.getElementById("sort").value;

    let list = shoes.filter(s =>
        (s.name.toLowerCase().includes(q) || s.brand.toLowerCase().includes(q)) &&
        (cat === "" || s.category === cat) &&
        (gen === "" || s.gender === gen));

    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    render(list);
}

function addToCart(id) {
    const shoe = shoes.find(s => s.id === id);
    if (!shoe || shoe.stock === 0) return;
    cartCount++;
    cartTotal += shoe.price;
    document.getElementById("cartCount").textContent = cartCount;
    document.getElementById("cartTotal").textContent = cartTotal.toLocaleString("en-IN");
}

["search", "category", "gender", "sort"].forEach(id => {
    document.getElementById(id).addEventListener("input", applyFilters);
});

applyFilters();   // initial display
