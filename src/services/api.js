import axios from "axios";

import {langColors} from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export function getUser(login){
  return api.get(`/users/${login}`);
}

export function getRepos(login){
  return api.get(`/users/${login}/repos`);
}

export function getLanguagesFrom(repositories){
// utilizar map e reduce para separar o número de linguagens de repositories e ordenar do que há mais para menos
  let stats =
    repositories.map(
      repo => repo.language
    )
      .reduce(
        (data, language) => ({
          ...data,
          [language]: (data[language] || 0) + 1,
        }),
        {}
      )

// adicionar as outras propriedades no stats com Object.keys
  stats = Object.keys(stats)
    .map(language => (
      {
        name: language,
        count: stats[language],
        color: langColors[language.toLowerCase()],
      }
    ))
    .sort((a, b) => b.count - a.count);

  return stats;
}
