// ==== Template method base function ====

type BreakfastSteps = {
    prepareMain: () => string
    addSides?: () => string
    serveDrink?: () => string
  }
  
  const prepareBreakfast = (steps: BreakfastSteps): string[] => {
    const process: string[] = []
  
    process.push('🍽️ Starting breakfast preparation...')
    process.push(steps.prepareMain())
  
    if (steps.addSides) {
      process.push(steps.addSides())
    }
  
    if (steps.serveDrink) {
      process.push(steps.serveDrink())
    }
  
    process.push('✅ Breakfast is ready! Bon appétit.')
    return process
  }
  
  // ==== Concrete implementations ====
  
  const pancakeBreakfast: BreakfastSteps = {
    prepareMain: () => '🥞 Making fluffy pancakes...',
    addSides: () => '🍓 Adding strawberries and syrup...',
    serveDrink: () => '🥛 Serving a glass of milk.',
  }
  
  const friedEggBreakfast: BreakfastSteps = {
    prepareMain: () => '🍳 Frying sunny-side-up eggs...',
    addSides: () => '🥓 Adding crispy bacon on the side.',
    serveDrink: () => '☕ Pouring hot black coffee.',
  }
  
  const toastBreakfast: BreakfastSteps = {
    prepareMain: () => '🍞 Toasting slices of bread...',
    serveDrink: () => '🍵 Serving warm tea with honey.',
  }
  
  // ==== Example usage ====
  
  const menu = [
    prepareBreakfast(pancakeBreakfast),
    prepareBreakfast(friedEggBreakfast),
    prepareBreakfast(toastBreakfast),
  ]
  
  menu.forEach((steps, index) => {
    console.log(`\n🥣 Breakfast #${index + 1}`)
    steps.forEach((line) => console.log(line))
  })