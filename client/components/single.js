import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = (props) => {
    const { postId } = props.match.params;
    const index = props.posts.findIndex((post) => post.code === postId);
    const post = props.posts[index];
    const postComments = props.comments[postId] || [];

    return (
        <div className="single-photo">
            <Photo index={index} post={post} {...props} />
            <Comments postComments={postComments} {...props} />
        </div>
    )
}
export default Single