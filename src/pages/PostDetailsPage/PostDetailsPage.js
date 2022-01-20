import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import css from "./PostDetailsPage.module.css"

export default function PostDetailsPage() {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost(value));

    },[id])

    return (
        <div>
            {post && (
                <div>
                    <p>userId: {post.userId}</p>
                    <p>Id:{post.id}</p>
                    <p>title:{post.title}</p>
                    <p>body:{post.body}</p>
                </div>
            )}
            <Link to={'comments'}><button className={css.btn}>comments</button></Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}