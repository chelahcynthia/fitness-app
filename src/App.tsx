import Navbar from "@/scenes/navbar";
import { useState } from "react";

enum selectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"

}


function App() {
  const [selectedPage, setSelectedPage] = useState<selectedPage>("home");

  return (
    <div className="app bg-gray-20 ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

