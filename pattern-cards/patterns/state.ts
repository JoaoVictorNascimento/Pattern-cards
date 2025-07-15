// ==== Interface representing the state ====

type Mood = {
    respond: () => string
  }
  
  // ==== Concrete states ====
  
  const createHappyMood = (): Mood => ({
    respond: () => '😊 I feel great today! Let’s go for a walk!',
  })
  
  const createSadMood = (): Mood => ({
    respond: () => '😢 I just want to stay home and watch sad movies...',
  })
  
  const createAngryMood = (): Mood => ({
    respond: () => '😠 Leave me alone! I’m not in a good mood.',
  })
  
  // ==== Context: the emotional entity that changes state ====
  
  type EmotionalEntity = {
    setMood: (mood: Mood) => void
    speak: () => void
  }
  
  const createEmotionalEntity = (): EmotionalEntity => {
    let currentMood: Mood = createHappyMood()
  
    return {
      setMood: (mood) => {
        currentMood = mood
      },
      speak: () => {
        console.log(currentMood.respond())
      },
    }
  }
  
  // ==== Example usage ====
  
  const alex = createEmotionalEntity()
  
  alex.speak() // 😊
  
  alex.setMood(createSadMood())
  alex.speak() // 😢
  
  alex.setMood(createAngryMood())
  alex.speak() // 😠