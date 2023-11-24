import React from "react";

function RecipeIngredients({ extendedIngredients }) {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {/* only renders when the system has already received extendedIngredients and inside it has contents */}
                {extendedIngredients && extendedIngredients.length > 0 ? (
                    extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name}</li>
                    ))
                ) : (
                    <p>No ingredients available.</p>
                )}
            </ul>
        </div>
    );
}

export default RecipeIngredients;
