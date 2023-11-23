import React, { useState } from 'react';
import MyRecipeForm from './MyRecipeForm';
import MyRecipesList from './MyRecipesList';

function MyRecipes() {
    const myRecipesStyle = {
        width: '80%',
        margin: '70px',
        padding: '20px',
        textAlign: 'center',
    };

    const myRecipesHeadingStyle = {
        fontSize: '24px',
        marginBottom: '20px',
    };

    const myRecipeFormStyle = {
        maxWidth: '400px',
        margin: 'auto',
    };


    const [userRecipes, setUserRecipes] = useState([]);

    const handleSaveRecipe = (newRecipe) => {
        // handleSaveRecipe here is triggered with the newRecipe data from MyRecipeForm.
        // setUserRecipes is used to update the state, adding the new recipe to the existing list.
        setUserRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    return (
        <div style={myRecipesStyle}>
            <h1 style={myRecipesHeadingStyle}>Create Your Own Recipe</h1>

            {/* callback function passed as prop to MyRecipeForm */}
            <MyRecipeForm handleSaveRecipe={handleSaveRecipe} style={myRecipeFormStyle} />

            {/* userRecipes and setUserRecipes passed as props to MyRecipesList */}
            <MyRecipesList userRecipes={userRecipes} setUserRecipes={setUserRecipes} />
        </div>
    );
}

export default MyRecipes;
