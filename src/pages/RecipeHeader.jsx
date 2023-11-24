import React from 'react';

const RecipeHeader = ({ title, image }) => (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={title || 'Recipe Image'} />
    </div>
);

export default RecipeHeader;
