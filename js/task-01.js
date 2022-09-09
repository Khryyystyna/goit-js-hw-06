const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories:${itemRef.length}`);

itemRef.forEach(item => {
    const categoryRef = item.querySelector("h2");
    console.log(`Category:${categoryRef.textContent}`);
    const elementRef = item.querySelectorAll("li");
    console.log(`Elements:${elementRef.length}`);
}    
)