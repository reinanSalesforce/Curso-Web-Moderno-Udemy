
// Exemplo de Super pegando o método da classe PAI
class Vehicle {
    start() {
      console.log('Vehicle started');
    }
  }
  
  class Car extends Vehicle {
    start() {
      super.start(); // Chama o método start da classe pai
      console.log('Car started');
    }
  }
  
  const car = new Car();
  car.start(); // Vehicle started. Car started.
  

  // Exemplo de Super puxando do construtor
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // Chama o construtor da classe pai (Animal)
    }
  
    speak() {
      super.speak(); // Chama o método speak da classe pai
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); // Rex makes a noise. Rex barks.
  