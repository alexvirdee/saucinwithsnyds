import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommunityPostComment } from '../../actions/communitypost';

const CommunityPostForm = ({ postId, addCommunityPostComment }) => {
  const [text, setText] = useState("")

  return (
    <div className="community-comment-form container mx-auto">
      <form
        className=""
        onSubmit={e => {
          e.preventDefault();
          addCommunityPostComment(postId, { text });
          setText('');
        }}
      >
        <div className="box__title bg-indigo-500 px-3 py-2 border-b">
          <h3 className="text-sm text-white font-medium">Leave a Comment</h3>
        </div>
        <textarea
          className="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-gray-100"
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Reply to post..."
          required
        >
          Comment...
        </textarea>
        <input className="mb-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded mt-2 border-b-4 rounded" type="submit" value="submit" />
      </form>
    </div>
  );
};

CommunityPostForm.propTypes = {
  addCommunityPostComment: PropTypes.func.isRequired
};

export default connect(null, { addCommunityPostComment })(CommunityPostForm);
