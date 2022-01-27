import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + 1}
        case 'dec':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: action.payload}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload2}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload3}
        default:
            return state;
    }
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, {count: 0, count2: 0, count3: 0});

    return (
        <div>
            <div>
                <div>{state.count}</div>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
            </div>
            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2', payload2: 0})}>RESET</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset3', payload3: 0})}>RESET</button>
            </div>
        </div>
    );
}