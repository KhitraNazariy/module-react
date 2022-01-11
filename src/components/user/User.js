import './User.css';

export default function User({user: {id, name, surname, email}}) {
    return (
        <div className={'wrap'}>
            <h2>{id} {name}</h2>
            <p>{surname} - {email}</p>
        </div>
    );
}