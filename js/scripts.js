const objs = [
  {
    nome: "Marcos",
    idade: 55,
    esta_trabalhando: true,
    detalhes_profissão: {
      profissão: "programador",
      empresa: "Art 3D",
    },
    hobbies: ["pescar", "pedalar", "programar"],
  },
  {
    nome: "Matheus",
    idade: 30,
    esta_trabalhando: false,
    detalhes_profissão: {
      profissão: null,
      empresa: null,
    },
    hobbies: ["caçar", "pilotar", "rogramar"],
  },
]
// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto javascript
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

// Agora o objeto pode ser utilizado normalmente como um objto JS
// Para isso vamos utilizar o método 'map' para percorrer arrays de objetos
// e fazer a impressão de dados na tela
objData.map((pessoa) => {
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.hobbies)
})