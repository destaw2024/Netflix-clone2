
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import styles from "./footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.outer_container}>
        <div>
          <ul>
            <li>
              <FaFacebook size={22} />
              <IoLogoInstagram size={22} />
              <BsYoutube size={22} />
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li className={styles.only_mobile}>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
            <li className={styles.only_mobile}>
              <a href="">Speed Test</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li className={styles.only_mobile}>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.footer_right_col}>
            <li>
              <a href="">Only on Netflix</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;