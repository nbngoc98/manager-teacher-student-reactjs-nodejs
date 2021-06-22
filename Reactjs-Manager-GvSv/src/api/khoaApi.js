import axiosClient from "./axiosClient";

const khoaApi = {
  getAll(pagrams) {
    const url = '/khoa';
    return axiosClient.get(url, {pagrams})
  },

}

export default khoaApi;