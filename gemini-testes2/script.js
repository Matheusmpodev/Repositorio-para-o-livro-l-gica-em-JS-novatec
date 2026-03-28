const products = [
    { id: 1, name: "Figure Katana 01", price: "R$ 299,00", image: "[Image 1]" },
    { id: 2, name: "Poster Minimalista Neon", price: "R$ 89,00", image: "[Image 2]" },
    { id: 3, name: "Camiseta Bordada Kanji", price: "R$ 120,00", image: "[Image 3]" },
    { id: 4, name: "Moletom Aesthetic", price: "R$ 199,00", image: "[Image 4]" },
    { id: 5, name: "Chaveiro Acrílico", price: "R$ 35,00", image: "[Image 5]" },
    { id: 6, name: "Artbook Vol. 1", price: "R$ 150,00", image: "[Image 6]" }
];

const productGrid = document.querySelector('.product-grid');
const cartCount = document.getElementById('cart-count');
let itemsInCart = 0;

function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">PRODUTO ${product.id}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-btn" onclick="addToCart()">Adicionar ao Carrinho</button>
            </div>
        </div>
    `).join('');
}

function addToCart() {
    itemsInCart++;
    cartCount.innerText = itemsInCart;
    
    // Feedback visual no ícone
    cartCount.parentElement.style.transform = "scale(1.2)";
    cartCount.parentElement.style.color = "var(--accent)";
    setTimeout(() => {
        cartCount.parentElement.style.transform = "scale(1)";
        cartCount.parentElement.style.color = "var(--text)";
    }, 200);
}

// Scroll Reveal Logic
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    window.addEventListener("scroll", reveal);
    reveal(); // Checar posição inicial
});
