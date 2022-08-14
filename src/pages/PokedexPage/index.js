import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GlobalContext } from "../../hooks/useGlobalState";
import { ListPokemonsContainer } from "../ListPokemonsPage/style";

export default function PokedexPage() {
  const { pokedex, removePokedex } = useContext(GlobalContext);

  return (
    <ListPokemonsContainer>
      <Header
        button={
          <div>
            <button>
              <NavLink to={"/"}>Ir para Home</NavLink>
            </button>
          </div>
        }
      />
      {pokedex &&
        pokedex.map((item) => (
          <Card fun={removePokedex} pokemons={item} actionOne={"Remover"} />
        ))}
        <Footer/>
    </ListPokemonsContainer>
  );
}
