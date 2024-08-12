import { useState } from "react";

const App = () => {
  const [text, setText] = useState('');
  const [out, setOut] = useState('');
  const [num, setNum] = useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  }
 
  const onSubmit = (e) => {
    let a = text.trim().split(/\s+/);
    setOut(a.length);
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f4f4f4', 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '20px auto', 
      borderRadius: '10px', 
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '20px' 
      }}>Word Counter</h2>
      
      <textarea
        type="text" 
        onChange={handleChangeText} 
        value={text} 
        placeholder="Enter the text" 
        rows={10}
        cols={100}
        style={{ 
          width: '100%', 
          padding: '10px', 
          fontSize: '16px',
          fontFamily: 'Arial, sans serif', 
          borderRadius: '5px', 
          border: '1px solid #ccc', 
          marginBottom: '10px',
          boxSizing: 'border-box'
        }}
      />
      
      <input 
        type="number" 
        value={num} 
        onChange={handleChangeNum} 
        placeholder="Enter the number of words" 
        style={{ 
          width: '100%', 
          padding: '10px', 
          fontSize: '16px', 
          borderRadius: '5px', 
          border: '1px solid #ccc', 
          marginBottom: '10px',
          boxSizing: 'border-box'
        }}
      />
      
      <button 
        onClick={onSubmit} 
        style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          fontSize: '16px', 
          borderRadius: '5px', 
          border: 'none',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        Submit
      </button>
      
      <textarea 
        value={out} 
        readOnly 
        style={{ 
          width: '100%', 
          padding: '10px', 
          fontSize: '16px', 
          borderRadius: '5px', 
          border: '1px solid #ccc', 
          boxSizing: 'border-box',
          height: '50px',
          marginBottom: '10px'
        }}
      />
      
      {out > num && num !== '' && (
        <p style={{ 
          color: 'red', 
          fontSize: '14px', 
          textAlign: 'center' 
        }}>
          Your sentence has more than {num} words
        </p>
      )}
    </div>
  );
}

export default App;
