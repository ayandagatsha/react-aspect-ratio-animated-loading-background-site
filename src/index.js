import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <div id="container" className="portal">
         hello
        </div>
      );
    }
  }
  
  
  // ========================================
  
  ReactDOM.render(
    <Square />,
    document.getElementById('root')
  );
  