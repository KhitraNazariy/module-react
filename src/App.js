import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

export default function App() {
    
    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        setTrigger(data);
    }
    
    return (
        <div>
            <Form update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
}