import Image from 'next/image'
import styles from './page.module.css'

export default function Home({params}) {
  return (
    <div className={styles.container}>
      esto es un post individual {params.id}
    </div>
  )
}
