import { showcaseHome } from "../../constant"
import styles from "../../style"

const Button = ({index1, index2}) => {
  return (
    <div className={`flex gap-[20px] ${styles.paddingX} pt-[40px] ${styles.boxWidth}`}>
      <div className={`max-w-[650px] h-auto w-[100%]` }>
        <img 
        src={`${showcaseHome[index1].source}`} 
        alt="image"
        className="rounded-[10px] hover:blur-lg"
        />
      </div>
      <div className="max-w-[650px] h-auto w-[100%]">
        <img 
        src={`${showcaseHome[index2].source}`} 
        alt="image"
        className="rounded-[10px] hover:blur-lg"
        />
      </div>
    </div>
  )
}

export default Button