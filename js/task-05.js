
const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');
console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener("input", (event) => {
   outputRef.textContent = event.currentTarget.value;
   if (event.currentTarget.value === '') {
      outputRef.textContent = 'Anonymous'
   }
   return;
});
