import classes from './Skills.module.css';
import PageHeader from './../PageHeader/PageHeader';
import man from './../../img/man.jpg'

const listTitleStyle= {fontweight:900, color: '#9B1FE8',marginBottom:'4px'}
const frontendSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>Html-CSS-Javascript</li>
    <li>jQuery-Bootstrap</li>
    <li>React-Redux</li>
</ul>

const backendSkills =
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Google Firebase</li>
</ul>

const otherSkills =
<ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>Git-Github-Gitlab</li>
</ul> 

const totalSkills=[frontendSkills,backendSkills,otherSkills] 

const Skills =()=> {
    return (
      <div className={classes.Skills} id="skills">
        <PageHeader title={'What about the Skills?'}/>
        <p>
          I'm a life long learner and enjoy learning new stuff !
          Below are some programming languages,toolkits,frameworks
          and libraries that I worked and like.
        </p>
        <div className={classes.Man}> <img src={man} alt="man" /></div>
        <div className={classes.Container}>  
          {totalSkills.map(skills =>{
            return(
              <div className={classes.List}>
                {skills}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Skills;