import { useRef } from "react"

type BuscadorProps = {
  setBuscador: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({setBuscador} : BuscadorProps)  {

  const inputRef = useRef<HTMLInputElement>(null)

  const onKeyDownHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    if(inputRef.current){
      const value = inputRef.current.value
      if(!/^\d*$/.test(value)){
        event.preventDefault()
      }
    }
  }

  const onClickSearch = () => {
    if(inputRef.current){
      setBuscador(inputRef.current.value)
      inputRef.current.value = ""
    }
  }

  return (
    <div className=" select-none flex flex-col items-center mx-auto md:flex-row md:justify-center md:min-w-80 space-x-2 mt-5 text-lg space-y-2 md:space-y-0">

      <label className="text-xl font-semibold">Ingrese el folio: </label>

      <input className="rounded-lg border border-black px-0.5 max-w-80 md:min-w-sm text-center" type="text" ref={inputRef} name="search" placeholder="Ejemplo: 491709" maxLength={6}/>

      <button className="transition-all hover:shadow-2xl ease-in-out px-4 py-2 text-white bg-[#27c6a5] border font-bold border-black rounded-lg hover:cursor-pointer hover:bg-[#27c6a5]" onClick={onClickSearch} onChange={onKeyDownHandler}>
        Buscar
      </button>

    </div>
  )
}

export default Buscador