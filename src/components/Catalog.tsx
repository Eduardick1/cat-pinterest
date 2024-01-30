import { Fragment, useEffect, useState } from "react";
import { fetchCats, selectCats } from "../Redux/catSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import CardsContainer from "./CardsContainer";
import Card from "./Card";

export default function Catalog() {
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState<number>(0);
  const { cats, isError, isLoading } = useAppSelector(selectCats);
  useEffect(() => {
    dispatch(fetchCats(currPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  return (
    <CardsContainer setFunc={setCurrPage} Loading={isLoading} Error={isError}>
      {cats.map((cat) => (
        <Fragment key={cat.id}>
          <Card card={cat} />
        </Fragment>
      ))}
    </CardsContainer>
  );
}
