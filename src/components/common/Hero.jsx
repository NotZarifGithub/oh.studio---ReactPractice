import styles from "../../style"
import { heroCTA, heroMain } from "../../constant"

const Hero = ({section}) => {
  return (
    <main className={`${styles.heroPadding} ${styles.heroBoxWidth}`}>
      {section === heroMain 
      ? <div className="gap-[40px] flex flex-col py-[150px]">
          <h1 className={`${styles.heading1} text-center`}>
            {section[0].description}
          </h1>
          <div className={`${styles.flexCenter} gap-[20px]`}>
            <div>
              <p className={`${styles.text}`}>
                Expertise
              </p>
            </div>
            <p className={`${styles.roundedborder} ${styles.text}`}>
              Branding
            </p>
            <p className={`${styles.roundedborder} ${styles.text}`}>
              Product
            </p>
            <p className={`${styles.roundedborder} ${styles.text}`}>
              Design Systems
            </p>
          </div>
        </div>
      : <div className="text-center flex flex-col py-[150px]" >
          <h2 className={`${styles.heading2} text-center`}>
            {section[0].description}
          </h2>
          <h2>
            <a 
            href={heroCTA[0].link}
            className={`${styles.heading2} text-secondary hover:text-black`}>
              Get in touch
            </a>
          </h2>
        </div>
      }
  </main>
  )
}

export default Hero
