import { useState } from "react"

export default function Show(){
    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show);
    }

    return(
        <div style={{border:'2px solid black',
         padding:'10px',
          margin:'50px',
          borderRadius:'10px',
          backgroundColor:'lightgray',
          textAlign:'center',
          
          }}>
            {show && (
                <div>
                                 <h1 >Hello,React Learner!</h1>

                </div>
            )}
            <button style={{border:'2px solid black',
            padding:'10px',
            
            margin:'40px',
            borderRadius:'10px',
            backgroundColor:'red',
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            border: '6px solid green',

            }} onClick={handleShow}
            
            >
                
                {show ? 'Hide' : 'Show'} Details</button>
        </div>
    )
}