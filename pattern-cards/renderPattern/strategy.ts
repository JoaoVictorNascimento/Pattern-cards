export const strategy = `// ==== Strategy interface ====

type BattleStrategy = {
    execute: () => string
  }
  
  // ==== Concrete strategies ====
  
  const createChargeStrategy = (): BattleStrategy => ({
    execute: () => '⚔️ The troops charge forward with full force!',
  })
  
  const createAmbushStrategy = (): BattleStrategy => ({
    execute: () => '🕵️‍♂️ The army sets a hidden ambush behind the hills.',
  })
  
  const createDefensiveStrategy = (): BattleStrategy => ({
    execute: () => '🛡️ The soldiers form a strong defensive wall.',
  })
  
  // ==== Context: the General issuing commands ====
  
  type General = {
    setStrategy: (strategy: BattleStrategy) => void
    issueCommand: () => void
  }
  
  const createGeneral = (): General => {
    let currentStrategy: BattleStrategy = createDefensiveStrategy()
  
    return {
      setStrategy: (strategy) => {
        currentStrategy = strategy
      },
      issueCommand: () => {
        console.log(currentStrategy.execute())
      },
    }
  }
  
  // ==== Example usage ====
  
  const general = createGeneral()
  
  general.issueCommand() // 🛡️
  
  general.setStrategy(createChargeStrategy())
  general.issueCommand() // ⚔️
  
  general.setStrategy(createAmbushStrategy())
  general.issueCommand() // 🕵️‍♂️
` 