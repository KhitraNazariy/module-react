import {useEffect, useState} from "react";
import Launch from "./components/Launch";

export default function App() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setLaunches(value.filter(item => item.launch_year !== "2020")));
    },[]);
    return (
        <div>
            {
                launches.map(item => <Launch key={item.flight_number} item={item}/>)
            }
        </div>
    );
}