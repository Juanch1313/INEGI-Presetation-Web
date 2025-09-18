import { useMemo, useState } from "react"
import { db } from "../data/empleadosDB"
import TarjetaEmpleado from "./TarjetaEmpleado"
import Modal from "./Modal"
import EfectoBorroso from "./EfectoBorroso"

type EmpleadosProps = {
  buscador: string
}

function Empleados( { buscador } : EmpleadosProps ) {

  const [empleados] = useState(db)
  const [modalAbierto, setModalAbierto] = useState(false)

  const listaFiltrada = useMemo( () => {
    if(typeof (empleados.find(e => e.folio === buscador)) === 'undefined' && buscador != "") {
      setModalAbierto(true)
      return empleados
    }
    
    return buscador === '' ? empleados : empleados.filter( empleado => empleado.folio === buscador
    )
  }, [buscador, empleados ])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] min-h-80 mt-10 mx-auto">
      {modalAbierto ?        (
        <>
          <Modal
            isOpen={modalAbierto} onClose={() => setModalAbierto(false)}  
          >
            <div className="space-y-6">
              <h2 className="text-xl font-bold">¡El empleado que ha ingresado no esta registrado en nuestro equipo!</h2>
              <p className="text-lg font-semibold mb-5">Por favor reportelo a la brevedad, resguarde su informacion</p>
            </div>
          </Modal>
        </> 
      )

        :
        listaFiltrada?.map(empleado => (
          <EfectoBorroso duration={1}  key={empleado.folio}>
            <TarjetaEmpleado 
              empleado={empleado}
            />
          </EfectoBorroso>
        ))}
    </div>
  )
}

export default Empleados