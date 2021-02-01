import Axios from "axios";
import Environment from "../config/environment";

export default class RestHelper  {
  constructor() {
    this.pth = Environment.baseUrl;
  }

  post(path, data, headers) {
    return Axios.post(this.pth + path, data, { headers: headers });
  }

  get(path, params, headers) {
    return Axios.get(this.pth + path,
      {
        headers:headers,
        params: params
      });
  }
}