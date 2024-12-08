import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Front from "./components/front";
import FProduct from "./components/fproduct";
import Latest from "./components/latest"
import Discount from "./discount";
import Blog from "./blog";
import What from "./components/what";
import Trending from "./components/trending";
import Purple from "./components/purple";

import Container from "./container";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Front/>
      <FProduct/>
      <Latest/>
      <What/>
      <Purple/>
      <Trending/>
      <Discount/>
  
    <Container/>
     
      <Blog/>

    </div>
  );
}
