import React, { useEffect, useState } from 'react';
import Category from '../Category';
import { List, Item } from './styles';

function useCategoriesData () {
  const [categories, setCategories] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch('https://petgram-server-api-five-tau.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setCategories(response);
      });
  }, []);

  return { categories, loading }
}

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false); 
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ?
        <Item key='loading'>
          <Category />
        </Item>
        :
        categories.map(item => (
          <Item key={item.id}>
            <Category {...item} />
          </Item>
        ))
      }
    </List>
  );

  if (loading) {
    return 'Loading...';
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
