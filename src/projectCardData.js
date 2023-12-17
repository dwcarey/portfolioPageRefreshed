import contactGoose from './assets/gooseContact.jpg';

const projectCardData = [];

//factory fucntion outputting JSON keyed pair in array
// { "name": "goose",
//    "imageURL": "./assets/gooseContact.jpg", - now adjusted to imported image object
//    "projectURL": "https://dwcarey.github.io/battleship/"
// }

const createCardObject = (projectName, imageURL, projectURL) => {
    const cardObject = {};
    cardObject.projectName = projectName;
    cardObject.imageURL = imageURL;
    cardObject.projectURL = projectURL;

    projectCardData.push(cardObject);

    return projectCardData;
}

const gooseTest = createCardObject('Goose', contactGoose, "https://dwcarey.github.io/battleship/");

export default projectCardData;