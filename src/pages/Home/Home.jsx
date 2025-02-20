import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};
export default Home;
