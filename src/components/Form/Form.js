import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {updateCarById} from "../../store";

export default function Form() {

    const {handleSubmit, setValue, reset, register} = useForm();

    const {carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Update</button>
            </form>
        </div>
    );
}