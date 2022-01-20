import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "./PostsPage.module.css"

export default function PostsPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    },[]);

    return (
        <div className={css.wrap}>
            <div>
                {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}