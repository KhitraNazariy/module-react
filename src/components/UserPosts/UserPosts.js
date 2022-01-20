export default function UserPosts({post}) {

    const {id, title} = post;

    return (
        <div>
            {id}) {title}
        </div>
    );
}