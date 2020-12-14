import axios from "axios";
import format from "date-fns/format";

const TIME_ZONE_OFFSET = format(new Date(), "XX");

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/simulation/v1`,
  headers: {
    "x-time-zone-offset": TIME_ZONE_OFFSET,
    "Access-Token": process.env.NEXT_PUBLIC_API_TOKEN,
  },
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
