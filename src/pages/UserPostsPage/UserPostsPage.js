import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import UserPosts from "../../components/UserPosts/UserPosts";

export default function UserPostsPage() {

    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts(id).then(value => setPosts(value));
    }, []);

    return (
        <div>
            {posts &&
                posts.map(post => <UserPosts key={post.id} post={post}/>)
            }
        </div>
    );
}