document.querySelector('.hamburger').addEventListener('click', function() {
document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        function checkScroll() {
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Initial check
        checkScroll();
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });

        // Toggle View All / View Less for projects
        const toggleProjectsBtn = document.getElementById('toggleProjectsBtn');
        const hiddenProjects = document.getElementById('hiddenProjects');

        toggleProjectsBtn.addEventListener('click', () => {
            if (hiddenProjects.classList.contains('hidden')) {
                hiddenProjects.classList.remove('hidden');
                toggleProjectsBtn.textContent = 'View Less';
            } else {
                hiddenProjects.classList.add('hidden');
                toggleProjectsBtn.textContent = 'View All';
            }
        });

        // Toggle View All / View Less for certificates
        const toggleCertificatesBtn = document.getElementById('toggleCertificatesBtn');
        const hiddenCertificates = document.getElementById('hiddenCertificates');

        toggleCertificatesBtn.addEventListener('click', () => {
            if (hiddenCertificates.classList.contains('hidden')) {
                hiddenCertificates.classList.remove('hidden');
                toggleCertificatesBtn.textContent = 'View Less';
            } else {
                hiddenCertificates.classList.add('hidden');
                toggleCertificatesBtn.textContent = 'View All Certificates';
            }
        });

        // Resume download
        document.querySelector('a[download]').addEventListener('click', function(e) {
            // In a real implementation, this would download your actual resume file
            // For demo purposes, we'll just show a message
            alert('Your resume download would start now. In a real implementation, this would download your actual resume file.');
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Check for saved user preference, if any, on load of the website
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            
            // Save the current preference to localStorage
            if (html.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Add floating animation to project cards on hover
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.03)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });

        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-accent');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
            });
        });