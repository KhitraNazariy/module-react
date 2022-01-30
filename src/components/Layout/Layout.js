import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <Outlet/>
        </div>
    );
}