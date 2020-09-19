import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/Farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.keys(resp.data).length === 0) {
        axios
          .post(`${baseUrl}/Farmers.json`, {
            image: userObj.photoURL,
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            lastSignIn: userObj.lastSignIn
          })
          .then(console.warn('new user posted'));
      } else {
        console.warn('user exists');
      }
    });
};

export default { getUser };
