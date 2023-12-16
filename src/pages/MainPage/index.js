import { useEffect, useState } from "react"
import ShortPost from "../../components/ShortPost"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function MainPage() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState(null)
    useEffect(() => {
        fetch("/posts")
            .then(response => response.json())
            .then(data => setPosts(data))

    }, [])

    return <>
        <main>
            <h1 className="text-lg">Mój blog</h1>
            <button onClick={() => navigate("/new-post")}>Napisz post</button>

            {posts === null ? "loading" : posts.map((post) => <Link to={`/post/${post.id}`}><ShortPost author={post.author} title={post.title} text={post.text} /></Link>)}
        </main>
    </>
}

export default MainPage