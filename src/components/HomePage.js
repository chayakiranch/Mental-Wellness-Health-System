import React from 'react';
import './HomePage.css'; // Separate CSS for HomePage

const HomePage = () => {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="content">
          <h1>Good mental health is a universal necessity</h1>
          <p>Today I want to:</p>
          <div className="action-section">
            <select className="dropdown">
              <option value="/explore-mental-health/getting-help-your-mental-health">
                Get help for my mental health
              </option>
              <option value="/our-work/public-engagement/world-mental-health-day">
                Find out about World Mental Health Day
              </option>
              <option value="/explore-mental-health/supporting-someone-else-their-mental-health">
                Support someone else with their mental health
              </option>
              <option value="/explore-mental-health/get-help">Get emergency help</option>
              <option value="/our-work/public-engagement/mental-health-awareness-week">
                Find out about Mental Health Awareness Week
              </option>
              <option value="/explore-mental-health/factors-affect-mental-health">
                Learn what factors impact mental health
              </option>
              <option value="/explore-mental-health/mental-health-within-different-communities">
                Find information for different groups of people
              </option>
              <option value="/explore-mental-health">Find out about mental health</option>
            </select>
            <a href="/explore-mental-health" className="learn-more-btn">
              Explore
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="/images/mainpage/main-page-1.png"
            alt="Mental Health Support"
            className="person-image"
          />
        </div>
      </div>{/* New Section */}
        <div className="new-section">
          <div className="promo-content">
            <h2>Explore Mental Health Resources</h2>
            <p>
            Explore tools and stories to support mental health for yourself or others.
            </p>
            <a href="/Programmes" className="mhf-button">
              Learn More
            </a>
          </div>
          <div className="promo-image">
            <img src="/images/mainpage/world-mental-health-day.png" alt="Mental Health Resources" />
          </div>
        </div>

        {/* Information Section */}
        <section className="carousel-section">
          <h2 className="carousel-title">Information and Guidance</h2>
          <div className="carousel-container">
            <div className="carousel-item">
              <img
                src="/images/mainpage/a-z-topics.jpg"
                alt="A-Z Topics"
                className="carousel-image"
              />
              <h3>A-Z Topics</h3>
              <p>
                Find out more about specific mental health problems, and things
                that can have an effect on our mental health.
              </p>
              <a href="/Programmes" className="learn-more-btn">Learn More</a>
            </div>

            <div className="carousel-item">
              <img
                src="/images/mainpage/manage-anxiety.jpg"
                alt="How-to Guides"
                className="carousel-image"
              />
              <h3>How-to Guides</h3>
              <p>
                In-depth how-to guides about a wide range of mental health
                problems, free to download and read.
              </p>
              <a href="/PublicEngagement" className="learn-more-btn">Learn More</a>
            </div>

            <div className="carousel-item">
              <img
                src="/images/mainpage/looking-after.jpg"
                alt="Looking After Mental Health"
                className="carousel-image"
              />
              <h3>Looking After Your Mental Health</h3>
              <p>
                We want everyone to live mentally healthy lives. Luckily, there is
                plenty of evidence for the things that can help.
              </p>
              <a href="/Research" className="learn-more-btn">Learn More</a>
            </div>

            <div className="carousel-item">
              <img
                src="/images/mainpage/supporting-someone.jpg"
                alt="Supporting Someone Else"
                className="carousel-image"
              />
              <h3>Supporting Someone Else</h3>
              <p>
                You can do many things to help if someone you know is experiencing
                mental ill-health.
              </p>
              <a href="/supporting-someone" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        </section>
        {/* Information Section ends */}

        {/* Our Work starts */}
        <section className="support-work">
          <h2>Our work</h2>
          <div className="support-cards">
            <div className="support-card">
              <img src="/images/mainpage/fundraise.jpg" alt="Fundraise" className="support-image" />
              <h3>Fundraise</h3>
              <p>
                Explore the range of active challenges available across the UK. Get fit and
                raise money for the Mental Health Foundation, at the same time.
              </p>
              <button className="support-button">Get Involved</button>
            </div>
            <div className="support-card">
              <img src="/images/mainpage/donate.jpg" alt="Donate" className="support-image" />
              <h3>Donate</h3>
              <p>
                Your donation, however big or small, will help us achieve good mental
                health for all - not just for some.
              </p>
              <button className="support-button">Donate now</button>
            </div>
            <div className="support-card">
              <img src="/images/mainpage/participate.png" alt="Participate" className="support-image" />
              <h3>Participate</h3>
              <p>
                Our Personal Experience Network, OPEN, is a diverse online community of people
                who share their experience to inform what we do.
              </p>
              <button className="support-button">Join the community</button>
            </div>
            <div className="support-card">
              <img src="/images/mainpage/shop.png" alt="Shop" className="support-image" />
              <h3>Shop</h3>
              <p>
                Raise awareness for mental health by wearing the green ribbon or other
                Mental Health Foundation merchandise.
              </p>
              <button className="support-button">Shop now</button>
            </div>
          </div>
        </section>
        {/* Our Work ends */}

        {/* Most popular topics start */}
        <section className="popular-topics">
          <h2>Most popular topics</h2>
          <div className="topics-container">
            <div className="topic-card">
              <img src="/images/mainpage/research.png" alt="Research" className="topic-image" />
              <span className="topic-label research">Research</span>
              <p className="topic-description">
                Experiences of poverty stigma and mental health in the UK
              </p>
            </div>
            <div className="topic-card">
              <img src="/images/mainpage/report.jpg" alt="Report" className="topic-image" />
              <span className="topic-label report">Report</span>
              <p className="topic-description">
                Planning for Prevention: Unlocking the potential of Integrated Care
                Systems to create a mentally healthy society
              </p>
            </div>
            <div className="topic-card">
              <img src="/images/mainpage/article.png" alt="Article" className="topic-image" />
              <span className="topic-label article">Article</span>
              <p className="topic-description">
                Tips to look after your mental health during traumatic world events
              </p>
            </div>
            <div className="topic-card">
              <img src="/images/mainpage/blog.jpg" alt="Blog" className="topic-image" />
              <span className="topic-label blog">Blog</span>
              <p className="topic-description">
                Views after the riots: counting the toll of discrimination and
                dehumanising language
              </p>
            </div>
          </div>
        </section>

    </main>
  );
};

export default HomePage;
