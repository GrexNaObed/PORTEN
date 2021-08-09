const animations_bloks = document.querySelectorAll('.anim');
const headerScreen = document.querySelector('.header__screen');
const header = document.querySelector('.header');

if (animations_bloks.length > 0) {
    function anim() {
        animations_bloks.forEach(blok => {
            let blokHeight = blok.offsetHeight;
            let blokOffset = offsetBlock(blok).top;
            let coefBlok = 4;
            let pointItem = window.innerHeight - blokHeight / coefBlok;
            if (blokHeight > window.innerHeight) {
                pointItem = window.innerHeight - window.innerHeight / coefBlok;
            }
            if (pageYOffset > (blokOffset - pointItem) && pageYOffset < (blokOffset + pointItem)) {
                blok.classList.add('active');
            } else
                if (!blok.classList.contains('not-anim')) {
                    blok.classList.remove('active');
                }

        });

    }
    function offsetBlock(el) {
        const rest = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rest.top + scrollTop, left: rest.left + scrollLeft }
    }

    setTimeout(() => {
        anim();
    }, 800);
    window.addEventListener('scroll', anim);

}
window.addEventListener('scroll',() =>{
    const headerHeight = headerScreen.offsetHeight / 2;
    const windwScrollY = scrollY;
    if (windwScrollY > headerHeight) {
        header.classList.add('fixed')
    }else
        header.classList.remove('fixed');
    });


