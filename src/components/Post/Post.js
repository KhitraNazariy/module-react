export default function Post({post: {id, title, body}}) {
    return (
        <div>
            <h3>ID - {id} - {title}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
}