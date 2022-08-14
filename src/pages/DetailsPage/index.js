import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { URL_BASE } from "../../services/api";
import axios from "axios";
import Header from "../../components/Header";
import {
  ImagesContainer,
  ImgWrapper,
  PokeInfosContainer,
  StatsContainer,
  TitleContainer,

} from "./style";
import Footer from "../../components/Footer";

export default function DetailsPage() {
  const { name } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/${name}`)
      .then((resposta) => {
        setDetail(resposta.data);
      })
      .catch((erro) => {
        alert(erro);
      });
  }, [name]);

  return (
    <div>
      <Header
        button={
          <div>
            <button>
              <NavLink to={"/pokedex"}>pokedex</NavLink>
            </button>
            <button>
              <NavLink to={"/"}>Home</NavLink>
            </button>
          </div>
        }
      />
      {detail && detail.sprites && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper src={detail.sprites.front_default} />
            <ImgWrapper src={detail.sprites.back_default} />
          </ImagesContainer>
          <StatsContainer>
            <TitleContainer>Poderes</TitleContainer>
            {detail &&
              detail.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                );
              })}
          </StatsContainer>
        </PokeInfosContainer>
      )}
      <Footer/>
    </div>
  );
}
