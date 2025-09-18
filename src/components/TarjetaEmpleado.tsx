import type { Empleado } from "../types"

type TarjetaEmpleadoProps = {
  empleado: Empleado
}

function TarjetaEmpleado( {empleado} : TarjetaEmpleadoProps ) {
  return (
    <div className="select-none mb-10 rounded-xl bg-[#f1f2ec] hover:border-white 
    hover:scale-110 transition-all duration-700 hover:bg-[#27c6a5] hover:text-white 
    hover:shadow-black shadow-2xl shadow-gray-500 border-[#27c6a5] border-4 min-w-80 min-h-80 max-h-80 max-w-80 
    text-center mx-auto flex flex-col items-center justify-center
    active:border-white active:scale-110 active:text-white active:shadow-black 
    active:bg-[#27c6a5] animacion-rotacion">

      <img src={empleado.foto} alt={empleado.name} className="w-50 max-h-45 pointer-events-none"></img>
      <h3 className="text-xl italic font-semibold mt-2">{empleado.name.toUpperCase()}</h3>
      <h4 className="text-lg font-thin">{empleado.puesto}</h4>
    </div>
  )
}

export default TarjetaEmpleado