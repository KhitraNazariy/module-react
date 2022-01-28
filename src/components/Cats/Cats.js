export default function Cats({cat, dispatch}) {

    const {name, id} = cat

    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'delete', target: 'cat', payload: {id}})}>delete</button>
        </div>
    );
}