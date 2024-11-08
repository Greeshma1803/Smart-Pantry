const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/recipes', async (req, res) => {
  const ingredients = req.query.query;
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients,
          number: 5,
          apiKey: API_KEY
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Spoonacular API:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
