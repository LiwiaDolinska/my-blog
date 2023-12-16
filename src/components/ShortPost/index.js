function ShortPost({ author, title, text }) {

    return <section className="box-border h-32 w-1000 border-1">
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