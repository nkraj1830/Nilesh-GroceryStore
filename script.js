// script.js - Nini's Grocery Project (Final Ultimate Version)

// --- 1. COMPLETE DATABASE (62 PRODUCTS) ---
const defaultProducts = [
    // Staples
    { id: 1, name: "Sharbati Atta (10kg)", brand: "Aashirvaad", price: 450, category: "Staples", image: "https://placehold.co/300x300/orange/white?text=Atta", desc: "100% Whole Wheat Flour." },
    { id: 2, name: "Toor Dal (1kg)", brand: "Tata Sampann", price: 165, category: "Staples", image: "https://placehold.co/300x300/yellow/black?text=Toor+Dal", desc: "Unpolished organic dal." },
    { id: 3, name: "Basmati Rice (5kg)", brand: "India Gate", price: 650, category: "Staples", image: "https://placehold.co/300x300/white/black?text=Rice", desc: "Classic long grain rice." },
    { id: 4, name: "Sunflower Oil (1L)", brand: "Fortune", price: 140, category: "Staples", image: "https://placehold.co/300x300/gold/black?text=Oil", desc: "Light and healthy." },
    { id: 10, name: "Tata Salt (1kg)", brand: "Tata", price: 28, category: "Staples", image: "https://placehold.co/300x300/white/blue?text=Salt", desc: "Vacuum evaporated." },
    { id: 13, name: "Sugar (1kg)", brand: "Madhur", price: 45, category: "Staples", image: "https://placehold.co/300x300/white/black?text=Sugar", desc: "Pure white crystal sugar." },
    { id: 14, name: "Chana Dal (1kg)", brand: "Tata Sampann", price: 90, category: "Staples", image: "https://placehold.co/300x300/yellow/red?text=Chana+Dal", desc: "High protein dal." },
    { id: 28, name: "Moong Dal (500g)", brand: "Rajdhani", price: 60, category: "Staples", image: "https://placehold.co/300x300/yellow/green?text=Moong", desc: "Split washed dal." },
    { id: 29, name: "Besan (1kg)", brand: "Fortune", price: 85, category: "Staples", image: "https://placehold.co/300x300/yellow/brown?text=Besan", desc: "Fine gram flour." },
    { id: 30, name: "Maida (1kg)", brand: "Rajdhani", price: 40, category: "Staples", image: "https://placehold.co/300x300/white/gray?text=Maida", desc: "Refined wheat flour." },
    { id: 43, name: "Poha (500g)", brand: "Rajdhani", price: 45, category: "Staples", image: "https://placehold.co/300x300/white/green?text=Poha", desc: "Thick beaten rice." },
    { id: 44, name: "Suji (500g)", brand: "Rajdhani", price: 35, category: "Staples", image: "https://placehold.co/300x300/yellow/white?text=Suji", desc: "Granular semolina." },
    { id: 45, name: "Garam Masala (100g)", brand: "MDH", price: 78, category: "Staples", image: "https://placehold.co/300x300/red/yellow?text=Masala", desc: "Authentic spice blend." },
    { id: 46, name: "Turmeric Powder (200g)", brand: "Everest", price: 52, category: "Staples", image: "https://placehold.co/300x300/orange/yellow?text=Haldi", desc: "Pure turmeric powder." },
    { id: 47, name: "Red Chilli Powder (200g)", brand: "Everest", price: 65, category: "Staples", image: "https://placehold.co/300x300/red/white?text=Mirch", desc: "Spicy red chilli." },

    // Dairy & Fresh
    { id: 9, name: "Amul Butter (500g)", brand: "Amul", price: 245, category: "Dairy", image: "https://placehold.co/300x300/yellow/blue?text=Butter", desc: "Pasteurized butter." },
    { id: 15, name: "Toned Milk (1L)", brand: "Amul", price: 64, category: "Dairy", image: "https://placehold.co/300x300/blue/white?text=Milk", desc: "Fresh toned milk." },
    { id: 16, name: "Paneer (200g)", brand: "Amul", price: 85, category: "Dairy", image: "https://placehold.co/300x300/white/green?text=Paneer", desc: "Fresh malai paneer." },
    { id: 17, name: "Curd (400g)", brand: "Mother Dairy", price: 40, category: "Dairy", image: "https://placehold.co/300x300/blue/white?text=Curd", desc: "Thick and creamy dahi." },
    { id: 18, name: "Cheese Slices", brand: "Amul", price: 120, category: "Dairy", image: "https://placehold.co/300x300/yellow/red?text=Cheese", desc: "Processed cheese slices." },
    { id: 31, name: "Fresh Cream (250ml)", brand: "Amul", price: 70, category: "Dairy", image: "https://placehold.co/300x300/blue/white?text=Cream", desc: "Low fat cream." },
    { id: 32, name: "Chaach (500ml)", brand: "Saras", price: 15, category: "Dairy", image: "https://placehold.co/300x300/white/blue?text=Chaach", desc: "Spiced buttermilk." },

    // Vegetables & Fruits
    { id: 19, name: "Potato (1kg)", brand: "Fresh", price: 30, category: "Vegetables", image: "https://placehold.co/300x300/brown/white?text=Potato", desc: "Fresh crop potatoes." },
    { id: 20, name: "Onion (1kg)", brand: "Fresh", price: 40, category: "Vegetables", image: "https://placehold.co/300x300/purple/white?text=Onion", desc: "Nashik onions." },
    { id: 21, name: "Tomato (1kg)", brand: "Fresh", price: 50, category: "Vegetables", image: "https://placehold.co/300x300/red/white?text=Tomato", desc: "Red juicy tomatoes." },
    { id: 22, name: "Banana (Dozen)", brand: "Fresh", price: 60, category: "Fruits", image: "https://placehold.co/300x300/yellow/black?text=Banana", desc: "Robusta bananas." },
    { id: 23, name: "Apple (1kg)", brand: "Kashmir", price: 180, category: "Fruits", image: "https://placehold.co/300x300/red/white?text=Apple", desc: "Crisp red apples." },
    { id: 33, name: "Green Chilli (250g)", brand: "Fresh", price: 15, category: "Vegetables", image: "https://placehold.co/300x300/green/white?text=Chilli", desc: "Spicy green chillies." },
    { id: 34, name: "Ginger (250g)", brand: "Fresh", price: 20, category: "Vegetables", image: "https://placehold.co/300x300/brown/yellow?text=Ginger", desc: "Washed ginger." },
    { id: 35, name: "Coriander", brand: "Fresh", price: 10, category: "Vegetables", image: "https://placehold.co/300x300/green/green?text=Dhaniya", desc: "Fresh leaves." },

    // Snacks & Chocolates
    { id: 5, name: "Red Label Tea (500g)", brand: "Brooke Bond", price: 280, category: "Beverages", image: "https://placehold.co/300x300/red/white?text=Tea", desc: "Strong chai blend." },
    { id: 6, name: "Bhujia Sev (400g)", brand: "Bikaji", price: 95, category: "Snacks", image: "https://placehold.co/300x300/orange/red?text=Bhujia", desc: "Authentic Rajasthani taste." },
    { id: 7, name: "Good Day Cookies", brand: "Britannia", price: 30, category: "Snacks", image: "https://placehold.co/300x300/blue/white?text=Cookies", desc: "Butter and cashew." },
    { id: 11, name: "Maggi Noodles", brand: "Nestle", price: 14, category: "Snacks", image: "https://placehold.co/300x300/yellow/red?text=Maggi", desc: "Masala noodles." },
    { id: 24, name: "Lays Chips", brand: "Lays", price: 20, category: "Snacks", image: "https://placehold.co/300x300/blue/white?text=Chips", desc: "Magic Masala flavor." },
    { id: 25, name: "Dark Fantasy", brand: "Sunfeast", price: 40, category: "Snacks", image: "https://placehold.co/300x300/brown/gold?text=Biscuits", desc: "Choco fills." },
    { id: 36, name: "Kurkure", brand: "Pepsico", price: 20, category: "Snacks", image: "https://placehold.co/300x300/orange/red?text=Kurkure", desc: "Masala munch." },
    { id: 38, name: "Oreo", brand: "Cadbury", price: 35, category: "Snacks", image: "https://placehold.co/300x300/black/white?text=Oreo", desc: "Vanilla cream." },
    { id: 48, name: "Dairy Milk Silk", brand: "Cadbury", price: 70, category: "Snacks", image: "https://placehold.co/300x300/purple/white?text=Silk", desc: "Smooth chocolate bar." },
    { id: 49, name: "KitKat (4 Finger)", brand: "Nestle", price: 25, category: "Snacks", image: "https://placehold.co/300x300/red/white?text=KitKat", desc: "Crispy wafer chocolate." },
    { id: 50, name: "Lotte Choco Pie", brand: "Lotte", price: 15, category: "Snacks", image: "https://placehold.co/300x300/red/brown?text=Pie", desc: "Soft biscuit cake." },
    { id: 51, name: "Act II Popcorn", brand: "Act II", price: 35, category: "Snacks", image: "https://placehold.co/300x300/yellow/red?text=Popcorn", desc: "Butter lover's popcorn." },
    { id: 52, name: "Aloo Bhujia (200g)", brand: "Haldiram", price: 48, category: "Snacks", image: "https://placehold.co/300x300/orange/green?text=Bhujia", desc: "Spicy potato noodles." },

    // Beverages
    { id: 26, name: "Coffee (50g)", brand: "Nescafe", price: 150, category: "Beverages", image: "https://placehold.co/300x300/brown/white?text=Coffee", desc: "Classic instant coffee." },
    { id: 27, name: "Coke (750ml)", brand: "Coca Cola", price: 45, category: "Beverages", image: "https://placehold.co/300x300/black/red?text=Coke", desc: "Soft drink." },
    { id: 37, name: "Real Juice (1L)", brand: "Real", price: 110, category: "Beverages", image: "https://placehold.co/300x300/orange/green?text=Juice", desc: "Mixed fruit juice." },
    { id: 53, name: "Thums Up (750ml)", brand: "Coca Cola", price: 45, category: "Beverages", image: "https://placehold.co/300x300/black/red?text=ThumsUp", desc: "Strong cola taste." },
    { id: 54, name: "Sprite (750ml)", brand: "Coca Cola", price: 45, category: "Beverages", image: "https://placehold.co/300x300/green/white?text=Sprite", desc: "Lemon-lime drink." },
    { id: 55, name: "Frooti (600ml)", brand: "Parle", price: 40, category: "Beverages", image: "https://placehold.co/300x300/yellow/green?text=Frooti", desc: "Fresh mango drink." },
    { id: 56, name: "Bournvita (500g)", brand: "Cadbury", price: 230, category: "Beverages", image: "https://placehold.co/300x300/orange/brown?text=Bournvita", desc: "Health drink mix." },
    { id: 57, name: "Horlicks (500g)", brand: "GSK", price: 245, category: "Beverages", image: "https://placehold.co/300x300/blue/white?text=Horlicks", desc: "Malt nutrition drink." },

    // Household
    { id: 8, name: "Dettol Handwash", brand: "Dettol", price: 99, category: "Household", image: "https://placehold.co/300x300/green/white?text=Handwash", desc: "Original protection." },
    { id: 12, name: "Colgate Total", brand: "Colgate", price: 120, category: "Household", image: "https://placehold.co/300x300/red/white?text=Colgate", desc: "Whole mouth health." },
    { id: 39, name: "Rin Soap (4x)", brand: "Rin", price: 60, category: "Household", image: "https://placehold.co/300x300/blue/white?text=Soap", desc: "Bar for clothes." },
    { id: 40, name: "Vim Bar", brand: "Vim", price: 20, category: "Household", image: "https://placehold.co/300x300/green/yellow?text=Vim", desc: "Dishwash bar." },
    { id: 41, name: "Harpic (500ml)", brand: "Harpic", price: 95, category: "Household", image: "https://placehold.co/300x300/blue/red?text=Harpic", desc: "Toilet cleaner." },
    { id: 42, name: "Lizol (500ml)", brand: "Lizol", price: 110, category: "Household", image: "https://placehold.co/300x300/yellow/red?text=Lizol", desc: "Floor cleaner." },
    { id: 58, name: "Surf Excel (1kg)", brand: "Surf", price: 135, category: "Household", image: "https://placehold.co/300x300/blue/orange?text=Surf", desc: "Easy wash powder." },
    { id: 59, name: "Tide Plus (1kg)", brand: "Tide", price: 110, category: "Household", image: "https://placehold.co/300x300/white/orange?text=Tide", desc: "Jasmine and rose scent." },
    { id: 60, name: "Comfort (200ml)", brand: "Comfort", price: 56, category: "Household", image: "https://placehold.co/300x300/blue/pink?text=Comfort", desc: "Fabric conditioner." },
    { id: 61, name: "Dove Shampoo (180ml)", brand: "Dove", price: 165, category: "Household", image: "https://placehold.co/300x300/white/blue?text=Dove", desc: "Intense repair." },
    { id: 62, name: "Close Up (150g)", brand: "Close Up", price: 85, category: "Household", image: "https://placehold.co/300x300/red/white?text=CloseUp", desc: "Red hot toothpaste." }
];

