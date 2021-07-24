import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader';
import me from './../../img/me.png'

const About =()=> {
    return (
      <div className={classes.AboutMe} id="about">
        <PageHeader title={'About Me'}/>
        <div className={classes.Container}>
          <div className={classes.Text}>
            <h2>Hello! I'm Sarika Patil</h2>
            <p>
               I am a Front End Developer based in Gurugram and completed my Bachelor of Engineering from North Maharashtra University.
               Also I have completed in web designing and React Courses. I have strong knowledge of React and Google Firebase.
               I am keen to gain more experience in the field. For this reason,I am looking for a company willing to offer me a placement 
               among their developers.In return,I would offer my full commitment, and be a pleasant and friendly addition to your team.
               I am therefore currently looking for a job as a Front End developer especially in a React field.

            </p>
          </div>
          <div className={classes.Photo}>
            <img className={classes.Me} src={me} alt="me"></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;