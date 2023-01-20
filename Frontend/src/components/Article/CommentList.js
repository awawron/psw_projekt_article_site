const CommentList = (comments) => {
    const checkComments = () => {
        if(comments.comments === []) {
            return <div>Loading...</div>
        }
        else {
            const commentList = comments.comments.map(comment => {
                console.log(comment)
                return <li key={comment.id}>{comment.author}</li>
            })

            return <ul>{commentList}</ul>
        }
    }

    return checkComments()
}

export default CommentList