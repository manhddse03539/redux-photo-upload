import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from './banner.styles';

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: '',
  backgroundUrl: '',
};

function Banner(props) {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <Wrapper style={bannerStyle}>
      <h1 className="title">{title}</h1>
    </Wrapper>
  );
}

export default Banner;
