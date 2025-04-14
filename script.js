
// Menu data
const menuItems = [
    {
        name: "Classic French Croissant",
        description: "Buttery, flaky pastry with a golden exterior and tender layers within.",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1626",
        category: "Pastries"
    },
    {
        name: "Chocolate Éclair",
        description: "Choux pastry filled with cream and topped with rich chocolate ganache.",
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1074",
        category: "Pastries"
    },
    {
        name: "Fruit Tart",
        description: "Buttery pastry shell filled with vanilla custard and topped with fresh seasonal fruits.",
        price: "$6.25",
        image: "https://images.unsplash.com/photo-1621236354503-a3a9c10e5efb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1074",
        category: "Desserts"
    },
    {
        name: "Vanilla Bean Macaron",
        description: "Delicate almond meringue cookies with vanilla buttercream filling.",
        price: "$2.75",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1159",
        category: "Pastries"
    },
    {
        name: "Sourdough Bread",
        description: "Artisanal bread with a tangy flavor and chewy texture, baked to perfection.",
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1064",
        category: "Bread"
    },
    {
        name: "Opera Cake",
        description: "Elegant layered cake with coffee buttercream and chocolate ganache.",
        price: "$8.95",
        image: "https://images.unsplash.com/photo-1676037150408-4b6e84b7927c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
        category: "Cakes"
    },
    {
        name: "Raspberry Charlotte",
        description: "Ladyfinger-lined mousse cake with fresh raspberries and vanilla cream.",
        price: "$7.95",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
        category: "Cakes"
    },
    {
        name: "Pain au Chocolat",
        description: "Flaky croissant-like pastry with dark chocolate pieces folded inside.",
        price: "$4.75",
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1170",
        category: "Pastries"
    }
];

// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const menuGrid = document.querySelector('.menu-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const currentYearSpan = document.getElementById('current-year');
const contactForm = document.querySelector('.contact-form');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Render menu items
function renderMenuItems(items) {
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-overlay">
                    <div class="view-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
                <div class="menu-item-category">${item.category}</div>
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filter menu items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        // Filter items
        const filteredItems = filter === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === filter);
        
        renderMenuItems(filteredItems);
    });
});

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would normally send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });
}

// Initialize the menu on page load
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems(menuItems);
});
