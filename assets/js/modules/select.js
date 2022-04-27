let select = function () {
  let select = document.querySelectorAll('.select');
  let selectOptions = document.querySelectorAll('.select__option');

  select.forEach(item => {
    item.addEventListener('click', function () {
      let options = this.querySelector('.select__options');
      options.classList.toggle('active');
      this.querySelector('.select__selected').classList.toggle('active');
    });
  });

  selectOptions.forEach(item => {
    item.addEventListener('click', function () {
      let text = this.innerText;
      this.closest('.select__content').querySelector('.select__selected')
        .innerText = text;
    });
  });

}

export default select;
