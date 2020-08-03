/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { compose } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
function PrivateRoute(props) {
  const { component: InnerComponent, layout: Layout, ...rest } = props;
  const { location } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return (
            <Layout title={props.title}>
              <InnerComponent {...props} />
            </Layout>
          );
        }
        return (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};

export default compose(withRouter)(PrivateRoute);
