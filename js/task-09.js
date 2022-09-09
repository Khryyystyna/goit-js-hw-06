function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeCol = document.querySelector('change-color');
console.log(changeCol);


const handleClick = () => {
  changeCol.addEventListener("click", handleClick);
};

console.log(handleClick);