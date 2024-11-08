import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import axios from 'axios';
import './RecipeSuggestions.css';

const RecipeSuggestions = ({ items }) => {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = '29b82adb6fe54a5ca2b07062274faf35'; // Your Spoonacular API key

  useEffect(() => {
    const fetchRecipes = async () => {
      // Filter items nearing expiration
      const perishableItems = items.filter(item => {
        const today = new Date();
        const expDate = new Date(item.expirationDate);
        const timeDiff = expDate - today;
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return dayDiff <= 7; // Items expiring in 7 days or less
      });

      if (perishableItems.length > 0) {
        // Get ingredients from the perishable items
        const ingredients = perishableItems.map(item => item.name).join(',');

        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`);
          const recipeData = response.data.map(recipe => ({
            title: recipe.title,
            image: recipe.image,
            link: `https://spoonacular.com/recipes/${recipe.title.replace(/ /g, '-')}-${recipe.id}`, // Generate a link to the recipe
          }));
          setRecipes(recipeData);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      } else {
        setRecipes([]); // No recipes if no perishable items
      }
    };

    fetchRecipes();
  }, [items, API_KEY]);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Recipe Suggestions
      </Typography>
      <Grid container spacing={3}>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="recipe-card">
                <CardMedia
                  component="img"
                  alt={recipe.title}
                  height="140"
                  image={recipe.image}
                />
                <CardContent>
                  <Typography variant="h6">{recipe.title}</Typography>
                  <Button href={recipe.link} target="_blank" variant="contained" color="primary">
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No recipe suggestions available based on your items.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default RecipeSuggestions;
