import React from 'react';

const PublicEngagement = () => {
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
      <h1 style={styles.heading}>PublicEngagement</h1>
      <p style={styles.paragraph}>
      Mental wellness public engagement events aim to promote awareness, reduce stigma, and encourage open conversations about mental health. These gatherings often include activities such as:

- **Workshops and Seminars**: Focused on stress management, mindfulness, and coping techniques. 
- **Interactive Booths**: Offering resources like counseling services, helplines, and educational materials.
- **Therapeutic Activities**: Yoga, meditation, art therapy, and group discussions to foster a sense of community.
- **Awareness Campaigns**: Sharing stories, posters, and banners to educate the public about mental health.

The goal is to create a supportive environment that emphasizes the importance of mental well-being for all.
      </p>
      
     
      <p style={styles.paragraph}>
        Explore our offerings and find the right PublicEngagement for you or your loved ones.
      </p>

      {/* New Section: Programme Areas of Work */}
      <h2 style={styles.heading}>Areas of work</h2>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/pbeg.png" alt="Families" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Workshops and Seminars</h3>
          <p>Teach stress management and coping techniques.
          Provide insights into mindfulness and emotional resilience.</p>
          <button style={styles.button}>View the PublicEngagement</button>
        </div>
        <div style={styles.gridItem}>
          <img src="/images/aboutpage/pbegg.jpeg" alt="Adults" style={styles.gridImage} />
          <h3 style={styles.gridHeading}>Therapeutic Activities</h3>
          <p>Offer sessions in yoga, meditation, and breathing exercises.
          Include creative outlets like art therapy and journaling.</p>
          <button style={styles.button}>View the PublicEngagement</button>
        </div>
        
      </div>

      <p style={styles.paragraph}>
        For more information, feel free to contact us or sign up for any of the PublicEngagement above!
      </p>
    </div>
  );
};

export default PublicEngagement;
