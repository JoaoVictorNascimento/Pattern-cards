// ==== Visitor interface ====

type FossilVisitor = {
    visitTRex: (fossil: TRexFossil) => void
    visitTriceratops: (fossil: TriceratopsFossil) => void
  }
  
  // ==== Fossil interfaces ====
  
  type Fossil = {
    name: string
    accept: (visitor: FossilVisitor) => void
  }
  
  type TRexFossil = Fossil & {
    teethCount: number
  }
  
  type TriceratopsFossil = Fossil & {
    hornLength: number
  }
  
  // ==== Concrete fossil implementations ====
  
  const createTRexFossil = (teethCount: number): TRexFossil => ({
    name: 'Tyrannosaurus Rex',
    teethCount,
    accept: (visitor) => visitor.visitTRex({ name: 'Tyrannosaurus Rex', teethCount, accept: () => {} }),
  })
  
  const createTriceratopsFossil = (hornLength: number): TriceratopsFossil => ({
    name: 'Triceratops',
    hornLength,
    accept: (visitor) =>
      visitor.visitTriceratops({ name: 'Triceratops', hornLength, accept: () => {} }),
  })
  
  // ==== Concrete visitors ====
  
  const createChildVisitor = (): FossilVisitor => ({
    visitTRex: (fossil) =>
      console.log(`👧 "Whoa! The ${fossil.name} has ${fossil.teethCount} sharp teeth!"`),
  
    visitTriceratops: (fossil) =>
      console.log(`🧒 "Cool! The ${fossil.name} has horns ${fossil.hornLength} meters long!"`),
  })
  
  const createScientistVisitor = (): FossilVisitor => ({
    visitTRex: (fossil) =>
      console.log(
        `🔬 Analyzing ${fossil.name}: Estimated bite force based on ${fossil.teethCount} teeth...`,
      ),
  
    visitTriceratops: (fossil) =>
      console.log(
        `🔬 Measuring ${fossil.name}: Horn length of ${fossil.hornLength}m suggests strong frontal defense.`,
      ),
  })
  
  // ==== Example usage ====
  
  const museumCollection: Fossil[] = [
    createTRexFossil(60),
    createTriceratopsFossil(1.2),
  ]
  
  console.log('🎟️ Child visiting the museum:')
  const child = createChildVisitor()
  museumCollection.forEach((fossil) => fossil.accept(child))
  
  console.log('\n🧪 Scientist visiting the museum:')
  const scientist = createScientistVisitor()
  museumCollection.forEach((fossil) => fossil.accept(scientist))
  