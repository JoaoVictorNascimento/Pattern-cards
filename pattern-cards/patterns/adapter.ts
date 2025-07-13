// ==== Heroes with incompatible interfaces ====

type IllusionHero = {
    createIllusions: (confusionLevel: number) => string
  }
  
  type MeteorHero = {
    meteorImpact: (energy: number) => string
  }
  
  type TimeEchoHero = {
    repeatAction: (secondsAgo: number) => string
  }
  
  // ==== Hero constructors ====
  
  const createIllusionHero = (): IllusionHero => ({
    createIllusions: (confusionLevel) =>
      `🪞 Illusion mirrors created with level ${confusionLevel}! Translucent reflections confuse the enemies.`,
  })
  
  const createMeteorHero = (): MeteorHero => ({
    meteorImpact: (energy) =>
      `☄️ Meteor impact unleashed with energy ${energy}! The ground cracks under its power.`,
  })
  
  const createTimeEchoHero = (): TimeEchoHero => ({
    repeatAction: (secondsAgo) =>
      `⏳ Temporal echo activated! Repeating action from ${secondsAgo} seconds ago with time trail.`,
  })
  
  // ==== Unified interface expected by the system ====
  
  type UnifiedHero = {
    name: string
    usePower: (powerLevel: number) => string
  }
  
  // ==== Individual adapters ====
  
  const adaptIllusionHero = (hero: IllusionHero): UnifiedHero => ({
    name: 'Mirror Illusion',
    usePower: (powerLevel) => hero.createIllusions(powerLevel),
  })
  
  const adaptMeteorHero = (hero: MeteorHero): UnifiedHero => ({
    name: 'Meteor Impact',
    usePower: (powerLevel) => hero.meteorImpact(powerLevel),
  })
  
  const adaptTimeEchoHero = (hero: TimeEchoHero): UnifiedHero => ({
    name: 'Time Echo',
    usePower: (powerLevel) => hero.repeatAction(powerLevel),
  })
  
  // ==== Client code ====
  
  const illusion = adaptIllusionHero(createIllusionHero())
  const meteor = adaptMeteorHero(createMeteorHero())
  const echo = adaptTimeEchoHero(createTimeEchoHero())
  
  const team: UnifiedHero[] = [illusion, meteor, echo]
  
  team.forEach((hero, index) => {
    const result = hero.usePower((index + 1) * 10)
    console.log(`${hero.name} ➜ ${result}`)
  })