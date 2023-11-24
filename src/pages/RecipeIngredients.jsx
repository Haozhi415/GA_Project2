import React from "react";

function RecipeIngredients({ extendedIngredients }) {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeIngredients;
