export default function Photo({photo}) {

    const {id, title, thumbnailUrl} = photo;

    return (
        <div>
            <hr/>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
}