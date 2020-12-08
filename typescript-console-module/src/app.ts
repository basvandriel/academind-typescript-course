const username = "Bas";
console.log(username + " Hey!");

const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  return n1 + n2 > 0 ? n1 + n2 : n2;
}

function clickHandler(message: string) {
  console.log("Hey!" + message);
}
button.addEventListener("click", clickHandler.bind(null, "Heyheyhey"));
