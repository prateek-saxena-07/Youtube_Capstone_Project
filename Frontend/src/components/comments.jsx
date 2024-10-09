import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  postCommentStart,
  postCommentSuccess,
  postCommentFailure,
  deleteCommentStart,
  deleteCommentSuccess,
  deleteCommentFailure,
} from '../utils/commentsSlice';
import { Link } from 'react-router-dom';


const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.comments);
  const [newComment, setNewComment] = useState(''); // State to manage new comment input
const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchComments = async () => {
      dispatch(fetchCommentsStart());
      try {
        const response = await fetch(`http://localhost:5100/api/v1/comments/${videoId}`);
          const data = await response.json();
          console.log(data)
        dispatch(fetchCommentsSuccess(data));
      } catch (err) {
        dispatch(fetchCommentsFailure());
      }
    };
    fetchComments();
  }, [videoId, dispatch]);

  const handlePostComment = async () => {
    dispatch(postCommentStart());
    try {
      const commentData = {
        videoId,
        desc: newComment, // Comment description from input
      };

      const response = await fetch(`http://localhost:5100/api/v1/comments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        credentials:'include',
        body: JSON.stringify(commentData),
      });
      const createdComment = await response.json();
      dispatch(postCommentSuccess(createdComment));
      setNewComment(''); // Clear the input after successful submission
    } catch (err) {
      dispatch(postCommentFailure());
    }
  };

  const handleDeleteComment = async (commentId) => {
    dispatch(deleteCommentStart());
    try {
      await fetch(`http://localhost:5100/api/v1/comments/${commentId}`, {
          method: 'DELETE',
          headers: {
                    'Content-Type': 'application/json',
        },
          credentials:'include',
      });
      dispatch(deleteCommentSuccess(commentId));
    } catch (err) {
      dispatch(deleteCommentFailure());
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading comments.</p>;

  return (
    <div>
      {/* Comments List */}
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.desc}</p>
          {currentUser&&comment.userId === currentUser._id && ( 
  <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
)}
           
        </div>
      ))}

      {/* Add Comment Form */}
      {currentUser ? ( // Only show the input if the user is logged in
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handlePostComment} disabled={!newComment.trim()}>
            Post
          </button>
        </div>
      ) : (
        <p>Please <Link to='/login'>log in</Link> to add comments.</p> // Message for logged-out users
      )}
    </div>
  );
};

export default Comments;
