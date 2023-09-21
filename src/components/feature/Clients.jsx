import styles from "../../style"
import { clientsList } from "../../constant"

const Clients = () => {
  return (
    <div className={`grid grid-cols-4 ${styles.boxWidth} pt-[40px]`}>
        {clientsList.map((item) => (
            <div className="flex items-center justify-center text-center py-[80px] px-[140px]">
                <img 
                src={item.image} 
                alt="image" 
                width={50}
                />
            </div>
        ))}
    </div>
  )
}

export default Clients