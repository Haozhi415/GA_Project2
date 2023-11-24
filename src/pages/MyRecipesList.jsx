import React, { useEffect } from 'react';
import MyRecipeCards from './MyRecipeCards';
import { Link } from 'react-router-dom';

function MyRecipesList({ userRecipes, setUserRecipes }) {
    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';
    const baseUrl = `https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes`;

    // Fetch user recipes from the Airtable API when the component mounts. 
    // The fetched data is then stored in the userRecipes state.
    useEffect(() => {

        const fetchUserRecipes = async () => {
            try {
                const response = await fetch(baseUrl, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setUserRecipes(data.records);
                }
            } catch (error) {
                // Handle fetch error
                console.error('Fetch error:', error);
            }
        };

        fetchUserRecipes();
    }, []);

    const handleDeleteRecipe = (recipeId) => {
        // Performs the delete operation in MyRecipeCard DELETE button and update the state of userRecipes in the MyRecipes.jsx
        // Once the state of userRecipes is updated in MyRecipes, it is passed as prop into this component again to be rendered as a list.
        const updatedRecipes = userRecipes.filter((recipe) => recipe.id !== recipeId);
        setUserRecipes(updatedRecipes);
    };

    // Maps over the userRecipes array and renders a MyRecipeCards component for each recipe.
    // Passes the recipe data and the handleDeleteRecipe function as props to each MyRecipeCards component.
    // Each MyRecipeCards component is wrapped in a Link component, when a user clicks on a recipe card in 
    // here, the URL is updated to include the id parameter for that specific recipe and then triggers the MyRecipeDetails route.
    return (
        <div>
            <h2>My Recipes List</h2>
            {userRecipes.map((recipe) => (
                <Link to={`/myrecipedetails/${recipe.id}`} key={recipe.id}>

                    <MyRecipeCards key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe} />

                </Link>
            ))}
        </div>
    );
}

export default MyRecipesList;
