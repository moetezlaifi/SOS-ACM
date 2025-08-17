import './desieme1.css';
import background from '../../assets/back1.png';

const FirstSemester2 = () => {
  return (
    <section className="semester-section" style={{ backgroundImage: `url(${background})` }}>
    <div className="semester-container">
      <h1 className="semester-title">1st Semester</h1>
      <p className="semester-subtitle">LET'S DIVE INTO YOUR FIRST SEMESTER LEARNING PATH.</p>
      
      <div className="divider"></div>
      
      <div className="course-cards">
        <div className="course-card">
          <h2 className="course-title">MATH-INFO 1</h2>
          <ul className="course-topics">
            <li>analyse</li>
            <li>probabilities</li>
            <li>analyse</li>
          </ul>
        </div>
        
        <div className="course-card">
          <h2 className="course-title">SC.DE L'ING</h2>
          <ul className="course-topics">
            <li>analyse</li>
            <li>analyse</li>
            <li>analyse</li>
          </ul>
        </div>
        
        <div className="course-card">
          <h2 className="course-title">SOC.ECO</h2>
          <ul className="course-topics">
            <li>analyse</li>
            <li>analyse</li>
            <li>analyse</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FirstSemester2;