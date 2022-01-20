import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {photoService} from "../../services/photo.service";
import Photo from "../../components/Photo/Photo";

export default function PhotosPage() {

    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getById(albumId).then(value => setPhotos(value));
    }, [albumId]);

    return (
        <div>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
}