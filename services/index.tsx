import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://apiforlearning.zendvn.com/api/mobile",
  headers: {
    "Content-Type": "application/json",
    // Authorization:
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpZm9ybGVhcm5pbmcuemVuZHZuLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTc0NDI0NTEyNywiZXhwIjoxNzQ0MjQ4NzI3LCJuYmYiOjE3NDQyNDUxMjcsImp0aSI6Ijd2Z1luZEoyU2dZQ2o5Zk8iLCJzdWIiOjE4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.JT52UW42Sk-mt7WQEX6LAZ-ruzE3I0l5GdjOXkJbOuc",
  },
});

export default axiosClient;
