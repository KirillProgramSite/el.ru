document.querySelectorAll('.biography__date p').forEach(tab => {
    tab.addEventListener('click', () => {
        // Снимаем активный класс с текущего таба и контента
        document.querySelector('.biography__date p.active')?.classList.remove('active');
        document.querySelector('.biography__content-el.active')?.classList.remove('active');
        
        // Добавляем активный класс к выбранному табу и соответствующему контенту
        tab.classList.add('active');
        const year = tab.dataset.year;
        document.querySelector(`.biography__content-el[data-year="${year}"]`).classList.add('active');
    });
});



function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Закрытие модального окна при клике вне его
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  }