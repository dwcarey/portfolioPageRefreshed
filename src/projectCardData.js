import battleshipSnip from './assets/battleshipsnip.png';

const projectCardData = [];

//factory fucntion outputting JSON keyed pair in array
// { "name": "goose",
//    "imageURL": "./assets/gooseContact.jpg", - now adjusted to imported image object
//    "projectURL": "https://dwcarey.github.io/battleship/
//      ADD CODE URL - github
// }

const createCardObject = (projectName, imageURL, projectURL) => {
    const cardObject = {};
    cardObject.projectName = projectName;
    cardObject.imageURL = imageURL;
    cardObject.projectURL = projectURL;

    projectCardData.push(cardObject);

    return projectCardData;
}

const battleshipData = createCardObject('Battleship', battleshipSnip, "https://dwcarey.github.io/battleship/");

export default projectCardData;