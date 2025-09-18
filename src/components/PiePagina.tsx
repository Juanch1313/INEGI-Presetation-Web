
function PiePagina() {
  return (
    <div className="select-none flex gap-10 md:gap-0 text-center flex-col md:flex-row md:justify-around bg-[#27c6a5] py-5 mt-15 text-white">
      <div className="text-center text-lg md:text-2xl my-auto">
        <h3>Contacto</h3>
        <ul>
          <li><a className="underline font-bold hover:text-stone-500 hover:shadow-2xl transition-all" href="tel:+523334889386" type="cel">Llamar Soporte Tecnico</a></li>
        </ul>
      </div>
      <div className="h-full my-auto text-lg md:text-2xl">
        <h3>Todos los derechos reservados INEGI 2025 &copy;</h3>
      </div>
    </div>
  )
}

export default PiePagina