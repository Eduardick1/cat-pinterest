import {
  useEffect,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import PRE_LOADER_SKELETON from "../utils/SKELETON";
import { LIMIT_CARDS } from "../utils/const";
import throttle from "lodash/throttle";

export default function CardsContainer({
  children,
  setFunc,
  Loading,
  Error,
}: {
  children: ReactNode;
  setFunc?: Dispatch<SetStateAction<number>>;
  Loading?: boolean;
  Error?: boolean;
}) {
  useEffect(() => {
    const handleScroll = throttle((e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      console.log(scrollHeight, currHeight, currHeight >= scrollHeight);
      if (currHeight + 300 >= scrollHeight && setFunc)
        setFunc((prev) => prev + 1);
    }, 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="Card__container">
      {children}
      {Loading ? (
        <PRE_LOADER_SKELETON
          number={LIMIT_CARDS}
          css={{ width: "250px", height: "250px" }}
        />
      ) : Error ? (
        <h1>OOPS... Some Error during fetching!!!</h1>
      ) : null}
    </div>
  );
}
