import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500 flex">
            <img src="https://cdn.discordapp.com/attachments/1223496785373433977/1223542280686932048/isolated_hamburger_with_splash_ink_background-removebg-preview.png?ex=661a3b8c&is=6607c68c&hm=ab13fd5d497c0e7c3e6d0c75eb1975593bd48659efa1fb2a5b500542936d17f9&" className="w-10 h-10" />
                CurryCourier.com    
            </Link>
        <div className="md:hidden">
            <MobileNav/>
        </div>
        <div className="hidden md:block">
          <MainNav></MainNav>
        </div>
        </div>
    </div>
  )
}

export default Header;