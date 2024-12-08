import React from 'react';

const Programmes = () => {
  // Inline styles
  const styles = {
    container: {
      padding: '20px',
      paddingTop: '150px', // Added 150px padding at the top
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      color: '#4CAF50',
      fontSize: '2em',
    },
    subHeading: {
      color: '#555',
      fontSize: '1.5em',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      margin: '20px 0',
    },
    gridItem: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    gridImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '10px',
    },
    gridHeading: {
      color: '#4CAF50',
      fontSize: '1.2em',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '10px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Programmes</h1>
      <p style={styles.paragraph}>
        Welcome to the programmes page! We offer a variety of services to help you on your mental health journey.
      </p>
      <p>
        <span style={styles.firstSentence}>
          Our programmes run across the UK, and are at the heart of our mission to achieve good mental health for all.
        </span>{' '}
        <span style={styles.remainingText}>
          We measure the different ways of preventing mental ill-health in communities and individuals across the UK.
        </span>
      </p>
      <p style={styles.remainingText}>
        We put our mental health research to the test with programmes created for specific communities, and aim to help
        prevent mental health problems developing both for individuals and communities. We also work with partners and
        communities to build sustainable, evidence-informed programmes.
      </p>
      <h2 style={styles.subHeading}>What We Offer</h2>
      <p style={styles.paragraph}>
        Our programmes include workshops, therapy sessions, and self-help resources designed to cater to different age groups and needs.
      </p>

      <p style={styles.paragraph}>
        Explore our offerings and find the right programme for you or your loved ones.
      </p>

      {/* New Section: Programme Areas of Work */}
      <h2 style={styles.heading}>Areas of work</h2>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/families.jpg" alt="Families" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Families, children, and young people</h3>
          <p>Explore the programmes we work on to support the mental health of children, young people, and parents.</p>
          <button style={styles.button}>View the programmes</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/adults.jpg" alt="Adults" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Adults</h3>
          <p>Learn more about our programmes that help adults understand and improve their mental health.</p>
          <button style={styles.button}>View the programmes</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/later-life.jpg" alt="Later life" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Later life</h3>
          <p>Learn more about the work we do to promote good mental health for older people.</p>
          <button style={styles.button}>View the programmes</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/refugees.jpg" alt="Refugees" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Refugees</h3>
          <p>Explore our work with refugees and helping their mental health.</p>
          <button style={styles.button}>View the programmes</button>
        </div>
      </div>

      <p style={styles.paragraph}>
        For more information, feel free to contact us or sign up for any of the programmes above!
      </p>
    </div>
  );
};

export default Programmes;
