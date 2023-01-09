function askName() {
    return prompt("Quel est votre nom ?");
}

function helloName() {
    let name = askName();
    while (confirm("Etes-vous sûr ?") != true){
        name = askName();
    }
    alert("Bonjour " + name);
}