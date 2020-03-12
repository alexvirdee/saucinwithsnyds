import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CommunityPostItem = ({
  auth,
  post: { _id, title, body, name, avatar, user, likes, comments, date }
}) => {
  return (
    <Fragment>
      <div className="max-w-sm w-full sm:max-w-full md:max-w-full lg:max-w-full sm:flex-initial lg:flex-initial">
        {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img ></img>
    </div> */}
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{body}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={avatar}
              alt="Avatar of {name}"
            ></img>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{' '}
              </p>
              <div className="flex jsutify-end">
              <div className="delete-btn">
                  <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Delete
                  </button>
            </div>
              </div>
            
              {/* {!auth.loading && user === auth.user._id && (
              
              )} */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CommunityPostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommunityPostItem);
