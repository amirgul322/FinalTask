// TrafficLightSimulator.jsx
import React from 'react';

const TrafficLightSimulator = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: '20px',
        padding: '20px',
        width: '120px',
      }}>
        <div style={{
          width: '100



// TrafficLightSimulator.jsx
import React from 'react';

const TrafficLightSimulator = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    trafficLight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#333',
      borderRadius: '20px',
      padding: '20px',
      width: '120px',
    },
    light: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      margin: '10px 0',
      opacity: 0.3,
    },
    redLight: {
      backgroundColor: '#ff0000',
    },
    yellowLight: {
      backgroundColor: '#ffff00',
    },
    greenLight: {
      backgroundColor: '#00ff00',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{...styles.light, ...styles.redLight}} />
        <div style={{...styles.light, ...styles.yellowLight}} />
        <div style={{...styles.light, ...styles.greenLight}} />
      </div>
    </div>
  );
};

export default TrafficLightSimulator;





// TrafficLightSimulator.jsx
import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prevLight => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    // ... (same styles as Commit 2)
    activeLight: {
      opacity: 1,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{
          ...styles.light, 
          ...styles.redLight,
          ...(activeLight === 'red' ? styles.activeLight : {})
        }} />
        <div style={{
          ...styles.light, 
          ...styles.yellowLight,
          ...(activeLight === 'yellow' ? styles.activeLight : {})
        }} />
        <div style={{
          ...styles.light, 
          ...styles.greenLight,
          ...(activeLight === 'green' ? styles.activeLight : {})
        }} />
      </div>
    </div>
  );
};

export default TrafficLightSimulator;


// TrafficLightSimulator.jsx
import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prevLight => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    trafficLight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#333',
      borderRadius: '20px',
      padding: '20px',
      width: '120px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    },
    light: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      margin: '10px 0',
      opacity: 0.3,
      transition: 'opacity 0.5s ease-in-out',
    },
    redLight: {
      backgroundColor: '#ff0000',
      boxShadow: '0 0 10px #ff0000',
    },
    yellowLight: {
      backgroundColor: '#ffff00',
      boxShadow: '0 0 10px #ffff00',
    },
    greenLight: {
      backgroundColor: '#00ff00',
      boxShadow: '0 0 10px #00ff00',
    },
    activeLight: {
      opacity: 1,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{
          ...styles.light, 
          ...styles.redLight,
          ...(activeLight === 'red' ? styles.activeLight : {})
        }} />
        <div style={{
          ...styles.light, 
          ...styles.yellowLight,
          ...(activeLight === 'yellow' ? styles.activeLight : {})
        }} />
        <div style={{
          ...styles.light, 
          ...styles.greenLight,
          ...(activeLight === 'green' ? styles.activeLight : {})
        }} />
      </div>
    </div>
  );
};

export default TrafficLightSimulator;
