import React, { useState } from 'react';
import './PasswordGenerator.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) {
      chars += '0123456789';
    }
    if (includeSymbols) {
      chars += '!@#$%^&()';
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <div className='requisito'>
        <label>Password Length:</label>
        <input className='input'
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div className='requisito'>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div className='requisito'>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <button  className='bot' onClick={generatePassword}>Generate Password</button>
      {password && (
        <div className='contraseña'>
          <h3>Generated Password:</h3>
          <p className='contra'>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;