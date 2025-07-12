// ==== Product type ====

type Cake = {
    flavor: string
    layers: number
    frosting: string
    toppings: string[]
    hasCandle: boolean
  }
  
  // ==== Builder Interface ====
  
  type CakeBuilder = {
    setFlavor: (flavor: string) => CakeBuilder
    setLayers: (layers: number) => CakeBuilder
    setFrosting: (frosting: string) => CakeBuilder
    addTopping: (topping: string) => CakeBuilder
    addCandle: () => CakeBuilder
    build: () => Cake
  }
  
  // ==== Cake Builder Implementation ====
  
  const createCakeBuilder = (): CakeBuilder => {
    let cake: Cake = {
      flavor: 'vanilla',
      layers: 1,
      frosting: 'none',
      toppings: [],
      hasCandle: false,
    }
  
    return {
      setFlavor: (flavor) => {
        cake = { ...cake, flavor }
        return createFrom(cake)
      },
      setLayers: (layers) => {
        cake = { ...cake, layers }
        return createFrom(cake)
      },
      setFrosting: (frosting) => {
        cake = { ...cake, frosting }
        return createFrom(cake)
      },
      addTopping: (topping) => {
        cake = { ...cake, toppings: [...cake.toppings, topping] }
        return createFrom(cake)
      },
      addCandle: () => {
        cake = { ...cake, hasCandle: true }
        return createFrom(cake)
      },
      build: () => cake,
    }
  
    function createFrom(current: Cake): CakeBuilder {
      return {
        setFlavor: (flavor) => createFrom({ ...current, flavor }),
        setLayers: (layers) => createFrom({ ...current, layers }),
        setFrosting: (frosting) => createFrom({ ...current, frosting }),
        addTopping: (topping) => createFrom({ ...current, toppings: [...current.toppings, topping] }),
        addCandle: () => createFrom({ ...current, hasCandle: true }),
        build: () => current,
      }
    }
  }
  
  // ==== Client Code ====
  
  const createBirthdayCake = (builder: CakeBuilder) =>
    builder
      .setFlavor('chocolate')
      .setLayers(3)
      .setFrosting('cream cheese')
      .addTopping('strawberries')
      .addTopping('sprinkles')
      .addCandle()
      .build()
  
  // ==== Usage ====
  
  const builder = createCakeBuilder()
  const birthdayCake = createBirthdayCake(builder)
  
  console.log(birthdayCake)