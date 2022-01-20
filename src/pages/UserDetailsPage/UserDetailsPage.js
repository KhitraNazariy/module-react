import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import css from "./UserDetailsPage.module.css"

export default function UserDetailsPage() {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }

        userService.getById(id).then(value => setUser(value));

    },[id]);

    return (
        <div>
            {user && (
                <div className={css.wrap}>
                    <h3>{user.id} - {user.name}</h3>
                    <p>username - {user.username}</p>
                    <p>email - {user.email}</p>
                    <h3>Address</h3>
                    <p>street - {user.address?.street}</p>
                    <p>suite - {user.address?.suite}</p>
                    <p>city - {user.address?.city}</p>
                    <p>zipcode - {user.address?.zipcode}</p>
                    <h3>Geo</h3>
                    <p>lat {user.address?.geo.lat}</p>
                    <p>lng {user.address?.geo.lng}</p>
                    <p>phone - {user.phone}</p>
                    <p>website - {user.website}</p>
                    <h3>Company</h3>
                    <p>Company name - {user.company?.name}</p>
                    <p>Catch phrase - {user.company?.catchPhrase}</p>
                    <p>bs - {user.company?.bs}</p>
                </div>
            )}
            <Link to={'posts'}><button className={css.btn}>posts</button></Link>
            <Outlet/>
        </div>
    );
}