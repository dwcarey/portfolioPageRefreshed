import githubLogo from './assets/github-original.svg';
import facebookLogo from './assets/facebook-original.svg';
import twitterLogo from './assets/twitter-original.svg';
import gooseProfile from './assets/gooseProfile.jpg';
import './App.css';


function Header() {
  return (
    <>
    <div className='headerContainer section'>

      <img src={gooseProfile} className='profilePicture' />
      <h1>Goose Goosington</h1>

      <h2>About me</h2>
      <p className='aboutMeText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nam cum, aspernatur ipsam necessitatibus quia rerum magnam commodi quos dolor vero officiis reprehenderit architecto accusantium fugiat illo. Tempore, inventore rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure repudiandae nulla suscipit qui culpa expedita quidem facere deserunt labore quas praesentium officia inventore eaque fuga repellat, nostrum tempore adipisci!</p>
      
      <div className='socialIconContainer'>
        <img src={githubLogo} className='socialIcon'/>
        <img src={facebookLogo} className='socialIcon'/>
        <img src={twitterLogo} className='socialIcon'/>
      </div>
    </div>
    </>


  );
}

export default Header;
