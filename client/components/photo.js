import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

 class Photo extends Component {
     render() {
         const {post, i, comments} = this.props;

         return (
             <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
                    </Link>

                    <TransitionGroup className="likes-heart" component={null}>
                    <CSSTransition key={post.likes} 
                        classNames="likes-heart"
                        timeout={500}>
                        <span key={post.likes}></span>    
                    </CSSTransition> 
                    </TransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                        <span className="comment-count">
                            <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
             </figure>
         )
     }
 }

 export default Photo;