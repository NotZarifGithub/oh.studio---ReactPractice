import styles from "../../style"
import { experienceList } from "../../constant"

const Experience = () => {
  return (
    <div className={`grid grid-cols-3 gap-[10px] ${styles.boxWidth} pb-[50px]`}>
      {experienceList.map((item) => (
        <div className="flex flex-col items-center mt-[20px] justify-center text-center py-[30px] px-[140px]">
          <p className={`${styles.text} py-[5px] text-secondary`}>
            {item.year}
          </p>
          <h4 className={`${styles.heading4} py-[5px]`}>
            {item.company}
          </h4>
          <p className={`${styles.text} py-[5px] text-secondary`}>
            {item.position}
          </p>
          <div className={`${styles.roundedborder} mt-[15px]`}>
            <p className={`${styles.text}`}>
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience