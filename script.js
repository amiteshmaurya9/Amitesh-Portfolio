document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById('menu1');
    const menuIcon = document.getElementById('menu2');
    const closeIcon = document.getElementById('close');

    // Hide the close icon initially
    closeIcon.style.display = 'none';

    // Function to open the menu
    function openMenu() {
        menu.style.display = 'block';       // Show the menu items
        menuIcon.style.display = 'none';    // Hide the menu icon
        closeIcon.style.display = 'inline'; // Show the close icon
    }

    // Function to close the menu
    function closeMenu() {
        menu.style.display = 'none';        // Hide the menu items
        menuIcon.style.display = 'inline';  // Show the menu icon
        closeIcon.style.display = 'none';   // Hide the close icon
    }

    // Attach the functions to the icons
    menuIcon.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);

    // Optional: Hide the menu if the window is resized to a large screen
    window.addEventListener('resize', () => {
        if (window.innerWidth > 750) {
            menu.style.display = '';        // Reset to default display
            menuIcon.style.display = '';    // Reset to default display
            closeIcon.style.display = 'none'; // Hide close icon on large screens
        }
    });

        // Dark mode toggle functionality

    const toggle = document.getElementById('darkmode-toggle');
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', toggle.checked);
    });

    // ......................Type Animation ......................
    const phrases = ['Web Developer', 'Raspberry Pi', 'IOT Projects'];
    const typingSpeed = 100;  // Speed of typing each character
    const backSpeed = 60;     // Speed of deleting each character
    const delayBetween = 1000; // Delay before starting to backspace or move to the next phrase
    const delayStart = 1000;  // Delay before starting the animation initially
    let currentPhrase = 0;
    let currentIndex = 0;
    let isDeleting = false;

    function type() {
        const element = document.getElementById('element');
        const fullText = phrases[currentPhrase];

        if (isDeleting) {
            element.innerHTML = fullText.substring(0, currentIndex--);
            if (currentIndex < 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(type, delayBetween);
                return;
            }
        } else {
            element.innerHTML = fullText.substring(0, currentIndex++);
            if (currentIndex > fullText.length) {
                isDeleting = true;
                setTimeout(type, delayBetween);
                return;
            }
        }

        setTimeout(type, isDeleting ? backSpeed : typingSpeed);
    }

    setTimeout(type, delayStart); // Initial delay before starting
});
