// ✅ Practice – 1: Different Messages Using Props

// import { Children } from "react";

export default function  CustomButton({message, children}){
    return(
        <>
        <button
        onClick = {()=>alert(message)}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
            {children}
        </button>

        </>
    )
}