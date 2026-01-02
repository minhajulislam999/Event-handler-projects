// Practice 1: Basic Click Handler

export default function Button1(){
    function handleClick(){
        alert("Button Clicked!");
    }



    return(
        <>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
            Button1 - Click Me
        </button>


        <button onClick={function handleClick(){
            alert("Button2 clicked");
        }}
        
        className="px-4 py-2 bg-green-500 text-white rounded-2xl"
        >
            Button 2 
        </button>
        </>
    )
}



