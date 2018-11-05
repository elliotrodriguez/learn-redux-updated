import React from 'react';
import Photo from './photo';
import Comment from './comments';

const Single = (props) => {

    const index = props.posts.findIndex((post) => post.code === props.match.params.postId);
    const post = props.posts[index];

    return (
        <div className="single-photo">
            <Photo index={index} post={post} {...props} />
            <Comment />
        </div>
    )
}
export default Single