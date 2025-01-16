import { useState } from "react";

function Irudiak_input(handleChange) {

    const [aktibatuta, setAktibatuta]= useState(true);
    const aldatu=()=>{
        setAktibatuta(!aktibatuta);
    }
    

    return (
      <>
        
        <div>
            <input
                className='mb-2 text-black dark:text-white mr-4  font-ubuntu rounded-lg'
                type='file'
                disabled={aktibatuta}
                name='img'
                onChange={handleChange}
                required
            />
            <input type="checkbox"  checked={!aktibatuta}  onChange={aldatu} />
        </div>

      </>
    );
  }
  
  export default Irudiak_input;