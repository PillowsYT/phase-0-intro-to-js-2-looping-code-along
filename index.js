const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name){
    for (let i = 0; i <name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
    }

    return name;
}

writeCards(name);

let countDown = 0;
while (countDown < 10) {
  console.log(countDown++);
}