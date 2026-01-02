//🧩 Step–1 : Child Component (Button)

export default function Button({children, onClick}){
    return(
        <button onClick={onClick}>{children}</button>
    )
}


//🟡 PRACTICE–2 (Medium)

export function LinkButton(){
    function handleLinkClick(){
        alert("Link Button Clicked! Navigating to example.com");
        // In a real app, you might use window.location.href = "https://www.example.com";
    }
    return(
        <button onClick={handleLinkClick}>Go to Example.com</button>
    )
}

export function ShareButton(){
    function handleShareClick(){
        alert("Content Shared!");
    }
    return(
        <button onClick={handleShareClick}>Share</button>
    )

}

