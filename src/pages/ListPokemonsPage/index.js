import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { GlobalContext } from "../../hooks/useGlobalState";
import { ListPokemonsContainer } from "./style";
import Footer from "../../components/Footer";

export default function ListPokemonsPage() {
  const { pokemons, handlePokedex } = useContext(GlobalContext);

  return (
    <ListPokemonsContainer>
      <Header
        button={
          <div>
            <button>
              <NavLink to={"/pokedex"}>pokedex</NavLink>
            </button>
          </div>
        }
      />
      {pokemons &&
        pokemons.map((item) => (
          <Card
            fun={handlePokedex}
            pokemons={item}
            actionOne={"Capturar"}
            actionSec={"detalhes"}
          />
        ))}
        <Footer/>
    </ListPokemonsContainer>
  );
  
}
