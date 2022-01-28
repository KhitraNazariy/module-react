export default function Cats({cat}) {

    const {name} = cat

    return (
        <div>
            {name}
            <button>delete</button>
        </div>
    );
}