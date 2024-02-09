function toggleAnimation() {
    const projectFigures = document.querySelectorAll('#projects figure');

    projectFigures.forEach(figure => {
        const figureTop = figure.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.2;

        if (figureTop < windowHeight / 2) {
            figure.classList.add('show');
        } else {
            figure.classList.remove('show');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    toggleAnimation();
    window.addEventListener('scroll', function () {
        toggleAnimation();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.scroll-fade');

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight / 2) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    });
});
