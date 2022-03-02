const expand = (index) => {
    const section = document.getElementById(`hidden${index}`);
    const seeButton = document.getElementById(`seemore${index}`);
    if (seeButton.innerHTML == 'See more') {
        section.classList.remove('hidden');
        seeButton.innerHTML = 'Close'
        seeButton.classList.add('open');
    } else {
        section.classList.add('hidden');
        seeButton.innerHTML = 'See more';
        seeButton.classList.remove('open');
    }
}