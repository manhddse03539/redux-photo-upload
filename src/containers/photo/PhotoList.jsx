import React from 'react';
import Wrapper from './PhotoList.styles';
import Banner from 'components/banner/banner';
import PhotoListBanner from 'images/banner-01.jpg';
import { Link } from 'react-navi';

function PhotoList() {
  return (
    <Wrapper>
      <Banner title="Your awesome photos 🎉" backgroundUrl={PhotoListBanner} />
      <div className="d-flex justify-content-center mt-3 list-content">
        <Link href="/add" className="btn btn-primary add-btn">
          Add new photo
        </Link>
      </div>
    </Wrapper>
  );
}

export default PhotoList;
