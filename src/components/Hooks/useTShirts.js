import { useEffect, useState } from "react"

const useTShirts = () =>{
    const [tShirts, setTStirts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setTStirts(data))
    },[tShirts, setTStirts])
}

export default useTShirts;