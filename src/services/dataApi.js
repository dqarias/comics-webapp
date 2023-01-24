import axios from "axios";

const MARVEL_PUBLIC_KEY = "6b295634d4fb10503ed5a3c2477e0bf5";
const MARVEL_PRIVATE_KEY = "249a8aa1cadf60e557bccc84af9c4b8b9e96098d";
const HASH = "53fa5cd8bc8febb8d519ba07355782b4";

const fetchData = async () => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${HASH}`
  );
  const data = response.data.data.results;
  console.log(data);
  return data;
};

export { fetchData };
