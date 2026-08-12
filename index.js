document.addEventListener('DOMContentLoaded', () => {
    // Form submission interaction
    const form = document.querySelector('.subscribe-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const button = form.querySelector('.btn-notify');
            const originalText = button.textContent;

            if (input.value) {
                const formData = new FormData(form);
                const actionUrl = form.action;
                
                button.textContent = 'Submitting...';

                fetch(actionUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formData
                }).then(() => {
                    button.textContent = 'Subscribed!';
                    button.style.backgroundColor = '#10b981';
                    button.style.color = '#ffffff';
                    input.value = '';

                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 3500);
                }).catch((error) => {
                    button.textContent = 'Error!';
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 3500);
                });
            }
        });
    }

    // Parallax variables for CSS
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30; // Max 15px shift
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
});
