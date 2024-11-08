import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ViewItems from './components/ViewItems';
import RecipeSuggestions from './components/RecipeSuggestions';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import Notifications from './components/Notifications';
import AddItems from './components/AddItems';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Remove item at the specified index
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-items" element={<AddItems addItem={addItem} />} />
        <Route path="/view-items" element={<ViewItems items={items} deleteItem={deleteItem} />} />
        <Route path="/recipe-suggestions" element={<RecipeSuggestions items={items} />} />
        <Route path="/notifications" element={<Notifications items={items} />} />
        <Route path="/PersonalizedRecommendations" element={<PersonalizedRecommendations items={items} />} />
      </Routes>
    </Router>
  );
};

export default App;
