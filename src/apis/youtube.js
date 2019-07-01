import axios from "axios";

const KEY = "AIzaSyDIstG-mx10SB-v1rEbMdEzSIT5VmM6eQI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
