export default function UserDetails({user, getUserId}) {

    let {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}} = user

    return (
        <div>
            <h2>ID - {id} - {name}</h2>
            <p>
                username - {username}<br/>
                email - {email}<br/>
            </p>
            <h3>Address</h3>
            <p>
                street - {street}<br/>
                suite - {suite}<br/>
                city - {city}<br/>
                zipcode - {zipcode}
            </p>
            <button onClick={() => getUserId(id)}>getPosts</button>
        </div>
    );
}