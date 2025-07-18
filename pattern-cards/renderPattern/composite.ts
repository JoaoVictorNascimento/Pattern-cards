export const composite = `// ==== Common interface for all tree components ====

type TreeComponent = {
    describe: () => string
    countApples: () => number
  }
  
  // ==== Leaf component: a single apple ====
  
  const createApple = (): TreeComponent => ({
    describe: () => '🍎 Apple',
    countApples: () => 1,
  })
  
  // ==== Leaf component: a single leaf ====
  
  const createLeaf = (): TreeComponent => ({
    describe: () => '🍃 Leaf',
    countApples: () => 0,
  })
  
  // ==== Composite component: branch ====
  
  const createBranch = (
    name: string,
    components: TreeComponent[] = []
  ): TreeComponent => ({
    describe: () => {
      const parts = components.map((c) => c.describe()).join(', ')
      return \`🌿 Branch "\${name}" with: \${parts}\`
    },
    countApples: () =>
      components.reduce((sum, c) => sum + c.countApples(), 0),
  })
  
  // ==== Building the tree ====
  
  const smallBranch = createBranch('Small Branch', [
    createApple(),
    createLeaf(),
    createApple(),
  ])
  
  const largeBranch = createBranch('Large Branch', [
    createLeaf(),
    smallBranch,
    createApple(),
  ])
  
  const tree = createBranch('Apple Tree', [
    createLeaf(),
    createApple(),
    largeBranch,
  ])
  
  // ==== Client code ====
  
  console.log(tree.describe())
  console.log(\`Total apples in the tree: \${tree.countApples()}\`)
` 