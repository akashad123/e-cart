import { useEffect, useState } from "react"

const useFetch = (url)=>{

    // Logic
    const [data, setData] = useState("")
    
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                setData(result.products)
            })
        })
    }, [])
    return data
}

export default useFetch