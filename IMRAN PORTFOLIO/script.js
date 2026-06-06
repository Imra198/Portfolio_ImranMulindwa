function toggleTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    
    if(!toggleBtn) return; // Exit if button not found

// get current theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '☀️';
        
    }else {
        toggleBtn.textContent = '🌙';
    }

    // Add event listener to toggle button
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        // Save current theme to localStorage
        if(document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '🌙';
        }
    });
}

function loadHeader() {
    // Load header
    fetch('header.html')
            .then(response => response.text())
            .then(data =>{
                document.getElementById('header-placeholder').innerHTML = data;
                
                setActiveNav();
                toggleTheme();
            });
}

// Load footer
function loadFooter() {
    // Load footer
    fetch('footer.html')
            .then(response => response.text())
            .then(data =>{
                document.getElementById('footer-placeholder').innerHTML = data;
            });
}

// Function to set active navigation link based on current URL
function setActiveNav() {
    const links = document.querySelectorAll('.nav-container a');
    links.forEach(link => {
        if(link.pathname === window.location.pathname) {
            link.classList.add('active');
        }
    });
}

//auto load header and footer on page load
 document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});


