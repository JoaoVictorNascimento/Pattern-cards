export const CardContentBorder = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex rounded-lg border-2 border-black w-full p-1">
        <div className="flex flex-col justify-between items-center rounded-lg border-2 border-amber-400 border-dotted w-full p-4">
          {children}
        </div>
      </div>
    )
  }