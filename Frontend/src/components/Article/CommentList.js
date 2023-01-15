const CommentList = (comments) => {
    const commentList = comments.map(comment => <li key={comment.id}>{comment.content}</li>)

    return <ul>{commentList}</ul>
}

export default CommentList