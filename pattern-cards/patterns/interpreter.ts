// ==== Command interface ====

type TrafficLightCommand = {
    interpret: () => string
  }
  
  // ==== Factory for traffic light expressions ====
  
  const createTrafficLightCommand = (color: string, duration: number): TrafficLightCommand => ({
    interpret: () => {
      switch (color) {
        case 'green':
          return `🟢 GREEN light for ${duration} seconds`
        case 'yellow':
          return `🟡 YELLOW light for ${duration} seconds`
        case 'red':
          return `🔴 RED light for ${duration} seconds`
        default:
          return `❌ Invalid color: ${color}`
      }
    },
  })
  
  // ==== Parser (Interpreter function) ====
  
  const parseTrafficLightScript = (script: string): TrafficLightCommand[] => {
    const lines = script.split('\n').map(line => line.trim()).filter(Boolean)
  
    return lines.map(line => {
      const [color, timeWithS] = line.split(' ')
      const duration = parseInt(timeWithS.replace('s', ''), 10)
  
      return createTrafficLightCommand(color.toLowerCase(), duration)
    })
  }
  
  // ==== Example Usage ====
  
  const script = `
    green 10s
    yellow 3s
    red 7s
    blue 4s
  `
  
  const commands = parseTrafficLightScript(script)
  
  commands.forEach(cmd => {
    console.log(cmd.interpret())
  })