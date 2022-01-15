import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import './App.css';
import {useState} from "react";
import {postService} from "./services/post.service";

export default function App() {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    const getUser = (user) => {
        setUser(user)
    }

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts(value.data))
    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {posts && <Posts posts={posts}/>}
        </div>
    );
}