
const callApi = () => {

  return fetch(`https://`)
    .then((response) => response.json())
    .then((response) => {
      return response.map((data) => {
        return {
          new: data.new,
          date: data.date,
          user: data.user,
          id: data.id
        }
      });
    });
};

export default callApi;