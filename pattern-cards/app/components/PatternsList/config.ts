type PatternInfo = {
  name: string
  id: number
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
          id: 1
        },
        {
          name: "Builder",
          id: 2
        },
        {
          name: "Factory Method",
          id: 3
        },
        {
          name: "Prototype",
          id: 4
        },
        {
          name: "Singleton",
          id: 5
        }
      ]
    },
    {
      title: "Structural Patterns",
      patterns: [
        {
          name: "Adapter",
          id: 6
        },
        {
          name: "Bridge",
          id: 7
        },
        {
          name: "Composite",
          id: 8
        },
        {
          name: "Decorator",
          id: 9
        },
        {
          name: "Facade",
          id: 10
        },
        {
          name: "Flyweight",
          id: 11
        },
        {
          name: "Proxy",
          id: 12
        }
      ]
    },
    {
      title: "Behavioral Patterns",
      patterns: [
        {
          name: "Chain of Responsibility",
          id: 13
        },
        {
          name: "Command",
          id: 14
        },
        {
          name: "Interpreter",
          id: 15
        },
        {
          name: "Iterator",
          id: 16
        },
        {
          name: "Mediator",
          id: 17
        },
        {
          name: "Memento",
          id: 18
        },
        {
          name: "Observer",
          id: 19
        },
        {
          name: "State",
          id: 20
        },
        {
          name: "Strategy",
          id: 21
        },
        {
          name: "Template Method",
          id: 22
        },
        {
          name: "Visitor",
          id: 23
        }
      ]
    }
]