const menuMobile = () => {
    const header = document.querySelector('.header-top');
    const menuModile = document.querySelector('.nav-header');
    const navHeaderBurger = document.querySelector('.nav-header-burger');
    const navHEaderClose = document.querySelector('.nav-header__close');
    const buttonSearchMobile = document.querySelector('.button-search-mobile');
    const formMiddle = document.querySelector('.form-middle');

    const bodyBg = document.createElement('div');
    bodyBg.classList.add('bodyBg');
    header.appendChild(bodyBg);
    navHeaderBurger.addEventListener('click', () => {
        menuModile.classList.toggle('show-menu');
        if (menuModile.classList.contains('show-menu')) {
            document.body.style.overflow = 'hidden';
            bodyBg.classList.add('active');


        }
        navHEaderClose.addEventListener('click', () => {
            menuModile.classList.remove('show-menu');
            if (!menuModile.classList.contains('show-menu')) {
                document.body.style.overflow = '';
                bodyBg.classList.remove('active');
            }
        });
    });

    buttonSearchMobile.addEventListener('click', () => {
        formMiddle.classList.toggle('show');
    });
}

export default menuMobile;
