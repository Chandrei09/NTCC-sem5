import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: 'Milk', checked: true },
    { id: 2, name: 'Eggs', checked: true },
    { id: 3, name: 'Spinach', checked: true },
    { id: 4, name: 'Tomatoes', checked: false },
    { id: 5, name: 'Onions', checked: false },
    { id: 6, name: 'Bell Peppers', checked: false },
    { id: 7, name: 'Whole Wheat Bread', checked: false },
  ]);

  const toggleShoppingItem = (id) => {
    setShoppingItems(shoppingItems.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
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
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdeceb', fontFamily: 'sans-serif' }}>
      
      {/* SIDEBAR */}
      <div style={{ width: '240px', backgroundColor: '#fff', padding: '25px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '2px 0 10px rgba(0,0,0,0.03)' }}>
        <div>
          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <div style={{ backgroundColor: '#fbe2e0', padding: '10px', borderRadius: '12px' }}>
              <i className="fa-solid fa-hat-chef" style={{ color: '#d96b6b', fontSize: '20px' }}></i>
            </div>
            <div>
              <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: '#4a3b3b' }}>Recipe Finder</h3>
              <span style={{ fontSize: '12px', color: '#d96b6b' }}>♥</span>
            </div>
          </div>

          {/* NAV LINKS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', backgroundColor: '#fbe2e0', color: '#d96b6b', textDecoration: 'none', fontWeight: 'bold' }}>
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link to="/recipes" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none' }}>
              <i className="fa-solid fa-magnifying-glass"></i> Recipes
            </Link>
            <Link to="/planner" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none' }}>
              <i className="fa-regular fa-calendar-check"></i> Meal Planner
            </Link>
            <Link to="/shopping" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none' }}>
              <i className="fa-solid fa-basket-shopping"></i> Shopping List
            </Link>
            <Link to="/favorites" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '12px', color: '#8c7373', textDecoration: 'none' }}>
              <i className="fa-regular fa-heart"></i> Favorites
            </Link>
          </div>
        </div>

        {/* BOTTOM MOTIVATIONAL NOTE */}
        <div style={{ backgroundColor: '#fdf2f2', padding: '15px', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#d96b6b' }}>❤️ 🌸</p>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#5a4545' }}>Good food</h4>
          <span style={{ fontSize: '12px', color: '#8c7373' }}>happy mood</span>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, padding: '30px 40px', overflowY: 'auto' }}>
        
        {/* HEADER BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', color: '#4a3b3b', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fa-solid fa-utensils" style={{ color: '#d96b6b' }}></i> Your Meal Planner
            </h1>
            <p style={{ margin: '0', color: '#8c7373', fontSize: '14px' }}>♥ Plan your week &nbsp;•&nbsp; Eat well &nbsp;•&nbsp; Feel good ♥</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', color: '#d96b6b' }}>♥</span>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#e2f0d9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              🥑
            </div>
          </div>
        </div>

        {/* DAY SELECTOR TABS */}
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
                transition: 'all 0.2s'
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* STATS CARDS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373', fontWeight: '500' }}>Meals Planned</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '32px', color: '#4a3b3b' }}>12</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', color: '#d96b6b', fontSize: '20px' }}>
              🍲
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373', fontWeight: '500' }}>Saved Recipes</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '32px', color: '#4a3b3b' }}>8</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', color: '#d96b6b', fontSize: '20px' }}>
              📖
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#8c7373', fontWeight: '500' }}>Shopping List</span>
              <h2 style={{ margin: '5px 0 0 0', fontSize: '26px', color: '#4a3b3b' }}>14 items</h2>
            </div>
            <div style={{ backgroundColor: '#fbe2e0', padding: '15px', borderRadius: '16px', color: '#d96b6b', fontSize: '20px' }}>
              🛒
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: GRID + RIGHT SIDEBAR (NUTRITION & SHOPPING) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
          
          {/* WEEKLY MEAL PLAN TABLE/GRID */}
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#4a3b3b', display: 'flex', alignItems: 'center', gap: '10px' }}>
              📅 Weekly Meal Plan
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', gap: '10px', alignItems: 'center' }}>
              
              {/* Header row */}
              <div style={{ fontWeight: 'bold', color: '#8c7373', fontSize: '13px' }}>Meal</div>
              {days.map(d => (
                <div key={d} style={{ textAlign: 'center', fontWeight: 'bold', color: '#8c7373', fontSize: '13px' }}>{d}</div>
              ))}

              {/* Breakfast Row */}
              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <span>☀️</span> Breakfast
              </div>
              {weeklyMeals.Breakfast.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '10px', color: '#5a4545', marginTop: '4px', fontWeight: '500' }}>{meal.name}</div>
                </div>
              ))}

              {/* Lunch Row */}
              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginTop: '15px' }}>
                <span>🥗</span> Lunch
              </div>
              {weeklyMeals.Lunch.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center', marginTop: '15px' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '10px', color: '#5a4545', marginTop: '4px', fontWeight: '500' }}>{meal.name}</div>
                </div>
              ))}

              {/* Dinner Row */}
              <div style={{ fontWeight: 'bold', color: '#4a3b3b', fontSize: '13px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginTop: '15px' }}>
                <span>🌙</span> Dinner
              </div>
              {weeklyMeals.Dinner.map((meal, idx) => (
                <div key={idx} style={{ textAlign: 'center', marginTop: '15px' }}>
                  <img src={meal.img} alt={meal.name} style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fbe2e0' }} />
                  <div style={{ fontSize: '10px', color: '#5a4545', marginTop: '4px', fontWeight: '500' }}>{meal.name}</div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT COLUMN: NUTRITION & SHOPPING LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* TODAY'S NUTRITION */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#4a3b3b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🍃 Today’s Nutrition
              </h3>

              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '5px' }}>
                  <span>🥚 Protein</span>
                  <span>68%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '68%', height: '100%', backgroundColor: '#ee7c85', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '5px' }}>
                  <span>🍞 Carbs</span>
                  <span>52%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '52%', height: '100%', backgroundColor: '#ee7c85', borderRadius: '4px' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#5a4545', marginBottom: '5px' }}>
                  <span>🥦 Vegetables</span>
                  <span>76%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '76%', height: '100%', backgroundColor: '#ee7c85', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>

            {/* SHOPPING LIST WIDGET */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#4a3b3b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🛒 Shopping List
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {shoppingItems.map(item => (
                  <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: item.checked ? '#b0a0a0' : '#4a3b3b', textDecoration: item.checked ? 'line-through' : 'none', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => toggleShoppingItem(item.id)}
                      style={{ accentColor: '#ee7c85', width: '16px', height: '16px' }} 
                    />
                    {item.name}
                  </label>
                ))}
              </div>

              <button style={{ width: '100%', padding: '12px', backgroundColor: '#ee7c85', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                🛒 View Full List
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;