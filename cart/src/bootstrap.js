import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} iterations</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
