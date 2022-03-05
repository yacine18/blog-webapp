import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <PostsList />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
