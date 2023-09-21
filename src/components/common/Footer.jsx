import logo from '../../assets/icons/logo.svg'
import styles from '../../style'

const Footer = () => {
  return (
    <footer>
      <div  className={`flex flex-col sm:flex-row ${styles.boxWidth} px-[40px] pt-[40px] sm:pb-[40px] pb-[100px] items-center justify-between`}>
        <div className='flex flex-col items-center sm:flex-row'>
          <img 
          src={logo} 
          alt="" 
          width={24}
          height={24}
          />
          <p className={`${styles.text} font-semibold`}>
            &copy; Oli Harris 2023
          </p>
        </div>
        <div>
            <ul className={`${styles.text} font-semibold flex gap-[20px] `}>
              <li>
                <a href="/" className='hover:text-secondary'>
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className='hover:text-secondary'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/" className='hover:text-secondary'>
                  Mail
                </a>
              </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer