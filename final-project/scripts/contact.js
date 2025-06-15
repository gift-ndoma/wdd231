// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Display form data from URL parameters
function displaySubmittedData() {
    const urlParams = new URLSearchParams(window.location.search);
    const submittedDataDiv = document.getElementById('submitted-data');
    
    if (urlParams.toString()) {
        let dataHTML = '';
        
        for (const [key, value] of urlParams) {
            if (value) {
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                dataHTML += `
                    <div class="data-item">
                        <span class="data-label">${formattedKey}:</span>
                        <span class="data-value">${decodeURIComponent(value)}</span>
                    </div>
                `;
            }
        }
        
        submittedDataDiv.innerHTML = dataHTML || '<p>No form data found.</p>';
    } else {
        // Demo data for preview
        submittedDataDiv.innerHTML = `
            <div class="data-item">
                <span class="data-label">Name:</span>
                <span class="data-value">John Doe</span>
            </div>
            <div class="data-item">
                <span class="data-label">Email:</span>
                <span class="data-value">john.doe@example.com</span>
            </div>
            <div class="data-item">
                <span class="data-label">Subject:</span>
                <span class="data-value">Product Inquiry</span>
            </div>
            <div class="data-item">
                <span class="data-label">Message:</span>
                <span class="data-value">I'm interested in learning more about your organic products and sustainability practices.</span>
            </div>
            <div class="data-item">
                <span class="data-label">Submitted:</span>
                <span class="data-value">${new Date().toLocaleString()}</span>
            </div>
        `;
    }
}

// Cart count animation
function animateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displaySubmittedData();
    
    // Add some interactive effects
    const cards = document.querySelectorAll('.info-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add some loading animation effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

async function loadBlogs() {
    try {
        const response = await fetch('blog.json');
        if (!response.ok) {
            throw new Error('Failed to fetch blog data');
        }

        const blogs = await response.json();
        const container = document.getElementById('blog-container');

        blogs.forEach(blog => {
            const post = document.createElement('div');
            post.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.summary}</p>
                <hr>
            `
            container.appendChild(post);
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
    }
}

loadBlogs();