import React from 'react';
import Wrapper from './AddPhoto.styles';
import Banner from 'components/banner/banner';
import AddPhotoBanner from 'images/banner-02.jpg';
import PhotoForm from './PhotoForm';

function AddPhoto() {
  return (
    <Wrapper>
      <Banner
        title="Pick your amazing photo 😎"
        backgroundUrl={AddPhotoBanner}
      />
      <div className="d-flex justify-content-center mt-3 add-content">
        <PhotoForm />
      </div>
    </Wrapper>
  );
}

export default AddPhoto;
