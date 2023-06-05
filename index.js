let count = 0;
function increment() {
    let countEl = document.getElementById("count-el");
    count += 1;
    countEl.innerText = count;
    console.log(count);
}
function save() {
   let countEl = document.getElementById("count-el");
   let saveEl = document.getElementById("save-el");
   saveEl.textContent += count + " - ";
   countEl.innerText = 0;
   count = 0;
   console.log(count);
   
}