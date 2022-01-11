import './Launch.css'

export default function Launch({item}) {
    return (
        <div className={'wrap'}>
            <div>
                <h3>{item.mission_name}</h3>
                <p>{item.launch_year}</p>
            </div>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>
        </div>
    );
}