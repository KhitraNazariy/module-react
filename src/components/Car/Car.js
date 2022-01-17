export default function Car({car, carDelete}) {

    const {id, model, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>
                <button onClick={()=> carDelete(id)}>delete</button>
            </div>
            <hr/>
        </div>
    );
}