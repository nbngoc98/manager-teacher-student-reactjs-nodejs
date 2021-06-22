import axiosClient from "./axiosClient";

const studentApi = {
  getAll(pagrams) {
    const url = '/student';
    return axiosClient.get(url, {pagrams})
  },
}

export default studentApi;