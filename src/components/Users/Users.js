import {useEffect, useState} from "react";

import {getUser, getUserPost, getUsers} from "../../services/service";
import User from "../User/User";
import './Users.css'
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    const userDetails = (id) => {
        getUser(id).then(value => setUser(value.data));
    }

    const getPosts = (id) => {
        getUserPost(id).then(value => setPosts(value.data));
    }

    return (
        <div>
            <div className={'wrap'}>
                <div>
                    {
                        users.map(user => <User key={user.id} user={user} userDetails={userDetails}/>)
                    }
                </div>
                {
                    user && <UserDetails getPosts={getPosts} user={user}/>
                }
            </div>
            {
                posts && <Posts posts={posts}/>
            }
        </div>
    );
}