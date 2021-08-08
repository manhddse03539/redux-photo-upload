/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import Button from 'components/button/Button';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constant';
import Wrapper from './PhotoForm.styles';
import Colorful from 'images/colorfull.jpg';
import { Link } from 'react-navi';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <Wrapper>
      <Form>
        <FormGroup>
          <Label for="titleId">Title</Label>
          <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Category</Label>
          <Select
            id="categoryId"
            name="categoryId"
            placeholder="What's your photo category?"
            options={PHOTO_CATEGORY_OPTIONS}
          />
        </FormGroup>

        <FormGroup>
          <Label for="photo">Photo</Label>
          <div>
            <Button classname="btn btn-outline-primary" label="Random photo" />
          </div>
          <div>
            <img width="200px" height="200px" src={Colorful} alt="colorful" />
          </div>
        </FormGroup>

        <FormGroup>
          <Button className="btn btn-success" label="Add to album" />
          <Link href="/" className="btn btn-danger cancel-btn">
            Cancel
          </Link>
        </FormGroup>
      </Form>
    </Wrapper>
  );
}

export default PhotoForm;
