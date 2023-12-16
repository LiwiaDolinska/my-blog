import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner'

function Post() {
    const [singlePost, setSinglePost] = useState(null)
    const params = useParams();
    useEffect(() => {
        fetch(`/posts/${params.postId}`)
            .then(response => response.json())
            .then(data => {
                setSinglePost(data)
            })

    }, [])
    if (singlePost === null) {
        return <ColorRing />
    }
    const data = new Date(singlePost.createdAt)
    const localDate = data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();

    return <>
        <p>{singlePost.author.firstName}</p>
        {singlePost.text.map((paragraph) => <p>{paragraph}</p>)}
        <p>{localDate}</p>

    </>
}

export default Post