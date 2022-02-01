import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addTodo} from "../../store";
import css from './Form.module.css'

export default function Form() {

    const {handleSubmit, reset, register} = useForm();

    const {all, completed} = useSelector(state => state['todoReducer']);

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTodo({data:{...data,status:false, id: new Date().getTime()}}));
        reset();
    }

    return (
        <div className={css.wrap}>
            <div className={css.counter}>
                <div>All:{all}</div>
                <div>Completed: {completed}</div>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'todo'} {...register('name')}/>
                <button>Save</button>
            </form>
        </div>
    );
}