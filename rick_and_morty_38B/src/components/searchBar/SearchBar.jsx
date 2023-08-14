import { useState } from 'react'

export default function SearchBar(props) {
   const [id,setId] = useState("");
   // const [idr,setIdr] = useState(0);

   const handleChange=(event)=>{
      // console.log(event.target)
      const {value} =event.target;
      // console.log(value)

      setId([value])
   }


   const handleRandom=()=>{
      // setIdr([Math.floor(Math.random() * 826)])
      props.onRandom()
   }


   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={()=>{props.onSearch({id})}}>Agregar</button>
         <button onClick={ ()=>{handleRandom()} } >Random</button>

      </div>
   );
}
