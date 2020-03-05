import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="w-full text-center border-t border-grey p-4 pin-b">
        Miami, Fl{' '}
        <span role="img" aria-labelledby="palm tree">
          🌴
        </span>{' '}
        © {new Date().getFullYear()}
      </footer>
    );
  }
}
