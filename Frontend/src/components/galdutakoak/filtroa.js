const Filtroa= ()=>{

    return <div className="mt-10 max-w-auto flex flex-row justify-center">
        <div className="mr-8">
            <label className="">Probincia:</label>
            <select>
                <option>Gipuzkoa</option>
                <option>Bilbo</option>
            </select>
        </div>
        <div>
            <label>Ciudad:</label>
            <select>
                <option>Donosti</option>
                <option>Zarautz</option>
            </select>
        </div>
    </div>

}

export default Filtroa;