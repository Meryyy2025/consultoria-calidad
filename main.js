/**
 * Essentialis - Lógica principal
 * -------------------------------
 * Maneja: animaciones de scroll, menú móvil y formulario de contacto.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Animaciones de scroll (Intersection Observer)
    // ==========================================
    // Observa los elementos .fade-in-up y les agrega .visible
    // cuando entran en el viewport (10% de visibilidad mínima).

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach((elem) => {
        observer.observe(elem);
    });


    // ==========================================
    // 2. Menú móvil (hamburguesa)
    // ==========================================
    // Alterna la visibilidad del menú y cambia el ícono entre menu/close.
    // Al hacer clic en un link, se cierra automáticamente.

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });

        // Cerrar menú al navegar a una sección
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }


    // ==========================================
    // 3. Formulario de contacto (Formspree)
    // ==========================================
    // Envía los datos del formulario a Formspree via fetch.
    // Reemplazar "TU_ID_AQUI" en el HTML por el ID real de Formspree.

    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Deshabilitar botón mientras se envía
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Enviando...';
            button.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    form.reset();
                    successMsg.classList.remove('hidden');
                    errorMsg.classList.add('hidden');
                    setTimeout(() => successMsg.classList.add('hidden'), 5000);
                } else {
                    errorMsg.classList.remove('hidden');
                    successMsg.classList.add('hidden');
                }
            } catch {
                errorMsg.classList.remove('hidden');
                successMsg.classList.add('hidden');
            } finally {
                button.textContent = originalText;
                button.disabled = false;
            }
        });
    }

});
