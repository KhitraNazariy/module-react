import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import PostComments from "../../components/PostComments/PostComments";

export default function PostCommentsPage() {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getPostComments(id).then(value => setComments(value));
    },[]);

    return (
        <div>
            {comments &&
                comments.map(comment => <PostComments key={comment.id} comment={comment}/>)
            }
        </div>
    );
}