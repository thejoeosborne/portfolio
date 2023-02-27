import React, { useRef } from "react"
import styles from "../css/banner.module.css"

export default function AnimatedBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  // use React hooks to start the animation on component mount
  React.useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.classList.add(styles.move)
    }
  }, [])

  return (
    <div className={styles.banner} ref={bannerRef}>
      <span>Text that moves</span>
    </div>
  )
}
