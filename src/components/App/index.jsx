import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

function App() {
  const [text, setText] = useState('');

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="page">
      <section className="md-editor__container">
        <textarea
          className="md-editor__area"
          onChange={handlerChangeText}
          value={text}
          placeholder="Введите текст"
        />
        <ReactMarkdown
          className="md-editor__preview"
          source={text}
        />
      </section>
    </div>
  );
}

export default App;
