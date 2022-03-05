const expand = (index) => {
    const section = document.getElementById(`hidden${index}`);
    const seeButton = document.getElementById(`seemore${index}`);

    section.classList.toggle("hidden");
    const hidden = section.classList.contains("hidden");

    if (hidden) {
        seeButton.innerHTML = 'Close'
        seeButton.classList.add('open');
        section.style.transition = 'max-height 0.7s linear';
    } else {
        seeButton.innerHTML = 'See more';
        seeButton.classList.remove('open');
        section.style.transition = 'max-height 0.5s linear';
    }
}