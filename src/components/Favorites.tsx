import CardsContainer from "./CardsContainer";
import { useAppSelector } from "../Redux/store";
import { selectFavs } from "../Redux/favSlice";
import Card from "./Card";

export default function Favorites() {
  const favs = useAppSelector(selectFavs);

  if (!favs.length)
    return (
      <div className="Fav_not_found">
        <div className="image" />
        <h1>Список избранного пуст</h1>
        <p>Добавляйте изображения, нажимая на сердечки!</p>
      </div>
    );

  return (
    <CardsContainer>
      {favs.map((fav) => (
        <Card card={fav} />
      ))}
    </CardsContainer>
  );
}
