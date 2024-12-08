import React from 'react';

const Research = () => {
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
      <h1 style={styles.heading}>Research</h1>
      <p style={styles.paragraph}>
      Mental wellness research explores various aspects of psychological well-being, aiming to understand how mental health is 
      influenced by factors like genetics, environment, and lifestyle. It examines the effects of stress on the mind and body 
      and investigates coping mechanisms such as mindfulness, therapy, and physical activity. Research also focuses on therapeutic 
      interventions, including cognitive-behavioral therapy and medication, as well as early prevention and intervention strategies.
       Additionally, it delves into the role of social support, relationships, and community in mental wellness, while addressing
        mental health stigma and ways to reduce it. With the rise of technology, studies also explore the impact of digital tools 
        and social media on mental health, offering insights into how technology can both support and challenge mental wellness. 
        This research helps improve mental health services, create effective treatments, and promote broader awareness of mental 
        well-being. </p>
      
     
      <p style={styles.paragraph}>
        Explore our offerings and find the right Research for you or your loved ones.
      </p>

      {/* New Section: Programme Areas of Work */}
      <h2 style={styles.heading}>Areas of work</h2>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/research1.png" alt="Families" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Stress and Coping Mechanisms</h3>
          <p>Examines the effects of stress on the body and mind.
          Looks at various coping strategies like mindfulness, exercise, and therapy.</p>
          <button style={styles.button}>View the Research</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/research2.png" alt="Adults" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Social and Environmental Influences</h3>
          <p>Investigates the impact of social support, relationships, and community involvement on mental well-being.
          Studies the role of environments, such as nature or urban spaces, in mental health..</p>
          <button style={styles.button}>View the Research</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/research3.png" alt="Adults" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Therapeutic Activities</h3>
          <p>Offer sessions in yoga, meditation, and breathing exercises.
          Include creative outlets like art therapy and journaling.</p>
          <button style={styles.button}>View the Research</button>
        </div>
        
      </div>

      <p style={styles.paragraph}>
        For more information, feel free to contact us or sign up for any of the Research above!
      </p>
    </div>
  );
};

export default Research;
