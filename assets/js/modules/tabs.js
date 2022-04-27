const tabs = () => {
    const header = document.querySelector('.nav-tabs');
    const tabs = document.querySelectorAll('.nav-tabs__item');
    let content = document.querySelectorAll('.content-tabs__body');

    function hideTabContent() {

        content.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('nav-tabs__item')) {

            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }

            });
        }
    });
}




export default tabs;
