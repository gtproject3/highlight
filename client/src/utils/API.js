import axios from "axios";

export default {
  // Gets the author with the given id
  getAuthor: function (id) {
    return axios.get("/api/author/" + id);
  },
  // getAuthor: function (id) {
  //   return axios.get("/api/author/" + id);
  // },

};
