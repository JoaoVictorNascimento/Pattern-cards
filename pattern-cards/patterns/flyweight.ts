// ==== Shared flyweight: fish type ====

type FishType = {
    species: string
    color: string
    shape: string
  }
  
  // ==== Flyweight instance: fish in the ocean ====
  
  type Fish = {
    swim: (x: number, y: number) => void
  }
  
  // ==== Factory: manages shared FishType instances ====
  
  const createFishFactory = () => {
    const fishTypes: Record<string, FishType> = {}
  
    const getOrCreateFishType = (species: string, color: string, shape: string): FishType => {
      const key = `${species}_${color}_${shape}`
      if (!fishTypes[key]) {
        console.log(`🌊 Creating new fish type: ${species} | ${color} | ${shape}`)
        fishTypes[key] = { species, color, shape }
      }
      return fishTypes[key]
    }
  
    const createFish = (species: string, color: string, shape: string): Fish => {
      const type = getOrCreateFishType(species, color, shape)
  
      return {
        swim: (x, y) => {
          console.log(`🐟 A "${type.species}" swims to (${x}, ${y}) with color ${type.color} and shape ${type.shape}`)
        },
      }
    }
  
    return { createFish }
  }
  
  // ==== Simulation ====
  
  const fishFactory = createFishFactory()
  const ocean: Fish[] = []
  
  const speciesList = [
    ['Clownfish', 'Orange-White', 'Round'],
    ['Tuna', 'Silver-Blue', 'Long'],
    ['Angelfish', 'Yellow-Black', 'Flat'],
  ]
  
  // Create 3000 fish, rotating species
  for (let i = 0; i < 3000; i++) {
    const [species, color, shape] = speciesList[i % speciesList.length]
    const fish = fishFactory.createFish(species, color, shape)
  
    ocean.push(fish)
  }
  
  // Make a few fish swim (simulate behavior)
  ocean[0].swim(10, 20)
  ocean[1].swim(50, 80)
  ocean[2].swim(90, 15)