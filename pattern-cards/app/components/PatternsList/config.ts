type PatternInfo = {
  name: string
  id: number
  file: string
}

type PatternCategory = {
  title: string
  patterns: PatternInfo[]
}

export const patternCategories: PatternCategory[] = [
    {
      title: "Creational Patterns",
      patterns: [
        {
          name: "Abstract Factory",
          id: 1,
          file: "abstract-factory"
        },
        {
          name: "Builder",
          id: 2,
          file: "builder"
        },
        {
          name: "Factory Method",
          id: 3,
          file: "factory-method"
        },
        {
          name: "Prototype",
          id: 4,
          file: "prototype"
        },
        {
          name: "Singleton",
          id: 5,
          file: "singleton"
        }
      ]
    },
    {
      title: "Structural Patterns",
      patterns: [
        {
          name: "Adapter",
          id: 6,
          file: "adapter"
        },
        {
          name: "Bridge",
          id: 7,
          file: "bridge"
        },
        {
          name: "Composite",
          id: 8,
          file: "composite"
        },
        {
          name: "Decorator",
          id: 9,
          file: "decorator"
        },
        {
          name: "Facade",
          id: 10,
          file: "facade"
        },
        {
          name: "Flyweight",
          id: 11,
          file: "flyweight"
        },
        {
          name: "Proxy",
          id: 12,
          file: "proxy"
        }
      ]
    },
    {
      title: "Behavioral Patterns",
      patterns: [
        {
          name: "Chain of Responsibility",
          id: 13,
          file: "chain-of-responsibility"
        },
        {
          name: "Command",
          id: 14,
          file: "command"
        },
        {
          name: "Interpreter",
          id: 15,
          file: "interpreter"
        },
        {
          name: "Iterator",
          id: 16,
          file: "iterator"
        },
        {
          name: "Mediator",
          id: 17,
          file: "mediator"
        },
        {
          name: "Memento",
          id: 18,
          file: "memento"
        },
        {
          name: "Observer",
          id: 19,
          file: "observer"
        },
        {
          name: "State",
          id: 20,
          file: "state"
        },
        {
          name: "Strategy",
          id: 21,
          file: "strategy"
        },
        {
          name: "Template Method",
          id: 22,
          file: "template-method"
        },
        {
          name: "Visitor",
          id: 23,
          file: "visitor"
        }
      ]
    }
]