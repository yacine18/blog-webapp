import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
