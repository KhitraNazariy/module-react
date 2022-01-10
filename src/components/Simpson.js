export default function Simpson({name, surname, age, info, photo}) {
    return (
        <div>
            <h1>{name} {surname}, age - {age}</h1>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
}