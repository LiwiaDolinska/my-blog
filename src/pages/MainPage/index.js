import { useEffect, useState } from "react"
import ShortPost from "../../components/ShortPost"

function MainPage() {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        fetch("/posts")
            .then(response => response.json())
            .then(data => setPosts(data))

    }, [])

    return <>
        <p>Strona główna</p>
        <main>

            {posts === null ? "loading" : posts.map((post) => <ShortPost author={post.author} title={post.title} text={post.text} />)}

        </main>
    </>
}

export default MainPage