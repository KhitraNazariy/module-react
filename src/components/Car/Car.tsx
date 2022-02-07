import {FC} from "react";

import {ICar} from "../../interfaces";

const Car: FC<{ car: ICar }> = ({car: {id, model, price, year}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
        </div>
    );
};

export default Car;