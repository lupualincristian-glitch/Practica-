document.addEventListener("DOMContentLoaded", () => {
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const roomType = document.getElementById('roomType');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const bookingForm = document.getElementById('bookingForm');

    function calculatePrice() {
        if (checkIn.value && checkOut.value) {
            const date1 = new Date(checkIn.value);
            const date2 = new Date(checkOut.value);
            
            // Calculăm diferența în zile
            const diffTime = date2 - date1;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays > 0) {
                const pricePerNight = parseInt(roomType.value);
                totalPriceDisplay.innerText = (diffDays * pricePerNight) + " €";
            } else {
                totalPriceDisplay.innerText = "Date invalide";
            }
        }
    }

    if(checkIn && checkOut) {
        checkIn.addEventListener('change', calculatePrice);
        checkOut.addEventListener('change', calculatePrice);
        roomType.addEventListener('change', calculatePrice);
    }

    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Deschide modalul de confirmare nativ Bootstrap
            const myModal = new bootstrap.Modal(document.getElementById('confirmModal'));
            myModal.show();
        });
    }
});