import React, { Fragment } from 'react';
import Spinner from '../../img/spinner.gif';

const spinner = () => (
  <Fragment>
    <img
      src={Spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    ></img>
  </Fragment>
);

export default spinner;
