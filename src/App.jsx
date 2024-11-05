import React from 'react';

const colors = [
  { id: 'Maroon', color: 'maroon' },
  { id: 'Olive', color: 'olive' },
  { id: 'Cyan', color: 'cyan' },
  { id: 'Purple', color: 'purple' },
  { id: 'Yellow', color: 'yellow' },
  { id: 'Gray', color: 'gray' },
  { id: 'Black', color: 'black' },
  { id: 'Chocolate', color: 'Chocolate' },
  { id: 'Magenta', color: 'magenta' },
  { id: 'Blue', color: 'blue' },
  { id: 'Green', color: 'Green' },
  { id: 'Coral', color: 'oral' },
  { id: 'Orange', color: 'orange' },
  { id: 'Red', color: 'red' },
  { id: 'Lime', color: 'lime' },
];

function App() {
  const handleClick = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="all_button">
      <h1>CHOOSE YOUR ACTION COLOR</h1>
      {colors.map((btn) => (
        <button
          key={btn.id}
          id={btn.id}
          className="btn btn-primary"
          style={{ backgroundColor: btn.color, color: btn.color === 'yellow' || btn.color === 'red' ? 'black' : 'white', borderColor: '3px solid black !important', borderRadius: '40px' }}
          onClick={() => handleClick(btn.color)}
        >
          {btn.id}
        </button>
      ))}


    </div>

    
  );
}

export default App;