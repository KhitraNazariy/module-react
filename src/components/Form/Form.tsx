import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";

const Form: FC = () => {

    const {handleSubmit, setValue, register, reset} = useForm<ICar>();

    const submit: SubmitHandler<ICar> = (car) => {
        console.log(car);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;