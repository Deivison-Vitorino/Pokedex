import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import ListPokemonsPage from "../pages/ListPokemonsPage";
import PokedexPage from "../pages/PokedexPage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListPokemonsPage />} />
        <Route exact path="/pokedex" element={<PokedexPage />} />
        <Route exact path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
