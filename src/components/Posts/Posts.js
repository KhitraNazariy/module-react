import Post from "../Post/Post";

export default function Posts({posts}) {

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}