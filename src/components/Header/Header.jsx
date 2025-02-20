import "./Header.css";
import netflixLogo from "../../assets/images/netflix-logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul className="header-left-list">
            <li className="netflix-logo">
              <img src={netflixLogo} alt="Netflix-Logo" width={100} />
            </li>
            <li> NetFlix</li>
            <li> Home</li>
            <li>Tvshows </li>
            <li>Movies </li>
            <li> Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right">
            <ul className="header-right-list">
                <li>< FaSearch/></li>
                <li><IoIosNotificationsOutline/></li>
                <li><MdAccountBox/></li>
                <li><IoMdArrowDropdown/></li>
         </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;