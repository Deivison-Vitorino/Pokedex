import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../services/api";

export default function UseRequestData(initialState, paths) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${URL_BASE}${paths}`)
      .then((resposta) => {
        setData(resposta.data.results);
      })
      .catch((erro) => {
        alert(erro);
      });
  }, [paths]);
  return data;
}
