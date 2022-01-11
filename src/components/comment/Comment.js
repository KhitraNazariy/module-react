export default function Comment({comment:{id, name, email, body}}) {
    return (
        <div>
            <h3>{id} - {name}</h3>
            <p>{email} - {body}</p>
        </div>
    );
}