document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year Update (Runs once on load)
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Efficient Scrollspy using Intersection Observer

    const menuLinks = document.querySelectorAll('.menu a');
    
    // Get all the content sections referenced by the menu links
    const sections = Array.from(menuLinks).map(link => 
        document.querySelector(link.getAttribute('href'))
    ).filter(section => section !== null); // Filter out any null elements

    // Options for the Intersection Observer
    const observerOptions = {
        // RootMargin defines an area around the viewport to expand or shrink the intersection area.
        // -50% means the section must be centered in the viewport to trigger the change.
        rootMargin: '0px 0px -50% 0px',
        threshold: 0 // We just check if the section is entering the view, rootMargin handles position
    };

    // Callback function executed when an intersection occurs
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' from all links
                menuLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' class to the corresponding link
                const currentId = entry.target.id;
                const activeLink = document.querySelector(`.menu a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Optional: Add event listeners for smoother scrolling when clicking links
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust offset for header/padding
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Initial active state check (for when the page loads right at the top)
    if (sections.length > 0) {
        menuLinks[0].classList.add('active');
    }
});
