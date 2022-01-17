import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

export default function Form({update}) {

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator)});

    // const submit = async (car) => {
    //     try {
    //         const newCar = await carService.create(car);
    //         update(newCar);
    //         // console.log(newCar)
    //     } catch (errors) {
    //         setFormError(errors.response.data)
    //     }
    // }

    const submit = (car) => {
        carService.create(car).then(value => update(value)).catch(errors => {
            setFormError(errors.response.data);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>save</button>
            </form>
        </div>
    );
}