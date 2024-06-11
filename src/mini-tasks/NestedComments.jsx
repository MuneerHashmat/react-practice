import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment";

const NestedComments = () => {
  const [comments, setComments] = useState([]);
  const [currComment, setCurrComment] = useState("");

  const addComment = (content, parentId = null, depth = 0) => {
    const newComment = {
      id: uuidv4(),
      content,
      replies: [],
      depth,
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(addNestedComment(comments, parentId, newComment));
    }
  };

  const addNestedComment = (comments, parentId, newComment) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newComment],
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addNestedComment(comment.replies, parentId, newComment),
        };
      }
      return comment;
    });
  };

  const deleteComment = (commentId) => {
    setComments(removeNestedComment(comments, commentId));
  };

  const removeNestedComment = (comments, commentId) => {
    return comments
      .filter((comment) => comment.id !== commentId)
      .map((comment) => {
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: removeNestedComment(comment.replies, commentId),
          };
        }
        return comment;
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addComment(currComment);
    setCurrComment("");
  };

  return (
    <div>
      <div className="mt-10 ml-4">
        <form onSubmit={handleOnSubmit} className="flex gap-2">
          <input
            type="text"
            required
            value={currComment}
            onChange={(e) => setCurrComment(e.target.value)}
            className="w-[400px] outline-none border-2 border-gray-400 rounded-md p-1 text-xl"
          />
          <button className="bg-blue-400 rounded-md py-1 px-4">ADD</button>
        </form>
      </div>

      <div className="mt-5 flex flex-col gap-6">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default NestedComments;
