import './User.css';

export default function User({user:{id, name}, userDetails}) {
    return (
        <div className={'user'}>
            {id} - {name}
            <button className={'user-btn'} onClick={() => userDetails(id)}>GetDatails</button>
        </div>
    );
}