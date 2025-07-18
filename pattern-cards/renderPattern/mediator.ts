export const mediator = `// ==== Message type ====

type Message = {
    from: string
    to?: string
    content: string
  }
  
  // ==== Involved party ====
  
  type Person = {
    name: string
    receive: (msg: Message) => void
    speak: (text: string, to?: string) => void
  }
  
  // ==== Mediator ====
  
  type Mediator = {
    register: (person: Person) => void
    forward: (msg: Message) => void
  }
  
  // ==== Creating the Mediator ====
  
  const createMediator = (): Mediator => {
    const people: Record<string, Person> = {}
  
    return {
      register: (p) => {
        people[p.name] = p
      },
      forward: (msg) => {
        if (msg.to) {
          people[msg.to]?.receive(msg)
        } else {
          // send to everyone except the sender
          Object.values(people)
            .filter((p) => p.name !== msg.from)
            .forEach((p) => p.receive(msg))
        }
      },
    }
  }
  
  // ==== Creating a Person ====
  
  const createPerson = (name: string, mediator: Mediator): Person => {
    const p: Person = {
      name,
      receive: (msg) =>
        console.log(\`👤 \${name} received from \${msg.from}: "\${msg.content}"\`),
      speak: (text, to) =>
        mediator.forward({ from: name, to, content: text }),
    }
  
    mediator.register(p)
    return p
  }
  
  // ==== Simulation ====
  
  const mediator = createMediator()
  
  const john = createPerson('John', mediator)
  const mary = createPerson('Mary', mediator)
  
  john.speak('I would like to keep the car.')
  mary.speak('Then I would like to keep the apartment.', 'John')
  john.speak('Can we split the furniture?', 'Mary')
` 