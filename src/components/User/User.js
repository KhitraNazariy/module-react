import {Link} from "react-router-dom";

import css from "./User.module.css"

export default function User({user}) {

    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <p>{id}) {name}</p>
            <div>
                <Link to={id.toString()} state={user}>
                    <button className={css.btn}>user details</button>
                </Link>
                <Link to={id + '/albums'}>
                    <button className={css.btn}>albums</button>
                </Link>
            </div>
        </div>
    );
}