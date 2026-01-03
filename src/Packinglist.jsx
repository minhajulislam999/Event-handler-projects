function Item({isPacked, name}){
    // if(isPacked){
    //     return <li>{name} ✅</li>;
    // }
    // return <li className="">{name} </li>


    //Conditional (ternary) operator (? :) 

    // return (
    //     <li>
    //         {isPacked ? (
    //             <del>
    //                 {name + ' ✅'}
    //                 </del>
    //             ) :( 
    //                 name
    //                 )} 
    //     </li>
    // );


    //Logical AND operator (&&) 


    // return(
    //     <li>
    //         {name} {isPacked && '✅'}
    //     </li>
    // )

    //Conditionally assigning JSX to a variable 

    let itemContent = name;
    if(isPacked){
        itemContent = name + ' ✅';
    }

    return(
        <li>{itemContent}</li>
    )
}


export default function PackingList(){
    return(
        <section style={{
            border:'5px solid purple',
            margin:'20px',
            padding:'20px',
            borderRadius:'10px',
            backgroundColor:'lavender',


        }} >
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                isPacked={true}
                name="Space suit" />
                <Item 
                isPacked={true}
                name="Helmet with a golden visor" />
                <Item 
                isPacked={false}
                name="Photo of Tam" />
                <Item 
                isPacked={true}
                name="Photo of Earth" />
            </ul>
        </section>
    )
}