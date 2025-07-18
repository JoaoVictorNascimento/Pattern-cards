export const chainOfResponsibility = `// ==== Monster type ====

type Monster = {
    name: string
    type: 'flying' | 'melee' | 'elemental' | 'unknown'
  }
  
  // ==== Handler type ====
  
  type TowerHandler = (monster: Monster) => string | null
  
  // ==== Chain executor ====
  
  const createDefenseChain = (handlers: TowerHandler[]) => {
    return (monster: Monster): string => {
      for (const handler of handlers) {
        const result = handler(monster)
        if (result !== null) return result
      }
      return \`❌ \${monster.name} passed through the defenses!\`
    }
  }
  
  // ==== Concrete towers ====
  
  const archerTower: TowerHandler = (monster) =>
    monster.type === 'flying'
      ? \`🏹 Archer Tower shot down \${monster.name}!\`
      : null
  
  const warriorTower: TowerHandler = (monster) =>
    monster.type === 'melee'
      ? \`⚔️ Warrior Tower stopped \${monster.name} with brute force!\`
      : null
  
  const mageTower: TowerHandler = (monster) =>
    monster.type === 'elemental'
      ? \`🔥 Mage Tower incinerated \${monster.name}!\`
      : null
  
  // ==== Create chain ====
  
  const defend = createDefenseChain([
    archerTower,
    warriorTower,
    mageTower,
  ])
  
  // ==== Example usage ====
  
  const monsters: Monster[] = [
    { name: 'Sky Bat', type: 'flying' },
    { name: 'Orc Warrior', type: 'melee' },
    { name: 'Fire Spirit', type: 'elemental' },
    { name: 'Shadow Beast', type: 'unknown' },
  ]
  
  monsters.forEach((monster) => {
    console.log(defend(monster))
  })
` 