import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from "./UsersPage.module.css"

export default function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    },[]);

    return (
        <div className={css.wrap}>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}