export const memento = `// ==== Types ====

type CathedralState = {
    facade: string
    stainedGlass: string
    mural: string
  }
  
  type Memento = CathedralState
  
  type Cathedral = {
    state: CathedralState
    restore: (newState: Partial<CathedralState>) => Cathedral
    save: () => Memento
    restoreFromMemento: (m: Memento) => Cathedral
  }
  
  type RestorationArchive = {
    history: Memento[]
    save: (m: Memento) => RestorationArchive
    latest: () => Memento | undefined
  }
  
  // ==== Create Cathedral ====
  
  const createCathedral = (initialState: CathedralState): Cathedral => ({
    state: initialState,
    restore(newState) {
      return createCathedral({ ...this.state, ...newState })
    },
    save() {
      return { ...this.state }
    },
    restoreFromMemento(memento) {
      return createCathedral(memento)
    },
  })
  
  // ==== Create Restoration Archive (Caretaker) ====
  
  const createRestorationArchive = (): RestorationArchive => {
    const history: Memento[] = []
  
    return {
      history,
      save(m) {
        return createArchiveWith([...history, m])
      },
      latest() {
        return history[history.length - 1]
      },
    }
  
    function createArchiveWith(h: Memento[]): RestorationArchive {
      return {
        history: h,
        save: (m) => createArchiveWith([...h, m]),
        latest: () => h[h.length - 1],
      }
    }
  }
  
  // ==== Simulation ====
  
  let cathedral = createCathedral({
    facade: "Original with moss",
    stainedGlass: "Old cracked stained glass",
    mural: "Faded mural",
  })
  
  let archive = createRestorationArchive()
  
  // 🏯 Save the original state
  archive = archive.save(cathedral.save())
  
  // 🎨 First restoration: mural
  cathedral = cathedral.restore({ mural: "Restored mural with gold leaf" })
  
  // 🏯 Save new state
  archive = archive.save(cathedral.save())
  
  // 🎨 Second restoration: stained glass
  cathedral = cathedral.restore({ stainedGlass: "Colorful new stained glass" })
  
  console.log("📌 Current cathedral state:", cathedral.state)
  
  // 🧯 Something went wrong! Let's revert
  const previousState = archive.latest()
  if (previousState) {
    cathedral = cathedral.restoreFromMemento(previousState)
  }
  
  console.log("⏪ Cathedral after rollback:", cathedral.state)
` 