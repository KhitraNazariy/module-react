import './UserDetails.css';

export default function UserDetails(props) {

    const {user: {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}}, getPosts} = props;

    return (
        <div className={'wrap-details'}>
            <p>Details about user with id - {id}</p>
            <h2>ID - {id}, name - {name}</h2>
            <p>
                username - {username}<br/>
                email - {email}
            </p>
            <div>
                <h3>Address</h3>
                <p>
                    street - {street}<br/>
                    suite - {suite}<br/>
                    city - {city}<br/>
                    zipcode - {zipcode}
                </p>
                <h3>GEO</h3>
                <p>
                    lat  {lat}<br/>
                    lng  {lng}
                </p>
            </div>
            <button className={'details-btn'} onClick={() => {getPosts(id)}}>Get posts</button>
        </div>
    );
}