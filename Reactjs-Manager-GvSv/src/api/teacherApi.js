import axiosClient from "./axiosClient";

const teacherApi = {
  getAll(pagrams) {
    const url = '/teacher';
    return axiosClient.get(url, {pagrams})
  },

//   get(id) {
//     const url = `teacher/${id}`;
//     return axiosClient.get(url)
//   },

  add(data) {
    const url = '/teacher';
    return axiosClient.post(url,data)
  },

  update(data) {
    const url = `/teacher/${data.id}`;
    return axiosClient.put(url, data)
  },

  search(data) {
    if (data.name) {
      var url = `/teacher/search?name=${data.name}`;
    }
    if (data.phone) {
      var url = `/teacher/search?phone=${data.phone}`;
    }
    if (data.birthday) {
      var url = `/teacher/search?birthday=${data.birthday}`;
    }

    return axiosClient.get(url, {data})
  },

  remove(id) {
    const url = `teacher/${id}`;
    return axiosClient.delete(url)
  },
}

export default teacherApi;