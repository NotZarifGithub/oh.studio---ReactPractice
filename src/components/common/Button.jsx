import styles from "../../style"

const Button = () => {
  return (
    <button className={`${styles.text} fixed py-2 text-white transform -translate-x-1/2 bg-black rounded-full cursor-pointer px-7 bottom-10 left-1/2 hover:scale-95 transition duration-150 z-50`}>
       <a 
        href="/">
        Shop
       </a>
    </button>
  )
}

export default Button