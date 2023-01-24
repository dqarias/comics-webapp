import axios from "axios";
import MD5 from "crypto-js/md5";

//const API_URL = process.env.MARVEL_API_URL;
const MARVEL_PUBLIC_KEY = "6b295634d4fb10503ed5a3c2477e0bf5";
const MARVEL_PRIVATE_KEY = "249a8aa1cadf60e557bccc84af9c4b8b9e96098d";

const getHash = (ts, privateKey, apiKey) => {
  return MD5(ts + privateKey + apiKey).toString();
};

const fetchData = async () => {
  let baseUrl = `https://gateway.marvel.com/v1/public/comics`;
  let ts = Date.now().toString();
  /*   let apiKey = process.env.MARVEL_PUBLIC_KEY;
  let privateKey = process.env.MARVEL_PRIVATE_KEY; */
  let apiKey = MARVEL_PUBLIC_KEY;
  let privateKey = MARVEL_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  console.log(hash);

  let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchData };
