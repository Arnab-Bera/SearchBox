import axios from 'axios';

const cache = {};

export const fetchData = (data) => {
  return {
    type: "FETCH_PEOPLE",
    payload: data
  }
};

export const fetchPeopleData = (val) => {
  return (dispatch) => {
    if (cache[val]) {
      dispatch(fetchData(cache[val]));
    } else {
      return axios.get("https://swapi.dev/api/people/?search="+val)
        .then(response => {
          console.log("response : " + response);
          cache[val] = response.data;
          console.log("cache : " + cache);
          dispatch(fetchData(response.data))
        })
        .catch(error => {
          throw(error);
        });
    }
  };
};




// import axios from "axios";

// const fetchPeople = (val) => {
//     return new Promise(function (onSuccess, onFail) {
//         fetch("https://swapi.dev/api/people/?search="+val, {
//             method: 'GET',
//             headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             },
//         })
//         .then(response => response.json())
//         .then(responseJson => {
//         console.log('responseJson:: ', JSON.stringify(responseJson));
//         onSuccess(responseJson);
//         })
//         .catch(error => {
//         console.log('error::', error);
//         onFail(error);
//         });
//     });
//     // return axios.get("https://swapi.dev/api/people/?search="+val).then((data) => {
//     //    data;
//     // });
  

// };

// export default fetchPeople;
