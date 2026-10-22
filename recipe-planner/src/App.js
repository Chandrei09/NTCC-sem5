import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// ---------------------------------------------------------
// INJECT GOOGLE FONTS & STYLES INTO DOCUMENT HEAD
// ---------------------------------------------------------
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Patrick+Hand&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// ---------------------------------------------------------
// 1. SIDEBAR COMPONENT
// ---------------------------------------------------------
function Sidebar() {
  return (
    <div style={{ width: '240px', backgroundColor: '#fff', padding: '25px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '2px 0 10px rgba(0,0,0,0.03)', minHeight: '100vh', boxSizing: 'border-box' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: '#fbe2e0', padding: '10px', borderRadius: '12px' }}>🍳</div>
          <div>
            <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>Recipe Finder</h3>
            <span style={{ fontSize: '12px', color: '#d96b6b' }}>♥</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Home</Link>
          <Link to="/recipes" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold' }}>🔍 Recipes</Link>
          <Link to="/planner" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold' }}>📅 Meal Planner</Link>
          <Link to="/shopping" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold' }}>🛒 Shopping List</Link>
          <Link to="/favorites" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold' }}>❤️ Favorites</Link>
          <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px', borderTop: '1px solid #fbe2e0' }}>🔒 Log In / Sign Up</Link>
        </div>
      </div>

      <div style={{ backgroundColor: '#fdf2f2', padding: '15px', borderRadius: '15px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#d96b6b' }}>❤️ 🌸</p>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#5a4545', fontFamily: 'Fredoka, sans-serif' }}>Good food</h4>
        <span style={{ fontSize: '12px', color: '#8c7373' }}>happy mood</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 2. HOME DASHBOARD COMPONENT
// ---------------------------------------------------------
function HomeDashboard() {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: 'Milk', checked: true },
    { id: 2, name: 'Eggs', checked: true },
    { id: 3, name: 'Spinach', checked: true },
    { id: 4, name: 'Tomatoes', checked: false },
    { id: 5, name: 'Onions', checked: false },
  ]);

  const toggleShoppingItem = (id) => {
    setShoppingItems(shoppingItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const weeklyMeals = {
    Breakfast: [
      { name: 'Berry Yogurt Bowl', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80' },
      { name: 'Avocado Toast', img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=300&q=80' },
      { name: 'Oats with Fruits', img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=300&q=80' },
      { name: 'Smoothie Bowl', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=300&q=80' },
      { name: 'Scrambled Eggs & Toast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80' },
      { name: 'Fruit Salad', img: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=300&q=80' },
      { name: 'Pancakes', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=300&q=80' },
    ],
    Lunch: [
      { name: 'Veggie Sandwich', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80' },
      { name: 'Paneer Butter Masala', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' },
      { name: 'Lemon Rice', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
      { name: 'Pasta Primavera', img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dal & Rice', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80' },
      { name: 'Veg Wrap', img: 'https://images.unsplash.com/photo-1526414903006-2581691c4d08?auto=format&fit=crop&w=300&q=80' },
      { name: 'Quinoa Bowl', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80' },
    ],
    Dinner: [
      { name: 'Vegetable Soup', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dal & Rice', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80' },
      { name: 'Paneer Curry', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80' },
      { name: 'Stir Fry Veggies', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
      { name: 'Tomato Soup', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80' },
      { name: 'Pasta Primavera', img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=300&q=80' },
      { name: 'Vegetable Soup', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80' },
    ]
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', fontFamily: 'Nunito, sans-serif', width: '100%' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '30px 40px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>🍽️ Your Meal Planner</h1>
            <p style={{ margin: '0', color: '#8c7373', fontSize: '14px' }}>♥ Plan your week &nbsp;•&nbsp; Eat well &nbsp;•&nbsp; Feel good ♥</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: '#4a3b3b', fontWeight: 'bold', fontSize: '15px', padding: '8px 16px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Log In</Link>
            <Link to="/signup" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontSize: '15px', padding: '8px 16px', background: '#ee7c85', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Sign Up ♡</Link>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', backgroundColor: '#fff', padding: '10px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              style={{
                flex: 1,
                padding: '12px 0',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: selectedDay === day ? '#ee7c85' : 'transparent',
                color: selectedDay === day ? '#fff' : '#8c7373',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Fredoka, sans-serif'
              }}
            >
              {day}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373' }}>Meals Planned</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '32px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>12</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', fontSize: '20px' }}>🍲</div>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373' }}>Saved Recipes</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '32px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>8</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', fontSize: '20px' }}>📖</div>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373' }}>Shopping List</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '26px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>14 items</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', fontSize: '20px' }}>🛒</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>📅 Weekly Meal Plan</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: '10px', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold', color: '#8c7373', fontSize: '13px' }}>Meal</div>
              {days.map(d => (
                <div key={d} style={{ textAlign: 'center', fontWeight: 'bold', color: '#8c7373', fontSize: '13px' }}>{d}</div>
              ))}

              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px' }}>☀️ Breakfast</div>
              {weeklyMeals.Breakfast.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '9px', color: '#5a4545', marginTop: '4px' }}>{meal.name}</div>
                </div>
              ))}

              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px', marginTop: '10px' }}>🥗 Lunch</div>
              {weeklyMeals.Lunch.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center', marginTop: '10px' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '9px', color: '#5a4545', marginTop: '4px' }}>{meal.name}</div>
                </div>
              ))}

              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px', marginTop: '10px' }}>🌙 Dinner</div>
              {weeklyMeals.Dinner.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center', marginTop: '10px' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '9px', color: '#5a4545', marginTop: '4px' }}>{meal.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>🍃 Today’s Nutrition</h3>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '4px' }}>
                  <span>🥚 Protein</span><span>68%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '68%', height: '100%', backgroundColor: '#ee7c85' }}></div>
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '4px' }}>
                  <span>🍞 Carbs</span><span>52%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '52%', height: '100%', backgroundColor: '#ee7c85' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '4px' }}>
                  <span>🥦 Vegetables</span><span>76%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '76%', height: '100%', backgroundColor: '#ee7c85' }}></div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>🛒 Shopping List</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                {shoppingItems.map(item => (
                  <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: item.checked ? '#b0a0a0' : '#4a3b3b', textDecoration: item.checked ? 'line-through' : 'none', cursor: 'pointer' }}>
                    <input type="checkbox" checked={item.checked} onChange={() => toggleShoppingItem(item.id)} style={{ accentColor: '#ee7c85' }} />
                    {item.name}
                  </label>
                ))}
              </div>
              <Link to="/shopping">
                <button style={{ width: '100%', padding: '10px', backgroundColor: '#ee7c85', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Fredoka, sans-serif' }}>🛒 View Full List</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 3. RECIPE FINDER COMPONENT
// ---------------------------------------------------------
function RecipeFinder() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  const searchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals || []); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', width: '100%', fontFamily: 'Nunito, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '30px 40px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#4a3b3b', fontSize: '28px', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>🔍 Live Recipe Finder</h1>
          <Link to="/home" style={{ textDecoration: 'none', backgroundColor: '#ee7c85', color: '#fff', padding: '10px 20px', borderRadius: '14px', fontWeight: 'bold', fontFamily: 'Fredoka, sans-serif' }}>&larr; Back to Dashboard</Link>
        </div>

        <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', display: 'flex', gap: '15px', maxWidth: '800px', margin: '0 auto 40px auto', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
          <input 
              type="text" 
              placeholder="Type an ingredient (e.g., paneer, chicken, pasta)..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ flex: 1, padding: '14px 20px', borderRadius: '14px', border: '1px solid #f9d5d8', background: '#f9f3f3', outline: 'none', fontSize: '15px' }}
          />
          <button onClick={searchRecipes} style={{ padding: '0 30px', backgroundColor: '#ee7c85', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', fontFamily: 'Fredoka, sans-serif' }}>Search</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} style={{ background: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '14px', marginBottom: '15px' }} />
                <h3 style={{ color: '#4a3b3b', fontSize: '18px', margin: '0 0 15px 0', textAlign: 'center', fontFamily: 'Fredoka, sans-serif' }}>{recipe.strMeal}</h3>
              </div>
              <button onClick={() => setSelectedRecipe(recipe)} style={{ width: '100%', padding: '12px', backgroundColor: '#fbe2e0', color: '#d96b6b', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Fredoka, sans-serif' }}>View Recipe ♡</button>
            </div>
          ))}
        </div>

        {selectedRecipe && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
            <div style={{ background: '#fff', maxWidth: '650px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '30px', borderRadius: '20px' }}>
              <h2 style={{ color: '#4a3b3b', marginTop: 0, fontFamily: 'Fredoka, sans-serif' }}>{selectedRecipe.strMeal}</h2>
              <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '14px', marginBottom: '15px' }} />
              <h4 style={{ color: '#4a3b3b', marginBottom: '8px', fontFamily: 'Fredoka, sans-serif' }}>Instructions:</h4>
              <p style={{ color: '#5a4545', lineHeight: '1.6', fontSize: '14px' }}>{selectedRecipe.strInstructions}</p>
              <button onClick={() => setSelectedRecipe(null)} style={{ width: '100%', padding: '12px', backgroundColor: '#ee7c85', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', fontFamily: 'Fredoka, sans-serif' }}>Close Recipe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 4. MEAL PLANNER COMPONENT
// ---------------------------------------------------------
function MealPlannerPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', width: '100%', fontFamily: 'Nunito, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1 style={{ color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>📅 Meal Planner Schedule</h1>
        <p style={{ color: '#8c7373' }}>Organize your weekly breakfast, lunch, and dinner effortlessly.</p>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', marginTop: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
          <p style={{ color: '#5a4545' }}>Your full custom meal planner editor is active here. Select recipes from the recipe finder to pin them to any day of the week!</p>
          <Link to="/home"><button style={{ marginTop: '20px', padding: '12px 24px', background: '#ee7c85', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Fredoka, sans-serif' }}>Back to Dashboard</button></Link>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 5. SHOPPING LIST COMPONENT
// ---------------------------------------------------------
function ShoppingListPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', checked: true },
    { id: 2, name: 'Eggs', checked: true },
    { id: 3, name: 'Spinach', checked: true },
    { id: 4, name: 'Tomatoes', checked: false },
    { id: 5, name: 'Onions', checked: false },
  ]);
  const [newItemName, setNewItemName] = useState('');

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    setItems([...items, { id: Date.now(), name: newItemName, checked: false }]);
    setNewItemName('');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', width: '100%', fontFamily: 'Nunito, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', maxWidth: '800px' }}>
        <h1 style={{ color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>🛒 Full Shopping List</h1>
        <p style={{ color: '#8c7373' }}>Everything you need for this week's delicious meals.</p>
        
        <form onSubmit={addItem} style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <input 
            type="text" 
            placeholder="Add new grocery item..." 
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            style={{ flex: 1, padding: '12px 20px', borderRadius: '12px', border: '1px solid #f9d5d8', background: '#fff', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '0 25px', background: '#ee7c85', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Fredoka, sans-serif' }}>Add Item</button>
        </form>

        <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
          {items.map(item => (
            <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 0', borderBottom: '1px solid #fdf2f2', fontSize: '15px', color: item.checked ? '#b0a0a0' : '#4a3b3b', textDecoration: item.checked ? 'line-through' : 'none', cursor: 'pointer' }}>
              <input type="checkbox" checked={item.checked} onChange={() => toggleItem(item.id)} style={{ width: '18px', height: '18px', accentColor: '#ee7c85' }} />
              {item.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 6. FAVORITES COMPONENT
// ---------------------------------------------------------
function FavoritesPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', width: '100%', fontFamily: 'Nunito, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1 style={{ color: '#4a3b3b', fontFamily: 'Fredoka, sans-serif' }}>❤️ Your Favorite Recipes</h1>
        <p style={{ color: '#8c7373' }}>Quick access to your most-loved dishes.</p>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', marginTop: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
          <p style={{ color: '#5a4545' }}>No favorite recipes saved yet! Click "View Recipe ♡" in the Recipe Finder and save your favorites here.</p>
          <Link to="/recipes"><button style={{ marginTop: '20px', padding: '12px 24px', background: '#ee7c85', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Fredoka, sans-serif' }}>Browse Recipes</button></Link>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 7. LOGIN COMPONENT
// ---------------------------------------------------------
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert("Success! " + data.message);
            navigate('/home'); 
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to backend server. Is your Node server running?");
    }
  };

  return (
    <div style={{ backgroundColor: '#fdeceb', minHeight: '100vh', paddingTop: '1px', paddingBottom: '50px', position: 'relative', fontFamily: 'Nunito, sans-serif', overflowX: 'hidden' }}>
      
      {/* TOP SCALLOPED BORDER */}
      <div style={{ height: '25px', backgroundImage: 'radial-gradient(circle at 15px 0, transparent 15px, #f8d5d8 16px)', backgroundSize: '30px 25px', backgroundRepeat: 'repeat-x', width: '100%', borderTop: '20px solid #f8d5d8' }}></div>

      {/* TOP BACK BUTTON */}
      <div style={{ position: 'absolute', top: '35px', left: '20px', background: '#fff', padding: '8px 15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', zIndex: 10 }}>
        <Link to="/home" style={{ textDecoration: 'none', color: '#ee7c85', fontWeight: 'bold', fontSize: '14px', fontFamily: 'Fredoka, sans-serif' }}>&larr; Back to Dashboard</Link>
      </div>

      {/* FLOATING TEXT DECORATIONS */}
      <div style={{ position: 'absolute', top: '85px', left: '55px', textAlign: 'center', pointerEvents: 'none', transform: 'rotate(-7deg)', width: '135px', zIndex: 3 }}>
          <span style={{ display: 'block', fontSize: '23px', fontWeight: '700', color: '#9d555d', fontFamily: 'Patrick Hand, cursive' }}>Good Food</span>
          <span style={{ display: 'block', fontSize: '27px', fontWeight: '700', color: '#d96f7b', margin: '2px 0', fontFamily: 'Patrick Hand, cursive' }}>= Happy</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#80504f', fontFamily: 'Patrick Hand, cursive' }}>You</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#ed8c99', marginTop: '5px' }}>♡</span>
      </div>

      <div style={{ position: 'absolute', top: '85px', right: '55px', textAlign: 'center', pointerEvents: 'none', transform: 'rotate(7deg)', width: '135px', zIndex: 3 }}>
          <span style={{ display: 'block', fontSize: '23px', fontWeight: '700', color: '#9d555d', fontFamily: 'Patrick Hand, cursive' }}>Good Food</span>
          <span style={{ display: 'block', fontSize: '27px', fontWeight: '700', color: '#d96f7b', margin: '2px 0', fontFamily: 'Patrick Hand, cursive' }}>= Good</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#80504f', fontFamily: 'Patrick Hand, cursive' }}>Mood</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#ed8c99', marginTop: '5px' }}>♡</span>
      </div>

      {/* SIDE DECORATIONS (LARGE SIZES) */}
      <img src="/salad-bowl.png" alt="Salad" style={{ position: 'absolute', left: '45px', top: '280px', width: '165px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/strawberries.png" alt="Strawberries" style={{ position: 'absolute', left: '80px', top: '510px', width: '110px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/recipe-books.png" alt="Books" style={{ position: 'absolute', left: '35px', top: '720px', width: '180px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />

      <img src="/chef-hat-cute.png" alt="Chef Hat" style={{ position: 'absolute', right: '40px', top: '320px', width: '175px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/wooden-spoon.png" alt="Spoon" style={{ position: 'absolute', right: '75px', top: '520px', width: '135px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/notes.png" alt="Notes" style={{ position: 'absolute', right: '40px', top: '680px', width: '155px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/avocado.png" alt="Avocado" style={{ position: 'absolute', right: '65px', top: '850px', width: '125px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />

      {/* MAIN LOGIN WRAPPER */}
      <div style={{ width: '580px', maxWidth: 'calc(100% - 40px)', margin: '35px auto 70px', backgroundColor: 'rgba(255, 255, 255, 0.92)', border: '2px solid #f5c3c8e9', borderRadius: '40px', padding: '40px 45px', textAlign: 'left', boxShadow: '0 10px 25px rgba(241, 137, 149, 0.08)', position: 'relative', zIndex: 10, boxSizing: 'border-box' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <i className="fa-solid fa-hat-chef" style={{ fontSize: '42px', color: '#4a2f2d', display: 'block', marginBottom: '-4px' }}></i>
            <h1 style={{ fontSize: '48px', lineHeight: '1.08', fontWeight: '600', color: '#4a2f2d', fontFamily: 'Fredoka, sans-serif', margin: 0 }}>Recipe Finder<br />& Meal Planner</h1>
            <div style={{ fontSize: '15px', fontWeight: '600', marginTop: '15px', wordSpacing: '2px', color: '#4a2f2d' }}>
                Discover new recipes <span style={{ color: '#f18995', margin: '0 8px', fontSize: '12px' }}>♥</span> Plan your meals <span style={{ color: '#f18995', margin: '0 8px', fontSize: '12px' }}>♥</span> Eat better
            </div>
        </div>

        <div style={{ textAlign: 'center', position: 'relative', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '26px', color: '#4a2f2d', fontFamily: 'Fredoka, sans-serif', display: 'inline-block', margin: 0 }}>Welcome Back</h2>
        </div>
        <p style={{ textAlign: 'center', fontSize: '15px', color: '#4a2f2d', marginBottom: '30px', lineHeight: '1.5', fontWeight: '600' }}>Log in to your account and continue your delicious journey!</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div style={{ position: 'relative' }}>
              <i className="fa-regular fa-user" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
          </div>

          <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
              <span 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999', fontSize: '16px', zIndex: 3 }}
              >
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#f18995', color: 'white', border: 'none', padding: '18px', borderRadius: '30px', fontFamily: 'Fredoka, sans-serif', fontSize: '22px', marginTop: '10px', cursor: 'pointer' }}>Log In ♡</button>

          <div style={{ textAlign: 'center', margin: '15px 0', color: '#7a5e5c', fontSize: '14px', position: 'relative' }}>
            <span style={{ background: '#fff', padding: '0 15px', position: 'relative', zIndex: 2 }}>OR</span>
            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: '#f5c3c8e9', zIndex: 1 }}></div>
          </div>

          <button type="button" style={{ width: '100%', padding: '15px', backgroundColor: '#fff', color: '#4a2f2d', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', fontFamily: 'Nunito, sans-serif' }}>
            <svg viewBox="0 0 48 48" style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Continue with Google
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '15px', color: '#4a2f2d' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#f18995', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Fredoka, sans-serif' }}>Sign Up &rarr;</Link>
          </div>
        </form>
      </div>

      {/* BOTTOM SCALLOPED BORDER */}
      <div style={{ height: '25px', backgroundImage: 'radial-gradient(circle at 15px 25px, transparent 15px, #f8d5d8 16px)', backgroundSize: '30px 25px', backgroundRepeat: 'repeat-x', width: '100%', marginTop: '30px' }}></div>

      <div style={{ backgroundColor: '#f8d5d8', padding: '30px 20px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Find Recipes</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>for every mood</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-regular fa-calendar-check" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Plan Your Meals</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>save time & eat well</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-regular fa-heart" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Track Your Goals</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>healthy & happy you</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-brands fa-envira" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Simple. Tasty. Yours.</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>♥</p>
              </div>
          </div>
      </div>

    </div>
  );
}

// ---------------------------------------------------------
// 8. SIGNUP COMPONENT
// ---------------------------------------------------------
function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert("Oops! Your passwords do not match.");
        return; 
    }
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, password, dob })
        });
        const data = await response.json();
        if (response.ok) {
            alert("Success! " + data.message);
            navigate('/login'); 
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to the database. Is your server running?");
    }
  };

  return (
    <div style={{ backgroundColor: '#fdeceb', minHeight: '100vh', paddingTop: '1px', paddingBottom: '50px', position: 'relative', fontFamily: 'Nunito, sans-serif', overflowX: 'hidden' }}>
      
      {/* TOP SCALLOPED BORDER */}
      <div style={{ height: '25px', backgroundImage: 'radial-gradient(circle at 15px 0, transparent 15px, #f8d5d8 16px)', backgroundSize: '30px 25px', backgroundRepeat: 'repeat-x', width: '100%', borderTop: '20px solid #f8d5d8' }}></div>

      {/* TOP BACK BUTTON */}
      <div style={{ position: 'absolute', top: '35px', left: '20px', background: '#fff', padding: '8px 15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', zIndex: 10 }}>
        <Link to="/home" style={{ textDecoration: 'none', color: '#ee7c85', fontWeight: 'bold', fontSize: '14px', fontFamily: 'Fredoka, sans-serif' }}>&larr; Back to Dashboard</Link>
      </div>

      {/* FLOATING TEXT DECORATIONS */}
      <div style={{ position: 'absolute', top: '85px', left: '55px', textAlign: 'center', pointerEvents: 'none', transform: 'rotate(-7deg)', width: '135px', zIndex: 3 }}>
          <span style={{ display: 'block', fontSize: '23px', fontWeight: '700', color: '#9d555d', fontFamily: 'Patrick Hand, cursive' }}>Good Food</span>
          <span style={{ display: 'block', fontSize: '27px', fontWeight: '700', color: '#d96f7b', margin: '2px 0', fontFamily: 'Patrick Hand, cursive' }}>= Happy</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#80504f', fontFamily: 'Patrick Hand, cursive' }}>You</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#ed8c99', marginTop: '5px' }}>♡</span>
      </div>

      <div style={{ position: 'absolute', top: '85px', right: '55px', textAlign: 'center', pointerEvents: 'none', transform: 'rotate(7deg)', width: '135px', zIndex: 3 }}>
          <span style={{ display: 'block', fontSize: '23px', fontWeight: '700', color: '#9d555d', fontFamily: 'Patrick Hand, cursive' }}>Good Food</span>
          <span style={{ display: 'block', fontSize: '27px', fontWeight: '700', color: '#d96f7b', margin: '2px 0', fontFamily: 'Patrick Hand, cursive' }}>= Good</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#80504f', fontFamily: 'Patrick Hand, cursive' }}>Mood</span>
          <span style={{ display: 'block', fontSize: '20px', color: '#ed8c99', marginTop: '5px' }}>♡</span>
      </div>

      {/* SIDE DECORATIONS (LARGE SIZES) */}
      <img src="/salad-bowl.png" alt="Salad" style={{ position: 'absolute', left: '45px', top: '280px', width: '165px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/strawberries.png" alt="Strawberries" style={{ position: 'absolute', left: '80px', top: '510px', width: '110px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/recipe-books.png" alt="Books" style={{ position: 'absolute', left: '35px', top: '720px', width: '180px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />

      <img src="/chef-hat-cute.png" alt="Chef Hat" style={{ position: 'absolute', right: '40px', top: '320px', width: '175px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/wooden-spoon.png" alt="Spoon" style={{ position: 'absolute', right: '75px', top: '520px', width: '135px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/notes.png" alt="Notes" style={{ position: 'absolute', right: '40px', top: '680px', width: '155px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
      <img src="/avocado.png" alt="Avocado" style={{ position: 'absolute', right: '65px', top: '850px', width: '125px', zIndex: 2, objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />

      {/* MAIN SIGNUP WRAPPER */}
      <div style={{ width: '580px', maxWidth: 'calc(100% - 40px)', margin: '35px auto 70px', backgroundColor: 'rgba(255, 255, 255, 0.92)', border: '2px solid #f5c3c8e9', borderRadius: '40px', padding: '40px 45px', textAlign: 'left', boxShadow: '0 10px 25px rgba(241, 137, 149, 0.08)', position: 'relative', zIndex: 10, boxSizing: 'border-box' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <i className="fa-solid fa-hat-chef" style={{ fontSize: '42px', color: '#4a2f2d', display: 'block', marginBottom: '-4px' }}></i>
            <h1 style={{ fontSize: '48px', lineHeight: '1.08', fontWeight: '600', color: '#4a2f2d', fontFamily: 'Fredoka, sans-serif', margin: 0 }}>Recipe Finder<br />& Meal Planner</h1>
            <div style={{ fontSize: '15px', fontWeight: '600', marginTop: '15px', wordSpacing: '2px', color: '#4a2f2d' }}>
                Discover new recipes <span style={{ color: '#f18995', margin: '0 8px', fontSize: '12px' }}>♥</span> Plan your meals <span style={{ color: '#f18995', margin: '0 8px', fontSize: '12px' }}>♥</span> Eat better
            </div>
        </div>

        <div style={{ textAlign: 'center', position: 'relative', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '26px', color: '#4a2f2d', fontFamily: 'Fredoka, sans-serif', display: 'inline-block', margin: 0 }}>Create Your Account</h2>
        </div>
        <p style={{ textAlign: 'center', fontSize: '15px', color: '#4a2f2d', marginBottom: '30px', lineHeight: '1.5', fontWeight: '600' }}>Join us and start your journey to<br />delicious meals and easy planning!</p>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div style={{ position: 'relative' }}>
              <i className="fa-regular fa-user" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
          </div>

          <div style={{ position: 'relative' }}>
              <i className="fa-regular fa-envelope" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
          </div>

          <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
              <span 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999', fontSize: '16px', zIndex: 3 }}
              >
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
          </div>

          <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#4a2f2d', fontSize: '16px', zIndex: 2 }}></i>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm Password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '100%', padding: '15px 50px 15px 48px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', color: '#4a2f2d', outline: 'none' }}
              />
              <span 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999', fontSize: '16px', zIndex: 3 }}
              >
                {showConfirmPassword ? '👁️‍🗨️' : '👁️'}
              </span>
          </div>

          <div>
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#4a2f2d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-regular fa-calendar"></i> Date of Birth
              </div>
              <input 
                type="date" 
                required 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                style={{ width: '100%', padding: '15px', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontFamily: 'Nunito, sans-serif', fontSize: '15px', backgroundColor: '#fff', boxSizing: 'border-box', outline: 'none', color: '#4a2f2d', cursor: 'pointer' }}
              />
          </div>

          <div style={{ marginTop: '10px' }}>
              <p style={{ fontWeight: '700', marginBottom: '15px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', color: '#4a2f2d' }}>
                  <i className="fa-regular fa-heart"></i> Choose Your Interests
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between' }}>
                  {['Quick Meals', 'Healthy Eating', 'Vegetarian', 'Baking', 'Weight Loss', 'Everything!'].map((interest, idx) => (
                      <label key={idx} style={{ border: '1px solid #f5c3c8e9', backgroundColor: '#fff', padding: '10px 15px', borderRadius: '25px', fontSize: '14px', color: '#4a2f2d', cursor: 'pointer', flexGrow: 1, textAlign: 'center' }}>
                          <input type="checkbox" style={{ display: 'none' }} />
                          {interest}
                      </label>
                  ))}
              </div>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', fontSize: '14px', color: '#4a2f2d' }}>
              <input type="checkbox" id="terms" required style={{ marginRight: '10px', width: '18px', height: '18px', accentColor: '#f18995', cursor: 'pointer' }} />
              <label htmlFor="terms">
                  I agree to the <a href="#" style={{ color: '#f18995', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#f18995', textDecoration: 'underline' }}>Privacy Policy</a>.
              </label>
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#f18995', color: 'white', border: 'none', padding: '18px', borderRadius: '30px', fontFamily: 'Fredoka, sans-serif', fontSize: '22px', marginTop: '10px', cursor: 'pointer' }}>Sign Up ♡</button>

          <div style={{ textAlign: 'center', margin: '15px 0', color: '#7a5e5c', fontSize: '14px', position: 'relative' }}>
            <span style={{ background: '#fff', padding: '0 15px', position: 'relative', zIndex: 2 }}>OR</span>
            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: '#f5c3c8e9', zIndex: 1 }}></div>
          </div>

          <button type="button" style={{ width: '100%', padding: '15px', backgroundColor: '#fff', color: '#4a2f2d', border: '1px solid #f5c3c8e9', borderRadius: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', fontFamily: 'Nunito, sans-serif' }}>
            <svg viewBox="0 0 48 48" style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Sign up with Google
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '15px', color: '#4a2f2d' }}>
            Already have an account? <Link to="/login" style={{ color: '#f18995', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Fredoka, sans-serif' }}>Log In &rarr;</Link>
          </div>
        </form>
      </div>

      {/* BOTTOM SCALLOPED BORDER */}
      <div style={{ height: '25px', backgroundImage: 'radial-gradient(circle at 15px 25px, transparent 15px, #f8d5d8 16px)', backgroundSize: '30px 25px', backgroundRepeat: 'repeat-x', width: '100%', marginTop: '30px' }}></div>

      <div style={{ backgroundColor: '#f8d5d8', padding: '30px 20px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Find Recipes</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>for every mood</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-regular fa-calendar-check" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Plan Your Meals</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>save time & eat well</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-regular fa-heart" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Track Your Goals</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>healthy & happy you</p>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                  <i className="fa-brands fa-envira" style={{ fontSize: '24px', color: '#4a2f2d', marginBottom: '12px' }}></i>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 5px 0', fontFamily: 'Fredoka, sans-serif' }}>Simple. Tasty. Yours.</h4><p style={{ fontSize: '13px', color: '#4a2f2d', margin: 0 }}>♥</p>
              </div>
          </div>
      </div>

    </div>
  );
}

// ---------------------------------------------------------
// 9. MAIN APP ROUTER
// ---------------------------------------------------------
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/recipes" element={<RecipeFinder />} />
        <Route path="/planner" element={<MealPlannerPage />} />
        <Route path="/shopping" element={<ShoppingListPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;