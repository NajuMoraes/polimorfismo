class Animal {
    constructor(nome, cor) {
      this.nome = nome;
      this.cor = cor;
    }
  
    falar() {
      return `Olá, meu nome é ${this.nome}.`;
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, cor, raça) {
      super(nome, cor);
      this.raça = raça;
    }
  
    latir() {
      return `Au au!`;
    }
  }
  
  class Gato extends Animal {
    constructor(nome, cor, raça) {
      super(nome, cor);
      this.raça = raça;
    }
  
    miar() {
      return `Miau!`;
    }
  }
  
  const animais = [
    new Cachorro("Rex", "Marrom", "Pastor Alemão"),
    new Gato("Mimi", "Preto", "Siamês"),
  ];
  
  // Percorrendo o array e imprimindo o nome e a cor
  for (const animal of animais) {
    console.log(`O animal "${animal.nome}" é ${animal.cor}.`);
  }
  
  // Chamando o método "falar()" em cada animal
  for (const animal of animais) {
    console.log(animal.falar());
  }
  
  // Chamando o método "latir()" no cachorro
  const cachorro = animais[0];
  console.log(cachorro.latir());
  
  // Chamando o método "miar()" no gato
  const gato = animais[1];
  console.log(gato.miar());
  