







axios(
  `http://api.weatherapi.com/v1/current.json?key=068cb42292994c9480f121502241107&q=karachi&aqi=no`
)
  .then((resp) => {
    console.log(resp.data);
  })

  .catch((err) => {
    console.log(err);
  });