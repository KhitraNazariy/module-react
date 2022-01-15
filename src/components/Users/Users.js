import {useEffect, useState} from "react";
import User from "../User/User";

export default function Users({users}) {

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}