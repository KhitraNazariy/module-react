import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

export default function Cars({trigger}) {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        carService.getAll().then(value => setCars([...value]));
    },[trigger]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}