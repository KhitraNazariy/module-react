import {useDispatch} from "react-redux";

import css from './TodoItem.module.css'
import {changeStatus, deleteTodo} from "../../store";

export default function TodoItem({item: {id, name, status}}) {

    const dispatch = useDispatch();

    return (
        <div className={css.wrap}>
            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
            <h3 className={status?css.text:''}>{name}</h3>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>
        </div>
    );
}