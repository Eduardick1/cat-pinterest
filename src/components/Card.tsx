import { memo } from "react";
import type { ICat } from "../utils/types";
import { useAppDispatch } from "../Redux/store";
import { toggleFav } from "../Redux/favSlice";
import FavLabel from "./FavLabel";

const Card = memo(({ card }: { card: ICat }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="Card">
      <img src={card.url} alt={card.id} loading="lazy" />
      <span className="Card__fav" onClick={() => dispatch(toggleFav(card))}>
        <FavLabel id={card.id} />
      </span>
    </div>
  );
});

export default Card;
