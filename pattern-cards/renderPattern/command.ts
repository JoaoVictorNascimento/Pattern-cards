export const command = `// ==== Command interface ====

type VoiceCommand = {
    execute: () => void
  }
  
  // ==== Receivers (the ones who perform the actions) ====
  
  const createLightSystem = () => ({
    turnOn: () => console.log('💡 Lights turned ON.'),
    turnOff: () => console.log('💡 Lights turned OFF.'),
  })
  
  const createMusicSystem = () => ({
    playSong: (song: string) => console.log(\`🎵 Now playing: "\${song}"\`),
    stopMusic: () => console.log('🎵 Music stopped.'),
  })
  
  const createMessagingSystem = () => ({
    sendMessage: (to: string, message: string) =>
      console.log(\`📨 Message to \${to}: "\${message}" sent.\`),
  })
  
  // ==== Concrete commands ====
  
  const createTurnOnLightsCommand = (light: ReturnType<typeof createLightSystem>): VoiceCommand => ({
    execute: () => light.turnOn(),
  })
  
  const createPlayMusicCommand = (music: ReturnType<typeof createMusicSystem>, song: string): VoiceCommand => ({
    execute: () => music.playSong(song),
  })
  
  const createSendMessageCommand = (messaging: ReturnType<typeof createMessagingSystem>, to: string, msg: string): VoiceCommand => ({
    execute: () => messaging.sendMessage(to, msg),
  })
  
  // ==== Voice Assistant ====
  
  const createVoiceAssistant = () => {
    const commands: VoiceCommand[] = []
  
    return {
      hearCommand: (command: VoiceCommand) => {
        commands.push(command)
      },
      executeCommands: () => {
        console.log('\n🎙️ Executing voice commands:')
        commands.forEach(cmd => cmd.execute())
        commands.length = 0
      },
    }
  }
  
  // ==== Usage ====
  
  const lights = createLightSystem()
  const music = createMusicSystem()
  const messenger = createMessagingSystem()
  
  const assistant = createVoiceAssistant()
  
  // Simulating voice input as command objects
  assistant.hearCommand(createTurnOnLightsCommand(lights))
  assistant.hearCommand(createPlayMusicCommand(music, 'Imagine - John Lennon'))
  assistant.hearCommand(createSendMessageCommand(messenger, 'Alice', 'Don’t forget our meeting at 5 PM'))
  
  assistant.executeCommands()
` 