let counterValue = 0;

const decrBtnRef = document.querySelector('[data-action="decrement"]');
const incrBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
console.log(decrBtnRef);
console.log(incrBtnRef);
console.log(valueRef);

decrBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})

incrBtnRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})
