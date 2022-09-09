
const formLog = document.querySelector('.login-form');
console.log(formLog);

formLog.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert('Всі поля повинні бути заповнені');
    return;
  }

 console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

