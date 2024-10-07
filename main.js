document.querySelectorAll('.optionPlans').forEach(option => {
    option.addEventListener('click', function() {

        document.querySelectorAll('.optionPlans').forEach(op => op.classList.remove('selected'));
        this.classList.add('selected');

        const selectedPlan = this.getAttribute('data-plan');

        document.querySelectorAll('.cardPlan').forEach(card => {
            if (card.getAttribute('data-plan') === selectedPlan) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });
});