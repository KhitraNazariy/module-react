export default function Dogs({dog, dispatch}) {

    const {name, id} = dog;

    return (
        <div>
            {name}
            <button onClick={() => {dispatch({type: 'delete', target: 'dog', payload: id})}}>delete</button>
        </div>
    );
}