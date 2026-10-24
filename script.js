// Full 25-Pair Kobe Bryant Starting Inventory Dataset
const kobeInventory = [
    { id: 1, name: "Nike Kobe 6 Protro 'Grinch'", silhouette: "Kobe 6", condition: "Deadstock", type: "Protro", price: 780, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX0_X4FUiY10zWaHEPC5v53-VJnU_ExRBvbTVY2kYMA&s=10", featured: true },
    { id: 2, name: "Nike Kobe 6 Protro 'Reverse Grinch'", silhouette: "Kobe 6", condition: "Deadstock", type: "Protro", price: 390, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalqEgU0z9okE83E5m6g_jWSx0dFqF6CmjEVg54GMFpQ&s=10", featured: true },
    { id: 3, name: "Nike Kobe 5 Protro 'Bruce Lee'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 520, size: "9.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsA1sTcUh-a9q3zfODaQNp2UUQR--wobuSHk0rLnZ1kQ&s=10", featured: true },
    { id: 4, name: "Nike Kobe 5 Protro 'Year of the Mamba Eggplant'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 290, size: "11.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7oo_iGrqmAJBV_TMB1SsTJtYFjowxzGZtKhD4yiCgA&s=10", featured: true },
    { id: 5, name: "Nike Kobe 5 Protro 'Year of the Mamba Red'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 310, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJ7yxb81GcOAhwpFHuWXK4WB9Nit4h-sRKSiNNg8dKw&s=10", featured: true },
    { id: 6, name: "Nike Kobe 5 Protro 'X-Ray'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 260, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCupdlHOCkW_rCt4U6lgMsrli_Cq3Eyr9ExuE_yP0GA&s=10", featured: true },
    { id: 7, name: "Nike Kobe 4 Protro 'Philly'", silhouette: "Kobe 4", condition: "Deadstock", type: "Protro", price: 240, size: "9.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHCGshc29iy_y0GPJ1J4vSW5HxArdpd9E_5v7jWF00Q&s=10", featured: false },
    { id: 8, name: "Nike Kobe 4 Protro 'Gold Medal'", silhouette: "Kobe 4", condition: "Deadstock", type: "Protro", price: 275, size: "11.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4dhrPYh3yhyOwPrWe1lAlgYpJvh44iylV39B7rau9g&s=10", featured: false },
    { id: 9, name: "Nike Kobe 4 Protro 'Mambacita Gigi'", silhouette: "Kobe 4", condition: "Deadstock", type: "Protro", price: 440, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIhwYAv-tw74s9bvbCC1e3WFU8vIVqjDYnHVkIEwqWg&s=10", featured: false },
    { id: 10, name: "Nike Kobe 8 Protro 'Venice Beach'", silhouette: "Kobe 8", condition: "Deadstock", type: "Protro", price: 230, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYEVVPg3Fu9hYT87MAb5JnzuUU_zpg06Zq7EHkvSSpg&s=10", featured: false },
    { id: 11, name: "Nike Kobe 8 Protro 'Game Royal'", silhouette: "Kobe 8", condition: "Deadstock", type: "Protro", price: 210, size: "9.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4IJ6e_sE-7QPwaa-EiLkLdHLAVWpzJ6JUPXsnotXAA&s=10", featured: false },
    { id: 12, name: "Nike Kobe 8 Protro 'Team Orange'", silhouette: "Kobe 8", condition: "Deadstock", type: "Protro", price: 205, size: "11.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVzfl9znzh1oRueKJ-I8fBB0eWUWhPkTyoZ4XHBrJiw&s=10", featured: false },
    { id: 13, name: "Nike Kobe 6 Protro 'Italian Camo'", silhouette: "Kobe 6", condition: "Deadstock", type: "Protro", price: 310, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUyzjvpnmuZNTcCAazuyTRFY9vNWIVUqE-A1eUUwN6w&s=10", featured: false },
    { id: 14, name: "Nike Kobe 6 Protro 'Mambacita Sweet 16'", silhouette: "Kobe 6", condition: "Deadstock", type: "Protro", price: 680, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReimxX5cAPmzmx9ES7dHXXvNbzE_xL9tUuCCARsixqFA&s=10", featured: false },
    { id: 15, name: "Nike Kobe 5 Protro 'Chaos'", silhouette: "Kobe 5", condition: "Pre-owned", type: "Protro", price: 340, size: "9.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlklvM_osoVeXTpHwhXqgNhYQlXk__mueWE1EwQnJclA&s=10", featured: false },
    { id: 16, name: "Nike Kobe 5 Protro 'P.J. Tucker PE'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 490, size: "12.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm-BorY8Svu0A_igaiZ58oaN6ADj-Bjx3vhtMjLx47Q&s=10", featured: false },
    { id: 17, name: "Nike Kobe 4 Protro 'Draft Day'", silhouette: "Kobe 4", condition: "Pre-owned", type: "Protro", price: 290, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiyXapaMrt0lvvQUsZ_m1Bs9pHp8mRANPaf5zWp6G4A&s=10", featured: false },
    { id: 18, name: "Nike Kobe 11 Elite Low 'FTB Fade to Black'", silhouette: "Kobe 11", condition: "Deadstock", type: "OG", price: 850, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV22y2Q429TsbH6UgpD9W2p2oNUYSIn4NDMaAeBispAQ&s=10", featured: false },
    { id: 19, name: "Nike Kobe 11 Elite Low 'Tinker Hatfield'", silhouette: "Kobe 11", condition: "Pre-owned", type: "OG", price: 320, size: "9.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YQfSKNThMnb5ipBdyF7aul3V7FY9sGThKF10PH2ypw&s=10", featured: false },
    { id: 20, name: "Nike Kobe 8 Protro 'Triple White'", silhouette: "Kobe 8", condition: "Deadstock", type: "Protro", price: 220, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUXWszl06vmpe_mDdyBlizXFKSrpSI1nUfFkn6zLUkQ&s=10", featured: false },
    { id: 21, name: "Nike Kobe 6 Protro 'Total Orange WNBA'", silhouette: "Kobe 6", condition: "Deadstock", type: "Protro", price: 330, size: "9.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1MxeuaBWeegcDRVdFpa1oVntAq3TbhgjzJHXSvzOqA&s=10", featured: false },
    { id: 22, name: "Nike Kobe 4 Protro 'UNDEFEATED Camo'", silhouette: "Kobe 4", condition: "Deadstock", type: "Protro", price: 410, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFujAW_AAU2u5kN5tFFI_DuSEzV7TwtmjmN7CyWDE1w&s=10", featured: false },
    { id: 23, name: "Nike Kobe 5 Protro '5x Champ'", silhouette: "Kobe 5", condition: "Deadstock", type: "Protro", price: 380, size: "11.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGNN_vYJJ76fRgQ2e67y-gNNtoNAJxFSFOixm-Vo1ew&s=10", featured: false },
    { id: 24, name: "Nike Kobe 8 Protro 'Court Purple'", silhouette: "Kobe 8", condition: "Deadstock", type: "Protro", price: 225, size: "10.0 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmOy8FiNz-J6p0jLE_IePwQeyYG12_98IhFkGW3Xr3Q&s=10", featured: false },
    { id: 25, name: "Nike Kobe 6 'Prelude All-Star MVP' (2014)", silhouette: "Kobe 6", condition: "Pre-owned", type: "OG", price: 1250, size: "10.5 US", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujpYmXovHCP9NIpNSKuD77kbFK-QQ2iddOVJiAIppnw&s=10", featured: false }
];

let cart = [];

window.addEventListener('DOMContentLoaded', () => {https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm-BorY8Svu0A_igaiZ58oaN6ADj-Bjx3vhtMjLx47Q&s=10
    loadCartFromStorage();
    renderFeaturedGrid();
    renderCatalogGrid(kobeInventory);
    
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home','sneakers','lineage','drops','apparel','trust','sell','policies'].includes(hash)) {
        navigateTo(hash);
    }
});

function navigateTo(viewId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.classList.remove('text-mambaGold');
        btn.classList.add('text-mambaTextGray');
    });
    const activeBtn = document.getElementById(`nav-${viewId}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-mambaTextGray');
        activeBtn.classList.add('text-mambaGold');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function renderFeaturedGrid() {
    const container = document.getElementById('home-featured-grid');
    if (!container) return;
    const featuredItems = kobeInventory.filter(item => item.featured);
    
    container.innerHTML = featuredItems.map(item => `
        <div class="glass-panel rounded-2xl overflow-hidden hover:border-mambaGold/50 transition-all group flex flex-col justify-between">
            <div class="p-4 relative">
                <span class="absolute top-6 left-6 bg-mambaPurple/80 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider backdrop-blur-sm z-10">${item.condition}</span>
                <img src="${item.image}" alt="${item.name}" class="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 pt-0 space-y-3">
                <div class="flex justify-between items-start">
                    <h3 class="text-base font-extrabold text-white leading-snug">${item.name}</h3>
                    <span class="text-xs bg-mambaDark border border-white/10 px-2 py-1 rounded text-mambaTextGray whitespace-nowrap ml-2">${item.size}</span>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-white/5">
                    <div>
                        <p class="text-[10px] text-mambaTextGray uppercase font-bold">Verified Price</p>
                        <p class="text-lg font-black text-mambaGold">$${item.price}.00</p>
                    </div>
                    <button onclick="quickAddToCart(${item.id})" class="px-4 py-2 rounded-lg mamba-gold-gradient text-mambaDark font-extrabold text-xs uppercase hover:opacity-90 transition-opacity">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCatalogGrid(items) {
    const container = document.getElementById('catalog-grid');
    const countLabel = document.getElementById('catalog-count-label');
    if (!container) return;
    countLabel.textContent = `Showing ${items.length} of ${kobeInventory.length} Vault Items`;

    container.innerHTML = items.map(item => `
        <div class="glass-panel rounded-xl overflow-hidden hover:border-mambaPurple/50 transition-all flex flex-col justify-between group">
            <div class="p-4 relative">
                <div class="absolute top-6 left-6 flex gap-1 z-10">
                    <span class="bg-mambaDark/90 border border-white/10 text-mambaGold text-[10px] font-bold px-2 py-0.5 rounded uppercase">${item.silhouette}</span>
                </div>
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-4 pt-0 space-y-3">
                <h3 class="text-sm font-bold text-white line-clamp-1">${item.name}</h3>
                <div class="flex items-center justify-between text-xs text-mambaTextGray">
                    <span>Condition: <strong class="text-white">${item.condition}</strong></span>
                    <span>Size: <strong class="text-mambaGold">${item.size}</strong></span>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-white/10">
                    <span class="text-base font-black text-white">$${item.price}.00</span>
                    <button onclick="quickAddToCart(${item.id})" class="px-3 py-1.5 rounded bg-mambaDark hover:bg-mambaPurple border border-white/10 text-white text-xs font-bold transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    const search = document.getElementById('catalog-search').value.toLowerCase();
    const silhouette = document.getElementById('filter-silhouette').value;
    const condition = document.getElementById('filter-condition').value;
    const type = document.getElementById('filter-type').value;

    const filtered = kobeInventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search) || item.silhouette.toLowerCase().includes(search);
        const matchesSil = silhouette === 'all' || item.silhouette === silhouette;
        const matchesCond = condition === 'all' || item.condition === condition;
        const matchesType = type === 'all' || item.type === type;
        return matchesSearch && matchesSil && matchesCond && matchesType;
    });

    renderCatalogGrid(filtered);
}

function resetFilters() {
    document.getElementById('catalog-search').value = '';
    document.getElementById('filter-silhouette').value = 'all';
    document.getElementById('filter-condition').value = 'all';
    document.getElementById('filter-type').value = 'all';
    renderCatalogGrid(kobeInventory);
}

function quickAddToCart(productId) {
    const product = kobeInventory.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    saveCartToStorage();
    openCart();
}

function addApparelToCart(title, price) {
    const itemId = 'apparel-' + title.replace(/\s+/g, '-').toLowerCase();
    const existing = cart.find(item => item.id === itemId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: title,
            price: price,
            size: 'L',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgvdlwp42cJ15KaSFLNQgkoknIr8EwJ4pNg5pw4YJYg&s',
            quantity: 1
        });
    }

    updateCartUI();
    saveCartToStorage();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
        saveCartToStorage();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-count-badge');
    const subtotalEl = document.getElementById('cart-subtotal');
    const shippingEl = document.getElementById('cart-shipping');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16 space-y-3">
                <i class="fa-solid fa-basket-shopping text-4xl text-mambaTextGray"></i>
                <p class="text-sm font-bold text-white">Your Mamba Vault Cart is empty</p>
            </div>
        `;
        subtotalEl.textContent = "$0.00";
        shippingEl.textContent = "$0.00";
        totalEl.textContent = "$0.00";
        document.getElementById('checkout-btn').disabled = true;
        return;
    }

    document.getElementById('checkout-btn').disabled = false;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 25;
    const total = subtotal + shipping;

    subtotalEl.textContent = `$${subtotal.toLocaleString()}.00`;
    shippingEl.textContent = shipping === 0 ? 'FREE (Over $500)' : `$${shipping}.00`;
    totalEl.textContent = `$${total.toLocaleString()}.00`;

    container.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 bg-mambaDark p-3 rounded-xl border border-white/5">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-grow space-y-1">
                <h4 class="text-xs font-bold text-white line-clamp-1">${item.name}</h4>
                <p class="text-[11px] text-mambaGold font-extrabold">$${item.price}.00 <span class="text-mambaTextGray font-normal">| ${item.size}</span></p>
                <div class="flex items-center gap-2 pt-1">
                    <button onclick="updateQuantity('${item.id}', -1)" class="w-5 h-5 rounded bg-mambaCard text-white flex items-center justify-center text-xs border border-white/10">-</button>
                    <span class="text-xs font-bold text-white">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', 1)" class="w-5 h-5 rounded bg-mambaCard text-white flex items-center justify-center text-xs border border-white/10">+</button>
                </div>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-mambaTextGray hover:text-red-400 p-1">
                <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
        </div>
    `).join('');
}

function openCart() {
    document.getElementById('cart-modal').classList.remove('hidden');
}

function closeCart() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function saveCartToStorage() {
    localStorage.setItem('mamba_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const stored = localStorage.getItem('mamba_cart');
    if (stored) {
        try {
            cart = JSON.parse(stored);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

function toggleSizeChartModal() {
    document.getElementById('size-modal').classList.toggle('hidden');
}

function showDropNotificationModal(dropName) {
    document.getElementById('notif-title').textContent = "Drop Alert Configured!";
    document.getElementById('notif-body').textContent = `Push reminder set for ${dropName}.`;
    document.getElementById('notification-modal').classList.remove('hidden');
}

function closeNotificationModal() {
    document.getElementById('notification-modal').classList.add('hidden');
}

function handleDropSubscription(e) {
    e.preventDefault();
    document.getElementById('notif-title').textContent = "VIP Alerts Activated!";
    document.getElementById('notif-body').textContent = "You are now subscribed to instant restock and release reminders.";
    document.getElementById('notification-modal').classList.remove('hidden');
}

function handleConsignmentSubmit(e) {
    e.preventDefault();
    alert("Consignment Intake Received! Our team will review your submission within 24 hours.");
    e.target.reset();
    navigateTo('home');
}

function triggerSimulatedCheckout() {
    const trackingNum = 'MK-MAMBA-' + Math.floor(100000 + Math.random() * 900000);
    alert(`🎉 ORDER CONFIRMED!\n\nYour Insured Tracking Number: ${trackingNum}`);
    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeCart();
}