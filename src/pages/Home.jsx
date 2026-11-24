import EcoCard from '../components/EcoCard';

export default function Home({ initiatives, airData, searchTerm }) {
  const filtered = initiatives.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <section style={{ background: '#2d6a4f', color: '#fff', padding: '24px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Programa Aula, Escuela y Comunidad (PAEC)</h1>
        <p style={{ color: '#d8f3dc', marginBottom: '12px' }}>Acciones estudiantiles por un campus limpio, sustentable y libre de residuos.</p>
        {airData && (
          <div style={{ display: 'inline-block', background: 'rgba(0,0,0,0.2)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem' }}>
            🌿 Monitoreo Ambiental Campus — Calidad del aire PM2.5: <strong>{airData.pm2_5} µg/m³</strong> | PM10: <strong>{airData.pm10} µg/m³</strong>
          </div>
        )}
      </section>

      <div className="eco-grid">
        {filtered.map((item) => (
          <EcoCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}