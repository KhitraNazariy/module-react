import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";

export default function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, serFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(...[value])
            serFilteredUsers(...[value])
        });
    }, []);

    const getFilter = (data) => {
        let filterArray = [...users];

        if (data.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        serFilteredUsers(filterArray)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}