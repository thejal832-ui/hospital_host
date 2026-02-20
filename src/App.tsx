import { useState } from 'react';

interface Patient {
  name: string;
  token: number;
}

function App() {
  const [name, setName] = useState('');
  const [queue, setQueue] = useState<Patient[]>([]);
  const [tokenCounter, setTokenCounter] = useState(1);
  const [currentPatient, setCurrentPatient] = useState<Patient | null>(null);

  const registerPatient = () => {
    if (!name.trim()) {
      alert("Please enter a patient name");
      return;
    }
    const newPatient = { name: name, token: tokenCounter };
    setQueue([...queue, newPatient]);
    setTokenCounter(tokenCounter + 1);
    setName('');
  };

  const callNextPatient = () => {
    if (queue.length === 0) {
      alert("No patients in queue");
      return;
    }
    const next = queue[0];
    setCurrentPatient(next);
    setQueue(queue.slice(1));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Hospital Token System</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Register Patient</h3>
        <input 
          type="text" 
          placeholder="Patient Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <button 
          onClick={registerPatient}
          style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Register
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={callNextPatient}
          style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Call Next Patient
        </button>
      </div>

      {currentPatient && (
        <div style={{ backgroundColor: '#fff9c4', padding: '15px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
          <h2>Now Calling: {currentPatient.name}</h2>
          <h3>Token #{currentPatient.token}</h3>
        </div>
      )}

      <div>
        <h3>Waiting list ({queue.length})</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {queue.map((p, i) => (
            <li key={i} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Token {p.token}: {p.name}
            </li>
          ))}
          {queue.length === 0 && <li style={{ color: '#888' }}>Queue is empty</li>}
        </ul>
      </div>
    </div>
  );
}

export default App;
