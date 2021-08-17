/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'components/button/Button';
import { FormGroup } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constant';
import Wrapper from './PhotoForm.styles';
import { Link } from 'react-navi';
import { Formik, Form, FastField } from 'formik';
import InputField from 'components/inputField/InputField';
import SelectField from 'components/selectField/SelectField';
import RanDomPhotoField from 'components/randomPhoto/RandomPhotoField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <Wrapper>
      <Formik
        initialValues={{ title: '', categoryId: 0, photo: '' }}
        onSubmit={(values) => console.log('val:', values)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          return (
            <Form>
              <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Wow nature ..."
              />
              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
              <FastField
                name="photo"
                component={RanDomPhotoField}
                label="Photo"
              />
              <FormGroup className="mt-3">
                <Button
                  type="submit"
                  className="btn btn-success"
                  label="Add to album"
                />
                <Link href="/" className="btn btn-danger cancel-btn mx-3">
                  Cancel
                </Link>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
}

export default PhotoForm;
