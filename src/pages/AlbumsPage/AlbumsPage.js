import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import Album from "../../components/Album/Album";

export default function AlbumsPage() {

    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getUserAlbums(id).then(value => setAlbums(value));
    }, [id]);

    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
            <Outlet/>
        </div>
    );
}