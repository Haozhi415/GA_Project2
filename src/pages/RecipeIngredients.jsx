import React from "react";

function RecipeIngredients({ extendedIngredients }) {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {extendedIngredients && extendedIngredients.length > 0 ? (
                    extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.name}</li>
                    ))
                ) : (
                    <p>No ingredients available.</p>
                )}
            </ul>
        </div>
    );
}

export default RecipeIngredients;
