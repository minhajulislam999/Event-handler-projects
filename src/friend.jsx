export default function Friend({friend}){
    console.log(friend);
    const {name, email, phone, company} = friend;
    return(
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company.name}</p>
            </div>
    )
}
        