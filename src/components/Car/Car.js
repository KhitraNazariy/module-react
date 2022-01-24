import {carService} from "../../services/car.service";

export default function Car({car, update, setCarForUpdate}) {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        update({});
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar()}>delete</button>
            <hr/>
        </div>
    );
}