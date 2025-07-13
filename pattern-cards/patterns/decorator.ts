// ==== Drink interface ====

type Drink = {
    getDescription: () => string
    getCost: () => number
  }
  
  // ==== Base drink: plain coffee ====
  
  const createPlainCoffee = (): Drink => ({
    getDescription: () => 'Plain Coffee',
    getCost: () => 5,
  })
  
  // ==== Decorator: add milk ====
  
  const withMilk = (drink: Drink): Drink => ({
    getDescription: () => `${drink.getDescription()} + Milk`,
    getCost: () => drink.getCost() + 1.5,
  })
  
  // ==== Decorator: add chocolate ====
  
  const withChocolate = (drink: Drink): Drink => ({
    getDescription: () => `${drink.getDescription()} + Chocolate`,
    getCost: () => drink.getCost() + 2.0,
  })
  
  // ==== Decorator: add caramel ====
  
  const withCaramel = (drink: Drink): Drink => ({
    getDescription: () => `${drink.getDescription()} + Caramel`,
    getCost: () => drink.getCost() + 1.0,
  })
  
  // ==== Usage: combining decorators ====
  
  const myDrink = withCaramel(
    withMilk(
      withChocolate(
        createPlainCoffee()
      )
    )
  )
  
  console.log(myDrink.getDescription())
  console.log(`Total: $${myDrink.getCost().toFixed(2)}`)