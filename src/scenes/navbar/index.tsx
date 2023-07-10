import { useState } from "react";
import { Bars3Icon, XMarkIcon  } from "@heroicons/react/24/solid";
import Logo from " @/assets/Logo.png";
import Link from "./Link";



type Props = {}

const Navbar = (props: Props) => {
    const flexBetween =  "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";



  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full`}>
        <div className={`${flexBetween} mx-auto w-5/6`} >
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side of the navbaf */}
            
            </div>  
        </div>

    </div>
    
  </nav>
}

export default Navbar