const axios = require('axios');

export const run=()=> {
    

axios.get('http://localhost:5000/api/events')
.then(response => {
  console.log(response.data.url);
  console.log(response.data.explanation);
})
.catch(error => {
  console.log(error);
});
  
  }
