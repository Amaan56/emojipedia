import React, { useState } from 'react';

import './App.css';

const sampleData = {
  '😀': 'Grinny face',
  '😂': 'Face with Tears of Joy',
  '🙃': 'Upside-Down Face',
  '😉': 'Winking Face',
  '🤩': 'Star-Struck',
  '😋': 'Face Savoring Food',
  '😶': 'Face Without Mouth',
  '🙄': 'Face with Rolling Eyes',
  '👶': 'Baby',
  '🧒': 'Child',
  '👦': 'Boy',
  '👧': 'Girl',
};

const sampleDataKeys = Object.keys(sampleData);

function App() {
  const [searchResult, setSearchResult] = useState('');

  const displayResult = (searchItemKey) => {
    const searchItem = sampleData[searchItemKey];
    if (searchItem === undefined) {
      setSearchResult('');
    } else {
      setSearchResult(searchItem);
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Emojipedia</h1>
      </nav>
      <main>
        <section className="search-section">
          <img className="search-image" src="emoji.png" alt="Emoji Logo" />
          <input
            className="search-input"
            placeholder="Enter the emoji to be searched"
            onChange={(e) => displayResult(e.target.value)}
          />
        </section>
        <section className="search-result">{searchResult}</section>
        <section className="emoji-options">
          <p>Emojis supported by us</p>
          {sampleDataKeys.map((sampleData, i) => {
            return (
              <span
                key={i}
                className="emoji-option"
                onClick={(e) => displayResult(sampleData)}
              >
                {sampleData}
              </span>
            );
          })}
        </section>
      </main>
      <footer>
        <p>Made with ❤️ by Amaan</p>
      </footer>
    </div>
  );
}
export default App;
