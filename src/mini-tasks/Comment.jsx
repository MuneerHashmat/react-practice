import PropTypes from "prop-types";
import { useState } from "react";

const Comment = ({ comment, addComment, deleteComment }) => {
  const [reply, setReply] = useState("");
  const margin = comment.depth * 20;
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    addComment(reply, comment.id, comment.depth + 1);
    setReply("");
    setShowReply(false);
  };

  return (
    <div>
      <div
        className="w-[800px] px-2 py-2 bg-gray-300 text-xl rounded-md flex flex-col gap-2"
        style={{ marginLeft: `${margin}px` }}
      >
        <p>{comment.content}</p>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowReply(!showReply)} className="text-md">
            {showReply ? "Cancel" : "Reply"}
          </button>
          <button onClick={() => deleteComment(comment.id)} className="text-md">
            Delete
          </button>
        </div>
        {showReply && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="enter reply"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="outline-none text-md"
            />
            <button onClick={handleReply}>ADD</button>
          </div>
        )}
      </div>
      <div className="mt-2">
        {comment.replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comment;
