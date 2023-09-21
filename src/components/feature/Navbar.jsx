import styles from "../../style"
import { navLink } from "../../constant"

const Navbar = () => {
  return (
    <div className={`sm:py-[30px] py-[20px] sm:px[40px] px[20px] ${styles.flexCenter} sticky top-0 z-50`}>
      <nav className= ''>
        <ul className={`${styles.flexCenter} bg-[rgba(232,229,228,0.5)] rounded-full backdrop-blur-md`}>
          {navLink.map((link) => (
            <li className='py-3 px-7'>
              <a 
              href="/"
              className={`${styles.text}`}>
                {link.id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar