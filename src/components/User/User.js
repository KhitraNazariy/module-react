export default function User({user, getUser}) {

    let {id, name} = user;

    return (
        <div>
            <h2>
                {id} - {name}
                <button onClick={() => {getUser(user)}}>userDetails</button>
            </h2>
        </div>
    );
}