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
