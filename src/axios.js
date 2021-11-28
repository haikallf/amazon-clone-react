import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amozan2-ae677.cloudfunctions.net/api", // the api url
  // "http://localhost:5001/ecommerce-4845d/us-central1/api"
  // "https://us-central1-ecommerce-4845d.cloudfunctions.net/api"
  // "https://us-central1-amozan-4a519.cloudfunctions.net/api"
  //  "http://localhost:5001/amozan-4a519/us-central1/api"
  // https://us-central1-amozan2-ae677.cloudfunctions.net/api
  // "http://localhost:5001/amozan2-ae677/us-central1/api"
});

export default instance;
