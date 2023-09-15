class Cliente {
    constructor(nome, preferencial = false) {
      this.nome = nome;
      this.preferencial = preferencial;
    }
  
    atender() {
      console.log(`Atendendo cliente ${this.nome} (${this.preferencial ? 'preferencial' : 'regular'})`);
    }
  }
  
  class FilaPreferencial {
    constructor() {
      this.fila = [];
    }
  
    adicionarCliente(cliente) {
      this.fila.push(cliente);
    }
  
    atenderProximo() {
      if (this.fila.length === 0) {
        console.log("A fila está vazia.");
        return;
      }
  
      const clienteAtendido = this.fila.shift();
      clienteAtendido.atender();
    }
  }
  
  // Exemplo de uso
  const fila = new FilaPreferencial();
  
  fila.adicionarCliente(new Cliente("Cliente 1", true)); // Preferencial
  fila.adicionarCliente(new Cliente("Cliente 2")); // Regular
  fila.adicionarCliente(new Cliente("Cliente 3", true)); // Preferencial
  fila.adicionarCliente(new Cliente("Cliente 4")); // Regular
  
  fila.atenderProximo(); // Atende o próximo cliente (preferencial)
  fila.atenderProximo(); // Atende o próximo cliente (preferencial)
  fila.atenderProximo(); // Atende o próximo cliente (regular)
  