export const iterator = `// ==== Item type ====

type Item = {
    name: string
    type: 'weapon' | 'potion' | 'armor' | 'misc'
  }
  
  // ==== Inventory type ====
  
  type Inventory = {
    items: Item[]
  }
  
  // ==== Iterator interface ====
  
  type InventoryIterator = {
    hasNext: () => boolean
    next: () => Item | null
  }
  
  // ==== Iterator factory ====
  
  const createInventoryIterator = (inventory: Inventory): InventoryIterator => {
    let index = 0
  
    return {
      hasNext: () => index < inventory.items.length,
      next: () => {
        if (index < inventory.items.length) {
          const item = inventory.items[index]
          index++
          return item
        }
        return null
      },
    }
  }
  
  // ==== Sample usage ====
  
  const heroInventory: Inventory = {
    items: [
      { name: 'Iron Sword', type: 'weapon' },
      { name: 'Health Potion', type: 'potion' },
      { name: 'Leather Armor', type: 'armor' },
      { name: 'Old Map', type: 'misc' },
    ],
  }
  
  const inventoryIterator = createInventoryIterator(heroInventory)
  
  while (inventoryIterator.hasNext()) {
    const item = inventoryIterator.next()
    if (item) {
      console.log(\`🎒 Found item: \${item.name} (\${item.type})\`)
    }
  }
` 