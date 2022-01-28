import {useReducer} from "react";

import css from "./Form.module.css"
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (action.target === 'cat') {
                return {...state, cats: [...state.cats, action.payload]}
            } else if (action.target === 'dog') {
                return {...state, dogs: [...state.dogs, action.payload]}
            } else return state
        case 'delete':
            if (action.target === 'cat') {
                return {...state, cats: [...state.cats.filter(cat => cat.id !== action.payload.id)]}
            } else if (action.target === 'dog') {
                return {...state, dogs: [...state.dogs.filter(dog => dog.id !== action.payload.id)]}
            }
    }
}

export default function Form() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const submitCat = (e) => {
        e.preventDefault();
        const newCat = e.target.cat.value;
        dispatch({type: 'add', target: 'cat', payload: {name: newCat, id: new Date().getTime()}});
    }

    const submitDog = (e) => {
        e.preventDefault();
        const newDog = e.target.dog.value;
        dispatch({type: 'add', target: 'dog', payload: {name: newDog, id: new Date().getTime()}});
    }

    return (
        <div>
            <div className={css.wrap}>
                <div>
                    <form onSubmit={submitCat}>
                        <label>Add Cat<input type="text" name={'cat'}/></label>
                        <button>Save</button>
                    </form>
                </div>
                <div>
                    <form onSubmit={submitDog}>
                        <label>Add Dog<input type="text" name={'dog'}/></label>
                        <button>Save</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className={css.wrapComponents}>
                <div>{state.cats.map(cat => <Cats key={cat.id} cat={cat} dispatch={dispatch}/>)}</div>
                <div>{state.dogs.map(dog => <Dogs key={dog.id} dog={dog} dispatch={dispatch}/>)}</div>
            </div>
        </div>
    );
}