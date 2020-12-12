import React, { useState } from 'react';

import './App.css';

const sampleData = {
  '😀': 'Grinny face',
  '😂': 'Face with Tears of Joy',
  '🙃': 'Upside-Down Face',
  '😉': 'Winking Face',
};

const sampleDataKeys = Object.keys(sampleData);

function App() {
  const [searchResult, setSearchResult] = useState('');

  const displayResult = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <div className="App">
      <nav>
        <h1>Emojipedia</h1>
      </nav>
      <main>
        <section className="search-section">
          <img className="search-image" src="emoji.png" />
          <input
            className="search-input"
            placeholder="Enter the emoji to be searched"
            onChange={displayResult}
          />
        </section>
        <section className="search-result">{searchResult}</section>
        <section className="emoji-options">
          {sampleDataKeys.map((sampleData, i) => {
            return (
              <span key={i} className="emoji-option">
                {sampleData}
              </span>
            );
          })}
        </section>
      </main>
    </div>
  );
}
export default App;
