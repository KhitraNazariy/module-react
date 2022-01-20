import {Link} from "react-router-dom";

import css from "./Album.module.css"

export default function Album({album}) {

    const {id, title} = album;

    return (
        <div className={css.wrap}>
            <p>{id}) {title}</p>
            <Link to={id + '/photos'}><button className={css.btn}>photos</button></Link>
        </div>
    );
}