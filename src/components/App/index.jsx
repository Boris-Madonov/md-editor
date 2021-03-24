import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

function App() {
  return (
    <div className="page">
      <section className="md-editor__container">
        <textarea className="md-editor__area" />
        <ReactMarkdown className="md-editor__preview" />
      </section>
    </div>
  );
}

export default App;
