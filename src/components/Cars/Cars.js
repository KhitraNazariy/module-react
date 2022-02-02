import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllCars} from "../../store";
import Car from "../Car/Car";

export default function Cars() {

    const {cars} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}