import battleshipSnip from './assets/battleshipsnip.png';
import knightsSnip from './assets/knightSnip.png';
import CVSnip from './assets/cvSnip.png';
import toDoSnip from './assets/todoSnip.png';
import restaurantSnip from './assets/restaurantSnip.png';
import tictacSnip from './assets/tictacsnip.png';
import librarySnip from './assets/librarySnip.png';
import adminSnip from './assets/adminSnip.png';
import signupSnip from './assets/signupSnip.png';
import calculatorSnip from './assets/calculatorSnip.png';
import pixelSnip from './assets/pixelSnip.png';

const projectCardData = [];

//factory fucntion outputting JSON keyed pair in array
// { "name": "goose",
//    "imageURL": "./assets/gooseContact.jpg", - now adjusted to imported image object
//    "projectURL": "https://dwcarey.github.io/battleship/
//      ADD CODE URL - github
// }

const createCardObject = (projectName, imageURL, projectURL, codeURL) => {
    const cardObject = {};
    cardObject.projectName = projectName;
    cardObject.imageURL = imageURL;
    cardObject.projectURL = projectURL;
    cardObject.codeURL = codeURL;

    projectCardData.push(cardObject);

    return projectCardData;
}

const battleshipData = createCardObject('Battleship', battleshipSnip, 
"https://dwcarey.github.io/battleship/", "https://github.com/dwcarey/battleship");

const knightsData = createCardObject('Knights Travails', knightsSnip, 
"https://dwcarey.github.io/knightsTravails/", "https://github.com/dwcarey/knightsTravails" );

const CVappData = createCardObject('CV Generator', CVSnip, 
"https://main--wondrous-kitsune-0b31c3.netlify.app/", "https://github.com/dwcarey/CVApp");

const toDoData = createCardObject('To Do List', toDoSnip, 
"https://dwcarey.github.io/toDoList/", "https://github.com/dwcarey/toDoList");

const restaurantData = createCardObject('Restaurant Page', restaurantSnip, 
"https://dwcarey.github.io/restaurantPage/", "https://github.com/dwcarey/restaurantPage");

const tictacData = createCardObject('Tic Tac Toe', tictacSnip, 
"https://dwcarey.github.io/ticTacToe/", "https://github.com/dwcarey/ticTacToe");

const libraryData = createCardObject('Book Library', librarySnip, 
"https://dwcarey.github.io/bookLibrary/", "https://github.com/dwcarey/bookLibrary");

const adminData = createCardObject('Admin Dashboard', adminSnip, 
"https://dwcarey.github.io/adminDashboard/", "https://github.com/dwcarey/adminDashboard");

const signupData = createCardObject('Signup Page', signupSnip, 
"https://dwcarey.github.io/signupPage/", "https://github.com/dwcarey/signupPage");

const calculatorData = createCardObject('Calculator', calculatorSnip, 
"https://dwcarey.github.io/calculator/", "https://github.com/dwcarey/calculator");

const pixelData = createCardObject('Pixel Art', pixelSnip, 
"https://dwcarey.github.io/pixelArt/", "https://github.com/dwcarey/pixelArt");

export default projectCardData;