import React from 'react';

function MyRecipeCards({ recipe, handleDeleteRecipe }) {

    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';

    // Sends a DELETE request to the Airtable API to delete the recipe with the specific “recipe.id”.  
    // If the delete operation is successful, it calls the handleDeleteRecipe function passed as a prop, 
    // passing recipe.id here back into MyRecipesList as "recipeId".
    const handleDeleteClick = async (evt) => {

        evt.preventDefault();

        try {
            const response = await fetch(`https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes/${recipe.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                handleDeleteRecipe(recipe.id);
            }

        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    // Renders a card for each recipe with its name and a "DELETE" button.
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h3>{recipe.fields['Recipe Name']}</h3>

            <button onClick={handleDeleteClick}>DELETE</button>

        </div>
    );
};

export default MyRecipeCards;
