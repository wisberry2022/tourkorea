import Header from "../MainPage/header/Header";
import Footer from "../MainPage/footer/Footer";
import Contents from "./Contents";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import Router from "next/router";

const Sub = () => {
  const { logState } = useSelector((state: RootState) => state.logState);

  return (
    <>
      <Header />
      {logState ?
        <main>
          <Contents />
        </main> :
        Router.push("/")
      }
      <Footer />
    </>
  )
}

export default Sub;