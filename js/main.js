document.addEventListener("DOMContentLoaded", () => {
    // 1. Filtrare camere pe capacitate
    const filterSelect = document.getElementById('roomFilter');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const cards = document.querySelectorAll('.room-card');
            
            cards.forEach(card => {
                if(val === 'all' || card.getAttribute('data-capacity') === val) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});