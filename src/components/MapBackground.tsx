
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/**
 * MapBackground Component
 * 
 * Renders an interactive Mapbox map as a background element
 * Features a slowly rotating globe view with atmospheric effects
 */
const MapBackground = () => {
  // Reference to the DOM element where the map will be rendered
  const mapContainer = useRef<HTMLDivElement>(null);
  
  // Reference to store the map instance
  const map = useRef<mapboxgl.Map | null>(null);
  
  // State to store the Mapbox token (temporary solution)
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  // State to track if the token has been entered
  const [isTokenEntered, setIsTokenEntered] = useState<boolean>(false);

  /**
   * Initialize and configure the Mapbox map
   */
  useEffect(() => {
    if (!mapContainer.current || !isTokenEntered || !mapboxToken) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = mapboxToken;
    
    // Create new map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Dark theme for better background appearance
      projection: 'globe', // Use globe projection for 3D effect
      zoom: 2, // Initial zoom level
      center: [0, 20], // Center on equator
      pitch: 40, // Tilt the view
      attributionControl: false, // Hide attribution for cleaner look
      interactive: false, // Disable interaction for background usage
    });

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      if (!map.current) return;
      
      // Add atmospheric glow around the globe
      map.current.setFog({
        color: 'rgba(10, 10, 30, 0.8)', // Dark blue fog
        'high-color': 'rgba(50, 50, 80, 0.8)', // Lighter blue high in atmosphere
        'horizon-blend': 0.4, // Blend amount at the horizon
      });
    });

    // Rotation animation settings
    const secondsPerRevolution = 180; // Time for one full rotation
    
    /**
     * Spin the globe continuously
     */
    function spinGlobe() {
      if (!map.current) return;
      
      // Calculate rotation speed
      const distancePerSecond = 360 / secondsPerRevolution;
      
      // Get current center and update longitude for rotation
      const center = map.current.getCenter();
      center.lng -= distancePerSecond * 0.1; // Small increment for smooth animation
      
      // Animate to the new position
      map.current.easeTo({ 
        center, 
        duration: 100, 
        easing: (n) => n 
      });
      
      // Continue animation
      requestAnimationFrame(spinGlobe);
    }

    // Start the globe spinning
    spinGlobe();

    // Cleanup on unmount
    return () => {
      map.current?.remove();
    };
  }, [isTokenEntered, mapboxToken]);

  /**
   * Handle token input and submission
   */
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTokenEntered(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Map container */}
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Overlay gradient to help content visibility */}
      <div className="absolute inset-0 bg-background/70 z-10" />
      
      {/* Token input form - Only shown until token is entered */}
      {!isTokenEntered && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-background/90">
          <form onSubmit={handleTokenSubmit} className="w-full max-w-md p-6 space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium">Mapbox Token Necessário</h3>
              <p className="text-sm text-foreground/70">
                Para visualizar o mapa de fundo, insira seu token público do Mapbox.
                Obtenha um em <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
              </p>
            </div>
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Insira seu token público do Mapbox"
              className="w-full px-4 py-2 border border-primary/20 rounded-md bg-card"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Aplicar Token
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MapBackground;
