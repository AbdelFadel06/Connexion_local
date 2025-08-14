const HomePage = ()=>{
    const Email = localStorage.getItem("email");
    return (
        <>
            <div className="bg-[#A7D7C5] min-h-screen flex  justify-center">

            <h3 className="text-3xl mt-10">Bienvenue Mr. <span className="font-light text-2xl italic">{Email}</span>  </h3>
            </div>
        </>
    )
}

export default HomePage