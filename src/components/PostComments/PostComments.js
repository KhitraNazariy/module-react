export default function PostComments({comment}) {

    const {id, name} = comment;

    return (
        <div>
            {id}) {name}
        </div>
    );
}