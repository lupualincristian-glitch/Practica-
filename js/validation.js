document.addEventListener("DOMContentLoaded", () => {
    // 1. Validare pentru Formularul de Rezervare (booking.html)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        const checkInInput = document.getElementById('checkIn');
        const checkOutInput = document.getElementById('checkOut');

        // Ne asigurăm că utilizatorul nu poate alege o dată din trecut
        const today = new Date().toISOString().split('T')[0];
        checkInInput.setAttribute('min', today);
        checkOutInput.setAttribute('min', today);

        bookingForm.addEventListener('submit', (e) => {
            const dateIn = new Date(checkInInput.value);
            const dateOut = new Date(checkOutInput.value);

            // Cerință obligatorie: Validare check-out după check-in
            if (dateOut <= dateIn) {
                e.preventDefault(); // Oprește trimiterea formularului
                alert("Eroare: Data de Check-out trebuie să fie strict după data de Check-in!");
                checkOutInput.classList.add('is-invalid');
            } else {
                checkOutInput.classList.remove('is-invalid');
            }
        });

        // Actualizează dinamic data minimă de check-out în funcție de ce se alege la check-in
        checkInInput.addEventListener('change', () => {
            if (checkInInput.value) {
                checkOutInput.setAttribute('min', checkInInput.value);
            }
        });
    }

    // 2. Validare pentru Formularul de Contact (contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const emailInput = contactForm.querySelector('input[type="email"]');
            const emailValue = emailInput.value.trim().toLowerCase();
            // Validare simplă regex pentru formatul de email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailValue)) {
                e.preventDefault();
                alert("Vă rugăm să introduceți o adresă de email validă!");
                emailInput.classList.add('is-invalid');
                return;
            }

            // Dacă totul e okay, simulează trimiterea cu succes
            e.preventDefault();
            alert("Mesajul dumneavoastră a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.");
            contactForm.reset();
        });
    }
});