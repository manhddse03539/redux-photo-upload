import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from 'layouts/CommonLayout/CommonLayout';
import PhotoList from 'containers/photo/PhotoList';
import AddPhoto from 'containers/photo/AddPhoto';

import withoutAuth from './withoutAuth';

const routes = mount({
  '*': withView(
    <CommonLayout>
      <View />
    </CommonLayout>,
    mount({
      '/': withoutAuth(
        route({
          view: <PhotoList />,
        })
      ),
      '/add': withoutAuth(
        route({
          view: <AddPhoto />,
        })
      ),
    })
  ),
});

export default routes;
