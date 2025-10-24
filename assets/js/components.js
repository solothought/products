// Shared Components for Products Site

const Header = () => `
<header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="/">
              <img src="/assets/images/logo.png" alt="SoloThought" style="height: 40px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/products" id="nav-products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
`;

const Footer = () => `
<footer class="site-footer">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <h5>SoloThought</h5>
                <p class="mb-3">Building innovative solutions for modern challenges. Our products help you achieve more with less effort.</p>
                <div class="social-links">
                    <a href="https://github.com/solothought" target="_blank" class="me-3" title="GitHub">
                        <i class="bi bi-github fs-5"></i>
                    </a>
                    <a href="https://twitter.com/solothought" target="_blank" class="me-3" title="Twitter">
                        <i class="bi bi-twitter fs-5"></i>
                    </a>
                    <a href="https://linkedin.com/company/solothought" target="_blank" title="LinkedIn">
                        <i class="bi bi-linkedin fs-5"></i>
                    </a>
                </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
                <h5>Products</h5>
                <ul class="list-unstyled">
                    <li><a href="/youcan/">YouCan</a></li>
                    <li><a href="/flowgger/">Flowgger</a></li>
                </ul>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <h5>Resources</h5>
                <ul class="list-unstyled">
                    <li><a href="/docs">Documentation</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <h5>Legal</h5>
                <ul class="list-unstyled">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/cookies">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom text-center">
            <p class="mb-0">&copy; ${new Date().getFullYear()} SoloThought. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    // Insert header
    const headerMount = document.getElementById('header-mount');
    if (headerMount) {
        headerMount.innerHTML = Header();
    }
    
    // Insert footer
    const footerMount = document.getElementById('footer-mount');
    if (footerMount) {
        footerMount.innerHTML = Footer();
    }
    
    // Set active navigation link
    highlightActiveNav();
});

// Highlight active navigation link based on current path
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if current path matches or starts with the link href
        if (currentPath === href || 
            (href !== '/' && currentPath.startsWith(href))) {
            link.classList.add('active');
        }
    });
    
    // Special handling for products section
    if (currentPath.includes('/youcan') || currentPath.includes('/flowgger')) {
        const productsLink = document.getElementById('nav-products');
        if (productsLink) {
            productsLink.classList.add('active');
        }
    }
}