import styles from "../../style"
import { navLink } from "../../constant"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

  const location = useLocation()
  return (
    <div className={`sm:py-[30px] py-[20px] sm:px-[40px] px-[20px] ${styles.flexCenter} sticky top-0 z-50`}>
      <nav className= ''>
        <ul className={`${styles.flexCenter} bg-[rgba(232,229,228,0.5)] rounded-full backdrop-blur-md space-x-1`}>
          {navLink.map((link) => (
            <li key={link.id} className={`px-7 py-2 m-1 rounded-full ${location.pathname === link.url ? "bg-white" : ""}`}>
              <Link to={link.url} className={` space-x-6 ${styles.text} `}>
                {link.id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar


