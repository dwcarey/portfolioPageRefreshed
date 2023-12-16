import './App.css';
import githubLogo from './assets/github-original.svg';
import facebookLogo from './assets/facebook-original.svg';
import twitterLogo from './assets/twitter-original.svg';
import contactGoose from './assets/gooseContact.jpg';

function Contact() {
  return (
    <>
    <div className='contactContainer section'>
        <h2>Contact Me</h2>
        <h3>Please get in touch if you have some bread!</h3>
        <h4>1234 The Lake</h4>
        <h4>Large Lake, Lake, 9999</h4>
        <h4>(78) 9384 7394 & 0234 724 134</h4>
        <h4>goosegoosington@geeseunited.com</h4>

        <div className='socialIconContainer'>
            <img src={githubLogo} className='socialIcon'/>
            <img src={facebookLogo} className='socialIcon'/>
            <img src={twitterLogo} className='socialIcon'/>
        </div>

        <img src={contactGoose} className='contactGoose' alt="angry goose" />

    </div>
    </>


  );
}

export default Contact;