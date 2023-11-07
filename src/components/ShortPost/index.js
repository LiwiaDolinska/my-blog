function ShortPost({ author, title, text }) {

    return <section>
        <div>
            {`${author.firstName} ${author.lastName}`}
        </div>
        <div>
            {title}
        </div>
        <div>{text[0].slice(0, 150)}...</div>
    </section>

}

export default ShortPost