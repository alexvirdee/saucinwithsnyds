import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { removeCommunityPostComment } from '../../actions/communitypost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CommunityPostCommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    removeCommunityPostComment
}) => {
    return (
        <div className="comment mt-2 flex space-between border border-2 p-3">
            <div>
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={avatar}
              alt="Avatar of {name}"
            ></img>
             <p className="text-gray-500">{name}</p>
             <p className="text-gray-500"><Moment format="MM/DD/YYYY">{date}</Moment></p>
             <div className="delete-comment">
       {!auth.loading && user === auth.user.data._id && (
               <button onClick={e => removeCommunityPostComment(postId, _id)} type="button" className="mt-2 cursor-pointer bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-4 rounded border-b-4 rounded">
               <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> Delete 
              </button>
       )}
    </div>
           </div>    
    <div className="pl-12 text-md">
        {text}
    </div>
        </div>
    )
}

CommunityPostCommentItem.propTypes = {
    postId: PropTypes.string,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    removeCommunityPostComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { removeCommunityPostComment })(CommunityPostCommentItem);
