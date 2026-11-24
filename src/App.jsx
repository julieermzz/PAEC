export default function Reciclaje() {
  const bins = [
    {
      color: '#2d6a4f',
      name: 'Contenedor Verde — Residuos Orgánicos (Composta)',
      desc: 'Cáscaras de fruta y verdura, restos de café, hojas secas, pasto cortado y cascarones de huevo triturados. Estos materiales se descomponen naturalmente para convertirse en abono.'
    },
    {
      color: '#1d3557',
      name: 'Contenedor Azul — Papel y Cartón',
      desc: 'Cuadernos usados, hojas blancas o impresas, cajas de cartón desarmadas, periódicos y revistas. Deben estar limpios, secos y sin restos de grasa o comida.'
    },
    {
      color: '#e9c46a',
      text: '#1b4332',
      name: 'Contenedor Amarillo — Plásticos y Metales',
      desc: 'Botellas de PET (agua y refresco) vacías y aplastadas, envases de plástico rígido limpios, taparroscas y latas de aluminio.'
    },
    {
      color: '#6c757d',
      name: 'Contenedor Gris — Residuos No Reciclables',
      desc: 'Envolturas metalizadas (papitas, galletas), unicel sucio, papel higiénico, cubrebocas y residuos mezclados que ya no pueden aprovecharse.'
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px', lineHeight: '1.6' }}>
      
      {/* SECCIÓN 1: EXPLICACIÓN DETALLADA DE LA COMPOSTA */}
      <section style={{ background: '#ffffff', padding: '28px', borderRadius: '12px', boxShadow: '0 4px 14px rgba(27, 67, 50, 0.08)', marginBottom: '30px' }}>
        <span style={{ background: '#d8f3dc', color: '#1b4332', fontSize: '0.8rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '4px' }}>
          EDUCACIÓN AMBIENTAL PAEC
        </span>
        <h1 style={{ fontSize: '1.8rem', margin: '12px 0', color: '#1b4332' }}>🌱 ¿Qué es una Composta y por qué es importante?</h1>
        
        {/* Imagen principal de composta y tierra fértil */}
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80" 
          alt="Manos sosteniendo tierra fértil de composta con una planta" 
          style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px', margin: '14px 0 20px' }} 
        />

        <p style={{ marginBottom: '14px', color: '#2d3a3a' }}>
          La <strong>composta</strong> (o compostaje) es un proceso biológico y natural mediante el cual los microorganismos (bacterias, hongos y lombrices) descomponen los residuos orgánicos en presencia de oxígeno y humedad, transformándolos en una tierra oscura, rica en nutrientes y sin mal olor llamada <strong>humus o abono orgánico</strong>.
        </p>

        <p style={{ marginBottom: '20px', color: '#2d3a3a' }}>
          En nuestro campus, cerca del <strong>50% de la basura diaria</strong> proviene de restos de comida y poda de jardines. Al compostarlos en lugar de tirarlos al relleno sanitario, evitamos la emisión de gas metano (un gas de efecto invernadero) y producimos fertilizante gratuito para los árboles y huertos de la escuela.
        </p>

        {/* Cómo hacerla paso a paso con foto ilustrativa */}
        <div style={{ background: '#f0f7f4', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '12px', color: '#1b4332' }}>🔄 ¿Cómo funciona el compostaje en capas?</h3>
          
          <img 
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80" 
            alt="Residuos orgánicos de frutas y verduras para composta" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '14px' }} 
          />

          <ol style={{ paddingLeft: '20px', color: '#2d3a3a' }}>
            <li style={{ marginBottom: '8px' }}><strong>Capa base (Material seco / Carbono):</strong> Se coloca una cama de ramas pequeñas, hojas secas, aserrín o cartón sin tinta para permitir que circule el aire y evitar malos olores.</li>
            <li style={{ marginBottom: '8px' }}><strong>Capa verde (Material húmedo / Nitrógeno):</strong> Se agregan restos de frutas, verduras, borra de café o pasto fresco picado en trozos pequeños.</li>
            <li style={{ marginBottom: '8px' }}><strong>Tierra y humedad:</strong> Se cubre con una capa delgada de tierra negra y se riega ligeramente (debe sentirse húmeda como una esponja exprimida, nunca encharcada).</li>
            <li><strong>Aireación y cosecha:</strong> Se revuelve cada 7 a 10 días para oxigenar la mezcla. Después de <strong>8 a 12 semanas</strong>, la mezcla se convierte en tierra fértil lista para usar.</li>
          </ol>
        </div>

        {/* Qué SÍ y qué NO va en la composta */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#e9f5db', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #40916c' }}>
            <h4 style={{ color: '#1b4332', marginBottom: '8px' }}>✅ Qué SÍ poner en la composta</h4>
            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem' }}>
              <li>Cáscaras de frutas y verduras</li>
              <li>Cascarones de huevo triturados</li>
              <li>Residuos de café y bolsitas de té</li>
              <li>Hojas secas, ramas y pasto</li>
              <li>Servilletas de papel sin grasa ni químicos</li>
            </ul>
          </div>

          <div style={{ background: '#ffe5e5', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #d62828' }}>
            <h4 style={{ color: '#9b2226', marginBottom: '8px' }}>❌ Qué NO poner nunca</h4>
            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem' }}>
              <li>Carnes, huesos, lácteos o grasas</li>
              <li>Comida cocinada con aceites o salsas</li>
              <li>Heces de mascotas (perros o gatos)</li>
              <li>Plásticos, metales, vidrio o unicel</li>
              <li>Plantas enfermas o con pesticidas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LAS 3R Y SEPARACIÓN DE RESIDUOS */}
      <section style={{ background: '#ffffff', padding: '28px', borderRadius: '12px', boxShadow: '0 4px 14px rgba(27, 67, 50, 0.08)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1b4332' }}>♻️ Cultura del Reciclaje y las 3R en el Campus</h2>
        
        <img 
          src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1000&q=80" 
          alt="Contenedores de reciclaje separados por colores" 
          style={{ width: '100%', height: '230px', objectFit: 'cover', borderRadius: '10px', margin: '12px 0 18px' }} 
        />

        <p style={{ marginBottom: '20px', color: '#2d3a3a' }}>
          El reciclaje consiste en someter materiales ya utilizados a un proceso de transformación para convertirlos en nuevos productos, reduciendo la extracción de recursos naturales y el consumo de energía. Antes de reciclar, aplicamos la regla de las <strong>3R</strong>: <strong>Reducir</strong> nuestro consumo de desechables, <strong>Reutilizar</strong> envases o cuadernos, y <strong>Reciclar</strong> separando correctamente en los contenedores del plantel:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {bins.map((bin, idx) => (
            <div key={idx} style={{ background: bin.color, color: bin.text || '#fff', padding: '18px', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '4px' }}>{bin.name}</h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.95 }}>{bin.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}