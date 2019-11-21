export class Status {
  async getProfile() {
    try {
      let response = await fetch(`https://randomuser.me/api/`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}


export class Details {
  async getProfileAgain(country_code, phone_number) {
    try {
      let response = await fetch(`https://api.ekata.com/3.0/phone.json?api_key=5218875ecdb24b318d8b4e670c1bf7dc&phone.country_hint=${country_code}&phone=${phone_number}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
