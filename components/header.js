const header = () => {
  return (
    <header className ="bg-gray-300">
        <div className="xl:container xl:mx-auto flex flex-col items sm:flex-row sm:justify-between text text-red-500">
          <div>
            <input type="text" placeholder="Search..."/>
          </div>
          <div>
            <a>Design</a>
          </div>
          <div>
          <div className="flex">
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Youtube</a>
          </div>
          </div>
        </div>

    </header>
    
  )
}

export default header
