import CharacterDetail from "../components/CharacterDetail";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();

  return <CharacterDetail id={id} />;
}

export default Character;
