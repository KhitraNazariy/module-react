import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

export default function App() {

    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState({});

    const update = car => {
        setTrigger(car)
    }

    return (
        <div>
            <Form update={update} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={update} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}