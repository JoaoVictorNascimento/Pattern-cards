// ==== The Guardian of the Portal ====
const createAccessProxy = <TArgs extends unknown[], TReturn>(
    func: (...args: TArgs) => TReturn,
    hasPermission: () => boolean
): ((...args: TArgs) => TReturn) => {
    return (...args: TArgs): TReturn => {
        if (!hasPermission()) {
            console.log("🚫 The Guardian of the Portal has blocked the passage!")
            throw new Error("Access denied. You do not possess the magical seal!")
        }

        console.log("🧙‍♂️ The Guardian of the Portal has granted passage!")
        return func(...args)
    }
}

// ==== Function to be protected ====
const openSacredVault = (password: string) => {
    return `💎 Vault opened with the secret password: ${password}`
}

// ==== Simulating magical seal check (authorization) ====
let hasMagicSeal = false
const checkMagicSeal = () => hasMagicSeal

// ==== Creating the proxy that protects the function ====
const protectedVault = createAccessProxy(openSacredVault, checkMagicSeal)

// ==== Trying to access the vault without the magical seal ====
try {
    console.log(protectedVault("12345")) // Should fail
} catch (e) {
    console.log("⚠️ Error:", (e as Error).message)
}

// ==== Granting the magical seal (authorization) ====
hasMagicSeal = true

// ==== Trying to access the vault with the magical seal ====
try {
    console.log(protectedVault("12345")) // Should succeed now
} catch (e) {
    console.log("⚠️ Error:", (e as Error).message)
}