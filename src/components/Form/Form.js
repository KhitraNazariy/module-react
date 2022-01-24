import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";

import {carService} from "../../services/car.service";
import {useEffect, useState} from "react";

export default function Form({update, carForUpdate:{id, model, price, year}}) {
    
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState:{errors}, setValue
    } = useForm({resolver:joiResolver(CarValidator), mode: "onTouched"});

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])

    const submit = async (car) => {
        try {
            let newCar = {};

            if (id) {
                newCar = await carService.updateById(id, car);
            } else {
                newCar = carService.create(car);
            }
            update(newCar);

        }catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="text" {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id?'Update': 'Create'}</button>
            </form>
        </div>
    );
}