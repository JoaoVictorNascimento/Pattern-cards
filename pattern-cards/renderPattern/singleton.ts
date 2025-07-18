export const singleton = `// ==== Tipo de Teste ====

type Test = {
    id: number
    name: string
    result: string
    date: Date
  }
  
  // ==== Laboratório Singleton ====
  
  type Lab = {
    runTest: (name: string, result: string) => Test
    getTests: () => Test[]
  }
  
  // ==== Criador do laboratório ====
  
  const createLab = (): Lab => {
    const tests: Test[] = []
    let nextId = 1
  
    return {
      runTest: (name, result) => {
        const test: Test = {
          id: nextId++,
          name,
          result,
          date: new Date(),
        }
        tests.push(test)
        console.log(\`Test "\${test.name}" registrado com resultado: \${test.result}\`)
        return test
      },
  
      getTests: () => [...tests],
    }
  }
  
  // ==== Singleton do laboratório (lazy initialization) ====
  
  const getLab = (() => {
    let instance: Lab | null = null
  
    return () => {
      if (!instance) {
        instance = createLab()
      }
      return instance
    }
  })()
  
  // ==== Código do cliente ====
  
  const scientistA = () => {
    const lab = getLab()
    lab.runTest('Teste de pH', 'Ácido')
  }
  
  const scientistB = () => {
    const lab = getLab()
    lab.runTest('Teste de resistência', 'Aprovado')
  }
  
  const scientistC = () => {
    const lab = getLab()
    console.log('Histórico de testes:', lab.getTests())
  }
  
  // ==== Simulação ====
  
  scientistA()
  scientistB()
  scientistC()
` 