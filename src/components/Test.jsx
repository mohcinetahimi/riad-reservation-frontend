import React from 'react'
import { useState } from 'react'
export default function Test() {
const [show,setShow] = useState(true)

return (
    <div className={`background ${show ? 'background--active' : ''}` }>
      <img
        className={`picture ${show ? "picture--active" :  ""}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={()=> {setShow(prev=>!prev)}}
      />
    </div>
  );
}
