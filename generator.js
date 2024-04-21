document.querySelector('.dice').addEventListener('click', function() {
    this.classList.toggle('clicked');
    if (this.classList.contains('clicked')) {
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 100); // Toggle 'active' class after 100ms
    }
});