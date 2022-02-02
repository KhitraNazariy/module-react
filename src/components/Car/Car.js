import {useDispatch} from "react-redux";
import {carToUpdate} from "../../store";

export default function Car({car}) {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
}