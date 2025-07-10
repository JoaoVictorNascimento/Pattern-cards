import PatternCard from "./components/PatternCard/card";


export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-blue-800">
      <PatternCard id={1} name={"Abstract Fatory"} image={"/abstract-factory.png"} description={""} />
    </div>
  )
}
