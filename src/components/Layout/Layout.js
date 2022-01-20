import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

export default function Layout() {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}