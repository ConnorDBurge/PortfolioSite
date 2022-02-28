// Appear class Intersection Observer
const appearOptions = {
    rootMargin: "0px 0px -100px 0px"
}
const appearObserver = new IntersectionObserver(function (entries, appearObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearObserver.unobserve(entry.target);
        }
    })
}, appearOptions);

const faders = document.querySelectorAll('.fader');
faders.forEach(fader => {
    appearObserver.observe(fader);
})