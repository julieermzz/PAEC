import { Link } from 'react-router-dom';

export default function Header({ onSearch }) {
  return (
    <header style={{ backgroundColor: '#1b4332', color: '#fff', padding: '18px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <Link to="/" style={{ color: '#d8f3dc', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 'bold' }}>
          🌱 PAEC | Campus Verde
        </Link>

        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
         <Link to="/reciclaje" style={{ color: '#fff', textDecoration: 'none' }}>Composta y Reciclaje</Link>
          <input
            type="text"
            placeholder="Buscar iniciativa..."
            onChange={(e) => onSearch(e.target.value)}
            style={{ padding: '7px 12px', borderRadius: '6px', border: 'none', width: '210px' }}
          />
        </nav>
      </div>
    </header>
  );
}