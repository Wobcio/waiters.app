import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import Page404 from "./components/Page404/Page404";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";


const App = () => {

  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  }

  const dispatch = useDispatch();
  useEffect( () => dispatch(fetchTables(handleLoading)), [dispatch]);
  
  

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route path="/table/:tableId" element={<Table />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
