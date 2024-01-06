var axios = require('axios');
const { json } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get('/GetReviews/:Place_ID', (req, res) => {
  const place_id = 'ChIJW_U6DczDwogRIKDr0Pdfc4c'
  const key = 'AIzaSyDPDxbfHJgcNVxNqcGUAkc2s9pgRJZ6q7I'
  const place_id_lender = 'ChIJP1-YKbDBwogRabqkOdI5j_U'
  const URL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + req.params.Place_ID + "&language=es&" + "&key=" + key

  var config = {
    method: 'get',
    url: URL,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      const reviews = JSON.stringify(response.data)
      res.send(JSON.parse(reviews).result.reviews)
    })
    .catch(function (error) {
      console.log(error);
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})