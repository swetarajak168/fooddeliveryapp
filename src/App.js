
import './App.css';
import { useEffect} from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
 
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);
  
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
     
  );
}

export default App;
