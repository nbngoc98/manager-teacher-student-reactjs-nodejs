import axiosClient from "./axiosClient";

const classApi = {
  getAll(pagrams) {
    const url = '/class';
    return axiosClient.get(url, {pagrams})
  },

}

export default classApi;