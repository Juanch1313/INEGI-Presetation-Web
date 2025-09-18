import { useState } from "react"
import Buscador from "./components/Buscador"
import Empleados from "./components/Empleados"
import PiePagina from "./components/PiePagina"
import EfectoBorroso from "./components/EfectoBorroso"

function App() {
  const [buscador, setBuscador] = useState<string>('')

  return (
    <div>
      <div className="select-none text-center w-full min-h-48 bg-[#27c6a5] shadow-2xl">
        <img alt="Imagen de portada" src='/logos/portada.png' className="max-w-80 md:max-w-xl mx-auto"></img>

        <h2 className="text-xl md:text-2xl font-bold text-black pb-6">
          Concepcion de Buenos Aires
          <br/>
          La Manzanilla de la Paz
          <br/>
          Tuxcueca
          <br/>
          Teocuitatlan de Corona
          <br/>
          Tizapan el Alto
        </h2>

        <p className="text-xl md:text-3xl font-bold text-white pb-6">¡Conoce a nuestro equipo!</p>
      </div>
      <EfectoBorroso duration={2}>
        <Buscador
          setBuscador={setBuscador}/>
        <Empleados
          buscador={buscador}
        />
        <PiePagina/>
      </EfectoBorroso>
    </div>
  )
}

export default App
