import React, { useState } from 'react'

function* Genratornumber(start) {
    console.log("🚀 ~ file: GenratorFunction.jsx:7 ~ function*Genratornumber ~ Genratornumber:", Genratornumber)
    let i = start
    while (true) {
      yield i++;
    }
  }
  

function GenratorFunction() {
    console.log("🚀 ~ file: GenratorFunction.jsx:15 ~ GenratorFunction ~ GenratorFunction:", GenratorFunction)
    const [num , setNum] = useState(0);
    const handleClick = ()=>{
        const itrator = Genratornumber(num + 1);
        setNum(itrator.next().value);
    }
  return (
    <div>
        <p>NUmber: {num}</p>
        <button onClick={handleClick}>Genrator nUmber</button>
    </div>
  )
}

export default GenratorFunction