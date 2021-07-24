import classes from './Home.module.css';
import code from './../../img/code.jpg';
import coffee from './../../img/coffee.jpg'

const Home =()=> {
    return (
      <div className={classes.Home} id="home">
        <div className={classes.Container}>
           <h1 className={classes.Hello}>Hello,World.</h1>
           <h1>Welcome on my website</h1>
        </div>
        <img className={classes.Code} src={code} alt="code"></img>
        <img className={classes.Coffee} src={coffee} alt="coffee"></img>

      </div>
    );
  }
  export default Home;