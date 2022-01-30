import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Car from "../Car/Car";
import {getAllCars} from "../../store";

export default function Cars() {

    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}