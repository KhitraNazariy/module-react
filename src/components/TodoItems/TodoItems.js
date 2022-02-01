import {useSelector} from "react-redux";

import TodoItem from "../TodoItem/TodoItem";


export default function TodoItems() {

    const {todoItems} = useSelector(state => state['todoReducer']);

    return (
        <div>
            {todoItems.map(item => <TodoItem key={item.id} item={item}/>)}
        </div>
    );
}