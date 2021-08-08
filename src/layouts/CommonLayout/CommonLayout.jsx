import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './common.styles';
import Header from 'components/header/Header';

const propTypes = {
  children: PropTypes.element.isRequired,
};
const CommonLayout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);
CommonLayout.propTypes = propTypes;
export default CommonLayout;
