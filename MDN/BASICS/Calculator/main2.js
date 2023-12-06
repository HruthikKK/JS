const btn = document.querySelectorAll("button");
const first = document.querySelector(".first");
function add(e){
    first.textContent += e.target.textContent;
}
for(const x of btn){
    x.addEventListener("click",add);
}
 
const table = document.querySelector("table");
const tr = document.createElement("tr");
const td = document.createElement("td");
tr.append(td);
table.append(tr);
td.innerText = "sjhdfjshjahsj";
td.setAttribute("colspan","4");

const firstStyle = first.getAttribute("class")
td.classList.add('first');

const section = document.querySelector("section");
console.log(section.childNode);


