import { useState } from 'react';

export default function EcoCard({ item }) {
  const [joined, setJoined] = useState(false);

  return (
    <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(27, 67, 50, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
        <div style={{ padding: '16px' }}>
          <span style={{ background: '#d8f3dc', color: '#1b4332', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px' }}>
            {item.category}
          </span>
          <h3 style={{ margin: '10px 0 6px', fontSize: '1.1rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#40916c', lineHeight: '1.4' }}>{item.description}</p>
        </div>
      </div>

      <div style={{ padding: '12px 16px', borderTop: '1px solid #e9ecef', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', color: '#52796f' }}>📍 {item.location}</span>
        <button
          onClick={() => setJoined(!joined)}
          style={{
            background: joined ? '#40916c' : '#1b4332',
            color: '#fff',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          {joined ? '✓ Participando' : 'Unirme'}
        </button>
      </div>
    </div>
  );
}