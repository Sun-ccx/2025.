document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });

    // Program page tab functionality
    const programTabs = document.querySelectorAll('.tab-button');
    const programDays = document.querySelectorAll('.program-day');

    if (programTabs.length > 0 && programDays.length > 0) {
        programTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and days
                programTabs.forEach(t => t.classList.remove('active'));
                programDays.forEach(d => d.classList.remove('active'));

                // Add active class to clicked tab and corresponding day
                tab.classList.add('active');
                const dayId = tab.getAttribute('data-day');
                document.getElementById(dayId).classList.add('active');
            });
        });

        // View papers button functionality
        document.querySelectorAll('.view-papers').forEach(button => {
            button.addEventListener('click', () => {
                // This is a placeholder for the papers list functionality
                alert('论文列表功能即将上线');
            });
        });
    }
});
