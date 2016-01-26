import Fetch from "whatwg-fetch";

let rootUrl = "https://api.imgur.com/3/";
let apiKey = "ef6a0ad37b72968";

class Api {
  constructor() {
  }

  get(url) {
    console.log(rootUrl + url);
    return fetch(rootUrl + url, {
      headers: "Client-ID " + apiKey
    }).then(function (response) {
      return response.json();
    });
  }
}

export default Api;
