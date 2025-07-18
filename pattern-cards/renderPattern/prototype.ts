export const prototype = `// ==== Ninja Type ====

type Ninja = {
    name: string
    chakra: number
    position: { x: number; y: number }
    sayPhrase: () => string
  }
  
  // ==== Original Ninja Creator ====
  
  const createNinja = (name: string): Ninja => ({
    name,
    chakra: 100,
    position: { x: 0, y: 0 },
    sayPhrase: () => \`\${name}: Dattebayo!\`,
  })
  
  // ==== Clone Jutsu (Prototype) ====
  
  const cloneNinja = (
    original: Ninja,
    overrides: Partial<Omit<Ninja, 'sayPhrase'>> = {}
  ): Ninja => {
    const newName = overrides.name ?? original.name + ' (Clone)'
  
    return {
      ...original,
      ...overrides,
      name: newName,
      sayPhrase: () => \`\${newName}: Bunshin no Jutsu!\`,
    }
  }
  
  // ==== Client Code ====
  
  const naruto = createNinja('Naruto')
  
  const clone1 = cloneNinja(naruto, {
    position: { x: 10, y: 5 },
    chakra: 50,
  })
  
  const clone2 = cloneNinja(naruto, {
    position: { x: -3, y: 8 },
    chakra: 40,
  })
  
  // ==== Usage ====

  console.log(naruto.sayPhrase())
  console.log(clone1.sayPhrase())
  console.log(clone2.sayPhrase())
` 