const db = { products: [], users: [], orders: [], currentUser: null };

// --- 2. CORE APP LOGIC ---
const app = {
    init: () => {
        // --- AUTO-FIX: Force update if old data has fewer products ---
        const saved = JSON.parse(localStorage.getItem('ninis_products'));
        if(!saved || saved.length < 50) {
            localStorage.setItem('ninis_products', JSON.stringify(defaultProducts));
            db.products = defaultProducts;
        } else {
            db.products = saved;
        }

        // Load other data
        db.orders = JSON.parse(localStorage.getItem('ninis_orders')) || [];
        db.users = JSON.parse(localStorage.getItem('ninis_users')) || [];
        db.currentUser = JSON.parse(localStorage.getItem('ninis_currentUser')) || null;

        app.renderHeaderAuth();
        app.updateCartCount();

        const path = window.location.pathname;
        if (path.includes('index.html') || path.endsWith('/')) app.pages.home();
        else if (path.includes('product.html')) app.pages.product();
        else if (path.includes('cart.html')) app.pages.cart();
        else if (path.includes('checkout.html')) app.pages.checkout();
        else if (path.includes('payment.html')) app.pages.payment();
        else if (path.includes('login.html')) app.pages.login();
        else if (path.includes('signup.html')) app.pages.signup();
        else if (path.includes('profile.html')) app.pages.profile();
        else if (path.includes('admin.html')) app.pages.admin();
        else if (path.includes('categories.html')) app.pages.categories();
    },

    saveData: () => {
        localStorage.setItem('ninis_products', JSON.stringify(db.products));
        localStorage.setItem('ninis_orders', JSON.stringify(db.orders));
        localStorage.setItem('ninis_users', JSON.stringify(db.users));
        if(db.currentUser) localStorage.setItem('ninis_currentUser', JSON.stringify(db.currentUser));
        else localStorage.removeItem('ninis_currentUser');
    },

    addToCart: (id) => {
        if(event) event.stopPropagation();
        let cart = JSON.parse(localStorage.getItem('ninis_cart')) || [];
        const product = db.products.find(p => p.id == id);
        const existing = cart.find(item => item.id == id);
        if (existing) existing.qty++; else cart.push({ ...product, qty: 1 });
        localStorage.setItem('ninis_cart', JSON.stringify(cart));
        app.updateCartCount();
        alert("Added to Cart!");
    },

    updateCartCount: () => {
        let cart = JSON.parse(localStorage.getItem('ninis_cart')) || [];
        document.querySelectorAll('#cartCount').forEach(el => el.innerText = cart.reduce((acc, item) => acc + item.qty, 0));
    },

    renderHeaderAuth: () => {
        const container = document.getElementById('authButtons');
        if (!container) return;
        if (db.currentUser) {
            const isAdm = db.currentUser.role === 'admin';
            container.innerHTML = `<div class="flex items-center gap-4"><a href="${isAdm ? 'admin.html' : 'profile.html'}" class="text-gray-600 hover:text-green-700 font-bold text-sm flex items-center gap-1 no-underline"><i class="fas ${isAdm ? 'fa-user-shield' : 'fa-user'}"></i> ${isAdm ? 'Admin' : 'Profile'}</a><button onclick="app.logout()" class="text-red-500 font-bold text-xs border border-red-200 px-2 py-1 rounded hover:bg-red-50">Logout</button></div>`;
        } else {
            container.innerHTML = `<a href="login.html" class="bg-green-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-green-700 transition text-sm no-underline">Login</a>`;
        }
    },

    logout: () => { db.currentUser = null; app.saveData(); window.location.href = 'index.html'; },

    pages: {
        home: () => {
            const grid = document.getElementById('productGrid');
            const render = (items) => {
                if (!grid) return;
                grid.innerHTML = items.map(p => `
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition duration-300 product-card">
                        <div class="relative h-48 bg-gray-50 p-4 cursor-pointer group" onclick="window.location.href='product.html?id=${p.id}'">
                            <img src="${p.image}" class="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-300">
                            <span class="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded uppercase">${p.category}</span>
                        </div>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="text-xs text-gray-500 font-bold uppercase mb-1">${p.brand}</div>
                            <h3 class="font-bold text-gray-800 mb-2 truncate text-base">${p.name}</h3>
                            <div class="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                                <span class="text-lg font-bold text-gray-900">₹${p.price}</span>
                                <button onclick="app.addToCart(${p.id})" class="bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-1">Add <i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>`).join('');
            };
            render(db.products);
            const search = document.getElementById('searchInput');
            if(search) search.addEventListener('keyup', (e) => render(db.products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))));
        },

        categories: () => {
            const container = document.getElementById('catContainer');
            if(!container) return;
            const cats = [...new Set(db.products.map(p => p.category))];
            container.innerHTML = cats.map(cat => {
                const prods = db.products.filter(p => p.category === cat);
                return `<div class="mb-12"><div class="flex items-center gap-3 mb-6"><div class="w-1 h-8 bg-green-500 rounded-full"></div><h2 class="text-2xl font-bold text-gray-800">${cat}</h2><span class="text-sm text-gray-400 font-bold bg-gray-100 px-2 py-1 rounded-full">${prods.length} items</span></div><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">${prods.map(p => `<div class="bg-white rounded-xl border border-gray-100 hover:shadow-md transition cursor-pointer product-card" onclick="window.location.href='product.html?id=${p.id}'"><div class="h-32 p-4 bg-gray-50 rounded-t-xl"><img src="${p.image}" class="w-full h-full object-contain mix-blend-multiply"></div><div class="p-3"><h3 class="font-bold text-sm text-gray-800 truncate">${p.name}</h3><div class="flex justify-between items-center mt-2"><span class="text-green-700 font-bold text-sm">₹${p.price}</span><button onclick="app.addToCart(${p.id})" class="text-green-600 hover:bg-green-50 p-1.5 rounded-md"><i class="fas fa-plus"></i></button></div></div></div>`).join('')}</div></div>`;
            }).join('');
        },

        cart: () => {
            const cart = JSON.parse(localStorage.getItem('ninis_cart')) || [];
            const container = document.getElementById('cartContainer');
            if(!container) return;
            if(cart.length === 0) { container.innerHTML = `<div class="text-center py-12"><h2 class="text-2xl font-bold text-gray-300">Cart Empty</h2><a href="index.html" class="text-green-600 font-bold underline mt-2 inline-block">Go Shopping</a></div>`; return; }
            const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
            container.innerHTML = `<div class="flex flex-col lg:flex-row gap-8"><div class="flex-1 space-y-4">${cart.map(item => `<div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"><div class="flex items-center gap-4"><img src="${item.image}" class="w-14 h-14 object-contain"><div><h3 class="font-bold text-sm text-gray-800">${item.name}</h3><p class="text-xs text-gray-500">₹${item.price}</p></div></div><div class="flex items-center gap-4"><div class="flex items-center border rounded-lg"><button onclick="app.cartActions.update(${item.id},-1)" class="px-2 py-1 hover:bg-gray-100">-</button><span class="px-2 text-sm font-bold">${item.qty}</span><button onclick="app.cartActions.update(${item.id},1)" class="px-2 py-1 hover:bg-gray-100">+</button></div><button onclick="app.cartActions.remove(${item.id})" class="text-red-400 hover:text-red-600"><i class="fas fa-trash"></i></button></div></div>`).join('')}</div><div class="lg:w-80 h-fit bg-white p-6 rounded-xl shadow-sm border border-gray-100"><div class="flex justify-between font-bold text-xl mb-6"><span>Total</span><span>₹${total}</span></div><a href="checkout.html" class="block text-center bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition no-underline">Checkout</a></div></div>`;
        },

        checkout: () => {
            if(!db.currentUser) { alert("Please Login First"); window.location.href='login.html'; return; }
            if(db.currentUser.address && document.getElementById('addr')) { document.getElementById('addr').value = db.currentUser.address; }
            document.getElementById('placeOrderBtn')?.addEventListener('click', () => {
                const addr = document.getElementById('addr').value;
                if(!addr) return alert("Address Required");
                const cart = JSON.parse(localStorage.getItem('ninis_cart')) || [];
                const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
                db.orders.push({ id: Date.now(), date: new Date().toLocaleDateString(), user: db.currentUser.email, items: cart, total, address: addr, status: 'Placed' });
                localStorage.setItem('ninis_cart', JSON.stringify([]));
                app.saveData();
                window.location.href = 'payment.html';
            });
        },

        payment: () => {
            setTimeout(() => { window.location.href = 'order_success.html'; }, 3000);
        },

        product: () => {
            const id = new URLSearchParams(window.location.search).get('id');
            const p = db.products.find(x => x.id == id);
            if(p && document.getElementById('productDetail')) {
                document.getElementById('productDetail').innerHTML = `<div class="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm"><div class="bg-gray-50 p-8 rounded-xl"><img src="${p.image}" class="w-full object-contain mix-blend-multiply"></div><div><span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded uppercase">${p.category}</span><h1 class="text-3xl font-bold text-gray-900 mt-2 mb-2">${p.name}</h1><p class="text-gray-500 mb-6">${p.desc}</p><div class="flex items-center gap-4"><span class="text-3xl font-bold text-gray-800">₹${p.price}</span><button onclick="app.addToCart(${p.id})" class="flex-1 bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 shadow-lg">Add to Cart</button></div></div></div>`;
            }
        },

        login: () => app.pages.authLogic('login'),
        signup: () => app.pages.authLogic('signup'),
        authLogic: (type) => {
            document.querySelector('form')?.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const pass = type === 'login' ? document.getElementById('password').value : document.getElementById('pass').value;
                if(type === 'login') {
                    if(email === 'admin' && pass === 'admin123') { db.currentUser = {name:'Admin', role:'admin'}; app.saveData(); window.location.href='admin.html'; }
                    else if(email === 'user' && pass === 'user123') { db.currentUser = {name:'Rahul Verma', email:'user@example.com', role:'customer'}; app.saveData(); window.location.href='index.html'; }
                    else { const u = db.users.find(x => x.email === email && x.password === pass); if(u) { db.currentUser = u; app.saveData(); window.location.href='index.html'; } else alert("Invalid Credentials"); }
                } else {
                    const name = document.getElementById('name').value;
                    db.users.push({name, email, password:pass, role:'customer'}); app.saveData(); alert("Account Created! Please Login."); window.location.href='login.html';
                }
            });
        },

        profile: () => {
            if(!db.currentUser) { window.location.href='login.html'; return; }
            if(document.getElementById('profileName')) document.getElementById('profileName').innerText = db.currentUser.name;
            if(document.getElementById('profileEmail')) document.getElementById('profileEmail').innerText = db.currentUser.email;
            if(document.getElementById('profileInitial')) document.getElementById('profileInitial').innerText = db.currentUser.name.charAt(0);
            
            const myOrders = db.orders.filter(o => o.user === db.currentUser.email).reverse();
            const orderContainer = document.getElementById('orderHistory');
            if(orderContainer) {
                orderContainer.innerHTML = myOrders.length ? myOrders.map(o => `
                <div class="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition">
                    <div class="flex justify-between items-start border-b border-gray-50 pb-4 mb-4">
                        <div><span class="block font-bold text-gray-800 text-lg">Order #${o.id}</span><span class="text-xs text-gray-400"><i class="far fa-clock mr-1"></i> ${o.date}</span></div>
                        <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${o.status}</span>
                    </div>
                    <div class="space-y-2 mb-4 text-sm text-gray-600">${o.items.map(i => `<div class="flex justify-between"><span>${i.name} x${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join('')}</div>
                    <div class="flex justify-between items-center pt-4 border-t border-gray-50 font-bold"><span class="text-gray-600">Total Paid</span><span class="text-green-700 text-xl">₹${o.total}</span></div>
                </div>`).join('') : `<div class="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300"><div class="text-gray-300 text-5xl mb-4"><i class="fas fa-box-open"></i></div><p class="text-gray-500">No orders placed yet.</p></div>`;
            }

            if(db.currentUser.address && document.getElementById('savedAddress')) document.getElementById('savedAddress').value = db.currentUser.address;
            if(document.getElementById('editName')) document.getElementById('editName').value = db.currentUser.name;
            if(document.getElementById('editEmail')) document.getElementById('editEmail').value = db.currentUser.email;

            document.getElementById('addressForm')?.addEventListener('submit', (e) => {
                e.preventDefault();
                db.currentUser.address = document.getElementById('savedAddress').value;
                app.saveData(); alert("Address Saved!");
            });

            document.getElementById('settingsForm')?.addEventListener('submit', (e) => {
                e.preventDefault();
                db.currentUser.name = document.getElementById('editName').value;
                const newPass = document.getElementById('editPass').value;
                if(newPass) db.currentUser.password = newPass;
                const userIndex = db.users.findIndex(u => u.email === db.currentUser.email);
                if(userIndex > -1) { db.users[userIndex].name = db.currentUser.name; if(newPass) db.users[userIndex].password = newPass; }
                app.saveData(); alert("Profile Updated!"); location.reload();
            });
        },

        admin: () => { 
            if(db.currentUser?.role !== 'admin') window.location.href='index.html';
            const list = document.getElementById('adminProductList');
            // Red Delete Button Logic
            if(list) list.innerHTML = db.products.map(p => `
                <tr class="hover:bg-gray-50">
                    <td class="p-3 border-b">${p.name}</td>
                    <td class="p-3 border-b">₹${p.price}</td>
                    <td class="p-3 border-b text-right">
                        <button onclick="app.adminActions.deleteProduct(${p.id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold hover:bg-red-700 transition shadow">
                            DELETE
                        </button>
                    </td>
                </tr>`).join('');
            
            document.getElementById('addProductForm')?.addEventListener('submit', (e) => {
                 e.preventDefault();
                 db.products.push({id:Date.now(), name:document.getElementById('pName').value, price:Number(document.getElementById('pPrice').value), brand:'New', category:document.getElementById('pCat').value, image:'https://placehold.co/300x300', desc:'New Item'});
                 app.saveData(); location.reload();
            });
        }
    },

    profileActions: {
        switchTab: (tabName) => {
            const views = { orders: document.getElementById('viewOrders'), address: document.getElementById('viewAddress'), settings: document.getElementById('viewSettings') };
            const buttons = { orders: document.getElementById('tab-orders'), address: document.getElementById('tab-address'), settings: document.getElementById('tab-settings') };
            Object.values(views).forEach(el => { if(el) el.classList.add('hidden'); });
            Object.values(buttons).forEach(el => { if(el) { el.classList.remove('bg-green-50', 'text-green-700'); el.classList.add('text-gray-600'); } });
            if(views[tabName]) views[tabName].classList.remove('hidden');
            if(buttons[tabName]) { buttons[tabName].classList.remove('text-gray-600'); buttons[tabName].classList.add('bg-green-50', 'text-green-700'); }
        }
    },

    cartActions: { update: (id, n) => { let cart = JSON.parse(localStorage.getItem('ninis_cart')); let item = cart.find(x => x.id == id); if(item) { item.qty += n; if(item.qty <= 0) cart = cart.filter(x => x.id != id); } localStorage.setItem('ninis_cart', JSON.stringify(cart)); location.reload(); }, remove: (id) => { let cart = JSON.parse(localStorage.getItem('ninis_cart')).filter(x => x.id != id); localStorage.setItem('ninis_cart', JSON.stringify(cart)); location.reload(); } },
    adminActions: { deleteProduct: (id) => { if(confirm("Are you sure you want to delete this product?")) { db.products = db.products.filter(p => p.id !== id); app.saveData(); location.reload(); } } }
};
document.addEventListener('DOMContentLoaded', app.init);