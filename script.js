const emailInput = document.querySelector('#email');
const form = document.querySelector('.form');
const errorMsg = document.querySelector('.error');
const mainBody = document.querySelector('.content');
const successMsg = document.querySelector('.success-display');
const dismissBtn = document.querySelector('.dismiss');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm(emailInput.value)
    .then(() => {
      displayElement(mainBody, successMsg);
      mainBody.classList.remove('d-md-flex');
      emailInput.value = '';
    })
    .catch((error) => {
      errorMsg.textContent = error;
      emailInput.value = '';
      emailInput.classList.add('error-input');
      errorMsg.classList.add('error');
    });
});

function validateForm(email) {
  return new Promise((resolve, reject) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    setTimeout(() => {
      if (emailPattern.test(email)) {
        resolve(); // Resolve without passing any arguments
      } else {
        reject('Valid email required');
      }
    }, 2000);
  });
}

function displayElement(remove, display) {
  remove.style.display = 'none';
  display.style.display = 'flex';
}

dismissBtn.addEventListener('click', () => {
    setTimeout(()=>{
        displayElement(successMsg, mainBody);
        mainBody.classList.add('d-md-flex');
        emailInput.classList.remove('error-input');
        errorMsg.classList.remove('error');
    },1500);
});
