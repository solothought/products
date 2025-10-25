// Main JavaScript for Products Site

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Active navigation highlighting for product pages
    initProductNavigation();
    
    // Add copy button to code blocks
    initCodeCopyButtons();
});

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Product page navigation highlighting
function initProductNavigation() {
    const productNav = document.querySelector('.product-nav');
    if (!productNav) return;
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = productNav.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add copy buttons to code blocks
function initCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'btn btn-sm btn-outline-light position-absolute top-0 end-0 m-2';
        button.innerHTML = '<i class="bi bi-clipboard"></i>';
        button.title = 'Copy to clipboard';
        
        block.style.position = 'relative';
        block.appendChild(button);
        
        button.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="bi bi-check2"></i>';
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-success');
                
                setTimeout(() => {
                    button.innerHTML = '<i class="bi bi-clipboard"></i>';
                    button.classList.remove('btn-success');
                    button.classList.add('btn-outline-light');
                }, 2000);
            });
        });
    });
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('app') === 'true') {
    document.body.classList.add('in-app');
}

function handleLanguageChange(newUrl) {
    const urlParams = new URLSearchParams(window.location.search);
    const isApp = urlParams.get('app') === 'true';
    
    // If in app, append app=true to new URL
    if (isApp) {
        const separator = newUrl.includes('?') ? '&' : '?';
        newUrl = newUrl + separator + 'app=true';
    }
    
    window.location.href = newUrl;
}

window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        // Remove the # and use it as section ID
        const section = hash.substring(1);
        const tabButton = document.querySelector(`#${section}-tab`);
        if (tabButton) {
            const tab = new bootstrap.Tab(tabButton);
            tab.show();
        }
    }
});