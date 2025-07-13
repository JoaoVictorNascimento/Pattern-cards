// ==== Product Interface ====

type Animal = {
    makeSound: () => string
  }
  
  // ==== Concrete Products ====
  
  const createDog = (): Animal => ({
    makeSound: () => '🐶 Woof!',
  })
  
  const createCat = (): Animal => ({
    makeSound: () => '🐱 Meow!',
  })
  
  const createBird = (): Animal => ({
    makeSound: () => '🐦 Tweet!',
  })
  
  // ==== Factory Method Interface ====
  
  type AnimalFactory = () => Animal
  
  // ==== Concrete Factories ====
  
  const dogFactory: AnimalFactory = () => createDog()
  const catFactory: AnimalFactory = () => createCat()
  const birdFactory: AnimalFactory = () => createBird()
  
  // ==== Client Code ====
  
  const hearAnimal = (factory: AnimalFactory) => {
    const animal = factory()
    console.log(animal.makeSound())
  }
  
  // ==== Usage ====
  
  hearAnimal(dogFactory)  // 🐶 Woof!
  hearAnimal(catFactory)  // 🐱 Meow!
  hearAnimal(birdFactory) // 🐦 Tweet!