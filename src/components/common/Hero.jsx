import styles from "../../style"
import { heroCTA, heroMain } from "../../constant"

const Hero = ({section, index, title}) => {
  return (
    <main className={`${styles.heroPadding} ${styles.heroBoxWidth}`}>
      {section === heroMain 
      ? <div className={`gap-[40px] flex flex-col ${index === 1 ? "py-[270px]" : "py-[150px]"} ${index === 3 || index === 4 ? "py-[10px]" : null }`}>
          {index === 0 || index === 1
          ? <h1 className={`${styles.heading1} text-center`}>
              {section[index].description}
            </h1>
          : <div className={`${styles.flexCenter} flex-col` }>
              <p className={`${styles.roundedborder} mb-5`}>
                {title}
              </p>
              <h2 className={`${styles.heading2} text-center`}>
                {section[index].description}
              </h2>
            </div>
          }
          {index !== 1 && index !== 2 && index !== 3 && index !== 4
          ?<div className={`${styles.flexCenter} gap-[20px]`}>
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
          :null
          }
        </div>
      : <div className={`${styles.heroPadding} text-center h-[40vh] flex flex-col justify-center items-center`}>
          <h2 className={`${styles.heading2} text-center`}>
            {section[index].description}
          </h2>
          <h2>
            <a 
              href={heroCTA[index].link}
              className={`${styles.heading2} text-secondary hover:text-black`}
            >
              Get in touch
            </a>
          </h2>
        </div>
      }
  </main>
  )
}

export default Hero
