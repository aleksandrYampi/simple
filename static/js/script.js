document.addEventListener('DOMContentLoaded', function () {
  const openPopUp = document.getElementById('enter');
  const openPopUp2 = document.getElementById('reg');
  const openPopUp4 = document.getElementById('balance');

  const closePopUp = document.getElementById('pop_up_close');
  const closePopUp2 = document.getElementById('pop_up_close2');
  const closePopUp4 = document.getElementById('pop_up_close4');

  const popUp = document.getElementById('pop_up');
  const popUp2 = document.getElementById('pop_up2');
  const popUp4 = document.getElementById('pop_up4');

  openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
  })

  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
  })

  openPopUp2.addEventListener('click', function (e) {
    e.preventDefault();
    popUp2.classList.add('active');
  })

  closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
  })

  openPopUp4.addEventListener('click', function (e) {
    e.preventDefault();
    popUp4.classList.add('active');
  })

  closePopUp4.addEventListener('click', () => {
    popUp4.classList.remove('active');
  })
})


document.getElementById('pop_enter2').addEventListener('click', function() {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            localStorage.setItem('login', login); 
            localStorage.setItem('password', password); 
})