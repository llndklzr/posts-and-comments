const BASE_URL = "https://jsonplaceholder.typicode.com";

export function listPosts() {
  return fetch(`${BASE_URL}/posts`).then((response) => response.json());
}

export function listComments() {
  return fetch(`${BASE_URL}/comments`).then((response) => response.json());
}
