import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllUsers} from "../../store/user.slice";
import User from "../../components/User/User";

export default function UsersPage() {

    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}