const url = "http://localhost:4000";
// const url = "https://shielded-cove-79557.herokuapp.com";

export default function api(endpoint, { method = "GET", body, jwt } = {}) {
  return fetch(url + endpoint, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      if (status >= 400) {
        throw { api_error: data };
      } else {
        return data;
      }
    });
}
