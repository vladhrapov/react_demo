import "whatwg-fetch";
import Promise from "bluebird";

let rootUrl = "https://api.imgur.com/3/";
let apiKey = "ef6a0ad37b72968";

class Api {
  constructor() {
    
  }

  get(url) {
    return fetch(rootUrl + url, {
      headers: "Client-ID " + apiKey
    }).then(function (response) {
      return response.json();
    });
  }
}

export default Api;
