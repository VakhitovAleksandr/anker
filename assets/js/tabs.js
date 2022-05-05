// Tabs
class Tabs {
    constructor(headerSelector, tabSelector, contentSelector, activeClass) {
        this.headerSelector = headerSelector;
        this.tabSelector = tabSelector;
        this.contentSelector = contentSelector;
        this.activeClass = activeClass;
        const header = document.querySelector(headerSelector);
        const tab = document.querySelectorAll(tabSelector);
        const content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            content[i].style.display = 'block';
            tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target && (e.target.classList.contains(tabSelector.replace(/\./, "")) ||
                e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (e.target == item || e.target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
}

if (document.querySelector('.tabs-block')) {
    let tab1 = new Tabs('.nav-tabs__buttons', '.nav-tabs__item', '.content-tabs__body', 'active');
}

if (document.querySelector('.tabbable')) {
    let tab = new Tabs('.tabs', '.tabs-link', '.tabs-item', 'active');
}