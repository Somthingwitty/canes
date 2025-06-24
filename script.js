const compliments = [
    "Raising Cane's is the king of chicken fingers!",
    "That sauce? Pure magic!",
    "Nothing beats a Cane's combo box!",
    "Chicken perfection, every single time!",
    "We can't stop dreaming about those fries!",
    "Cane's toast is toast from heaven!",
    "Sauce so good, it'll blow your mind!",
    "Cane's, we adore you more than words!"
];

function updateCompliment() {
    const el = document.getElementById('compliment');
    if (el) {
        const idx = Math.floor(Math.random() * compliments.length);
        el.textContent = compliments[idx];
    }
}

setInterval(updateCompliment, 2000);
