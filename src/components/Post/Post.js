import {Link} from "react-router-dom";

import css from "./Post.module.css"

export default function Post({post}) {

    const {id, title} = post;

    return (
        <div className={css.wrap}>
            <p>{id}) {title}</p>
            <Link to={id.toString()} state={post}><button className={css.btn}>post details</button></Link>
        </div>
    );
}