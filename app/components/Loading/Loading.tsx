import "./styles.css"

const Loader = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center mt-40 mb-52">
      
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="mt-3 ml-2 text-lg">Porfavor Espere...</p>
    </div>
    
  )
}

export default Loader