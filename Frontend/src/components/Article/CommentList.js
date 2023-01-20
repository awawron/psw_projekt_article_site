const CommentList = (comments) => {

    // If there are no comments display the correct text, otherwise return a comment list
    const checkComments = () => {
        if(comments.comments.length < 1) {
            return <div className="comment-list">No comments</div>
        }
        else {
            const commentList = comments.comments.map(comment => {
                console.log(comment)
                return (
                    <li key={comment.id}>
                        <b>{comment.author}</b>
                        <br />
                        {comment.body}
                    </li>
                    )
            })

            return <ul>{commentList}</ul>
        }
    }

    return checkComments()
}

export default CommentList