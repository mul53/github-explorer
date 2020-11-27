import Axios from "axios";

export default class GithubService {
  static get baseUrl() {
    return "https://api.github.com";
  }

  static getRepo(organization: string, name: string) {
    return Axios.get(`${this.baseUrl}/repos/${organization}/${name}`);
  }

  static search(query: string) {
    return Axios.get(
      `${this.baseUrl}/search/repositories?q=${query}&order=desc`
    );
  }
}
