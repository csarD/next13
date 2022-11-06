import Image from 'next/image'

import styles from './page.module.css'


const fetchPosts=()=>{
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}


export default async function Home() {
  const posts= await fetchPosts()
  return (
    <div className={styles.container}>
      Hola POSTs
      {
        posts.map(post =>(
          <article key ={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))
      }
    </div>
  )
}
