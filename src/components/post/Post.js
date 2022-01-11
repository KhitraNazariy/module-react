import './Post.css'

export default function Post({post:{id, title, body}}) {
    return (
        <div className={'wrap-post'}>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
        </div>
    );
}