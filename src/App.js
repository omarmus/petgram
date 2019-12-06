import React from 'react';
import ListOfCategories from './components/ListOfCategories';
import GlobalStyle from './styles/GlobalStyles';
import ListOfPhotoCards from './container/ListOfPhotoCards';
import Logo from './components/Logo';
import PhotoCardWithQuery from './container/PhotoCardWithQuery';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <main>
      <GlobalStyle />
      <Logo />
      {
        detailId ?
        <PhotoCardWithQuery id={detailId} />
        :
        <>
          <ListOfCategories />
          {/* <ListOfPhotoCards categoryId={1} /> */}
        </>
      }
    </main>
  );
};

export default App;
