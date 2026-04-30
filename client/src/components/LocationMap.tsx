import { MapView } from './Map';

export default function LocationMap() {
  const handleMapReady = (map: google.maps.Map) => {
    // Coordenadas do escritório em Campina Grande
    const location = { lat: -7.2305, lng: -35.8811 };

    // Adicionar marcador
    new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: location,
      title: 'Eufrauzino Advogados',
    });

    // Adicionar info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: 'Lato', sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-family: 'Cormorant Garamond', serif; color: #6B1E2C; font-size: 18px; font-weight: bold;">
            Eufrauzino Advogados
          </h3>
          <p style="margin: 0; color: #4A4A4A; font-size: 14px;">
            Rua Getúlio Cavalcante, 136<br />
            Liberdade, Campina Grande, PB
          </p>
          <p style="margin: 8px 0 0 0; color: #6B1E2C; font-size: 14px; font-weight: bold;">
            (83) 986366658
          </p>
        </div>
      `,
      maxWidth: 300,
    });

    infoWindow.open(map);
  };

  return (
    <MapView
      initialCenter={{ lat: -7.2305, lng: -35.8811 }}
      initialZoom={15}
      onMapReady={handleMapReady}
      className="rounded-lg overflow-hidden"
    />
  );
}
