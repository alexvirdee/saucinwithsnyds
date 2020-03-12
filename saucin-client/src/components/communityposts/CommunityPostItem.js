import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CommunityPostItem = ({
  auth,
  post: { _id, title, body, name, avatar, user, likes, comments, date }
}) => (
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    {/* <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img ></img>
    </div> */}
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal sm:flex-1">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{body}</p>
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src={avatar}
          alt="Avatar of Jonathan Reinink"
        ></img>
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{name}</p>
          <p class="text-gray-600">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
);

CommunityPostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommunityPostItem);
