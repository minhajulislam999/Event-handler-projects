export default function Button3(){
    return(
        <>
        <button
        onClick={() => 
            alert("Button 3 clicked")
        }
        
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
            Button 3 - Click me
        </button>
        
        </>
    )
}