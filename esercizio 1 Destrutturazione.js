/*Dato un oggetto person con le proprietà nome ed età,
 utilizza la destrutturazione dell'oggetto per creare variabili nome ed età che contengano i valori dell'oggetto.
;*/
const person = { name: "Alice", age: 30 };

let{name,age}=person;
console.log(name);
console.log(age)