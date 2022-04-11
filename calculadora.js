const div = document.createElement("div");
div.style = "background-color: #DDDDDD; text-align: center; display: inline-block; height: 200px; -webkit-box-shadow: 5px 3px 0px 0px rgba(0,0,0,0.41); box - shadow: 5px 3px 0px 0px rgba(0, 0, 0, 0.41); "

const h2 = document.createElement("h2");
h2.style = "color: #2500DD; font-family: 'Josefin Sans';"
h2.innerText = "Calculadora de ecuaciones de segundo grado";

const form = document.createElement("form");
form.id = 'data';
const vars = ["+x^2", "+x", "=0"]
for (let i = 0; i < 3; i++) {
    const tmp_2 = document.createElement('input');
    tmp_2.type = 'text';
    tmp_2.id = vars[i];
    tmp_2.value = "0"
    form.appendChild(tmp_2);

    const tmp_1 = document.createElement('label');
    tmp_1.innerHTML = vars[i];
    form.appendChild(tmp_1);
}
for (let i = 0; i < 2; i++) {
    const br = document.createElement("br");
    form.appendChild(br);
}
const button = document.createElement("input");
button.type = "submit"
button.value = "Resolver ecuacion de segundo grado"
form.appendChild(button);

div.appendChild(h2);
div.appendChild(form);
document.body.appendChild(div);


const form_0 = document.getElementById("data");
form_0.addEventListener('submit', (event) => {
    const a = document.getElementById("+x^2").value;
    const b = document.getElementById("+x").value;
    const c = document.getElementById("=0").value;
    if (a == 0.0) {
        alert("Ecuacion invalida");
    } else if (b * b - 4 * a * c < 0.0) {
        alert("Raices imaginarias");
    } else {
        let x1 = (-b + Math.sqrt(b * b - 4.0 * a * c)) / (2.0 * a);
        let x2 = (-b - Math.sqrt(b * b - 4.0 * a * c)) / (2.0 * a);
        alert(`x1 = ${x1}, x2 = ${x2}.`);
    }
});