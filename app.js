const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=4a45146f35fdaf16a54a48a61c9a3ec9&query=Sydney";

request({ url: url, json: true }, (error, response) => {
  //   console.log(response.body.current);
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});
