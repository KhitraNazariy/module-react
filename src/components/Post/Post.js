export default function Post({post}) {

    let {id, title, body} = post;

    return (
        <div>
            ID - {id}<br/>
            title - {title}<br/>
            body - {body}
            <hr/>
        </div>
    );
}