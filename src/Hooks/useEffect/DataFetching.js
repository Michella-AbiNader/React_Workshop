import React, { useState, useEffect } from 'react'

function DataFetching() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function fethData(){
            const response = await fetch("") //we put the link we want to fetch the data from
            const result = await response.json()
            setData(result);
            setLoading(false)
        }
        fethData()
    },[])
    if(loading === true){
        return(
            <div>Loading data</div>
        )
    }
  return (
    <div>
        <h1>DataFetching</h1>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    {item.name}; {item.username}; {item.email}
                </li>
            ))}
        </ul>
        </div>
  )
}

export default DataFetching