export const bridge = `// ==== Device interface ====

type Device = {
    name: string
    turnOn: () => string
    turnOff: () => string
    setVolume: (level: number) => string
  }
  
  // ==== Concrete Devices ====
  
  const createTV = (): Device => ({
    name: 'TV',
    turnOn: () => '📺 TV is now ON.',
    turnOff: () => '📺 TV is now OFF.',
    setVolume: (level) => \`📺 TV volume set to \${level}.\`,
  })
  
  const createRadio = (): Device => ({
    name: 'Radio',
    turnOn: () => '📻 Radio is playing.',
    turnOff: () => '📻 Radio turned off.',
    setVolume: (level) => \`📻 Radio volume is now \${level}.\`,
  })
  
  // ==== RemoteControl abstraction ====
  
  type RemoteControl = {
    powerOn: () => void
    powerOff: () => void
    volume: (level: number) => void
  }
  
  // ==== Bridge: RemoteControl working with any Device ====
  
  const createRemoteControl = (device: Device): RemoteControl => ({
    powerOn: () => console.log(device.turnOn()),
    powerOff: () => console.log(device.turnOff()),
    volume: (level) => console.log(device.setVolume(level)),
  })
  
  // ==== Usage ====
  
  const tv = createTV()
  const radio = createRadio()
  
  const tvRemote = createRemoteControl(tv)
  const radioRemote = createRemoteControl(radio)
  
  tvRemote.powerOn()      // 📺 TV is now ON.
  tvRemote.volume(15)     // 📺 TV volume set to 15.
  tvRemote.powerOff()     // 📺 TV is now OFF.
  
  radioRemote.powerOn()   // 📻 Radio is playing.
  radioRemote.volume(7)   // 📻 Radio volume is now 7.
  radioRemote.powerOff()  // 📻 Radio turned off.
` 