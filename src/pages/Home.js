import React, { Fragment } from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';

const Home = () => {
  return <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards />
  </ Fragment>;
};

export default Home;
