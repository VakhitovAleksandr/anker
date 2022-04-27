const popupImages = () => {

    const popup = document.createElement('div');
    const eventImg = document.querySelectorAll('.inpopup');
    const imgBig = document.createElement('img');
    const popupClose = document.createElement('i');
    const eventImgTitle = document.querySelector('.section-title').innerHTML;
    const popupTitle = document.createElement('h3');

    popup.classList.add('popup');
    popupClose.classList.add("fas", "fa-times")
    popupTitle.classList.add('title');
    popup.appendChild(popupClose);

    eventImg.forEach(item => {
        item.addEventListener('click', (e) => {
            popup.style.display = 'flex';
            document.body.appendChild(popup);
            const path = item.getAttribute('src');
            imgBig.setAttribute('src', path);
            popup.appendChild(imgBig);
            popupTitle.innerHTML = eventImgTitle;
            popup.appendChild(popupTitle);
            document.body.style.overflow = 'hidden';
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        });

    });





}

export default popupImages;
