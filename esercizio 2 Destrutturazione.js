/*Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, 
utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.

};*/
const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }};

  let {name, age}=student.info;
  let{math,science}=student.grades;
  console.log(name)
  console.log(age)
  console.log(math)
  console.log(science)