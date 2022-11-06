import './globals.css'
import Link from "next/link"

const links=[{
  label:"home",
  route: "/"
},
{
  label:"try",
  route: "/try"
},
{
  label:"POSTS",
  route: "/post"
},
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
     
      <body>
        <header>
        <nav>
      <ul>
      {
        links.map(e =>(
          <li key={e.route}>
            <Link href={e.route}>{e.label}</Link>

          </li>
        ))
      }
      </ul>
      </nav>
      </header>
        {children}</body>
    </html>
  )
}
