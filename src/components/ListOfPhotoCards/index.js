import React from 'react';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCards = ({ data: { photos = [] } } = {}) => {
  if (!data) {
    return null;
  }
  return (
    <ul>
      {
        photos.map(item => (
          <li key={item.id}>
            <PhotoCard 
              id={item.id} 
              {...item}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default ListOfPhotoCards;
