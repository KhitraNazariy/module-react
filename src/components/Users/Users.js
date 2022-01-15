import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";
import User from "../User/User";

export default function Users({getUser}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} getUser={getUser}/>)
            }
        </div>
    );
}