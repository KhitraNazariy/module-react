import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPosts} from "../../store/post.slice";
import Post from "../../components/Post/Post";

export default function PostsPage() {

    const {posts, status, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}