import { useState } from "react"

function NewPostForm() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = { title, content: text }
        fetch('/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        }).then(() => {
            console.log("new post")
        })
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label className="text-lg, font-normal">Nadaj tytuł: </label>
            <input type="text" className="font-light" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div>
            <label className="text-lg, font-normal">Napisz coś...</label>
            <textarea rows="10" cols="53" value={text} onChange={(event) => setText(event.target.value)}></textarea>
        </div>
        <button type="submit">Zapisz</button>
    </form>
}

export default NewPostForm