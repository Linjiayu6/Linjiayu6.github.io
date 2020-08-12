import React from 'react'

const list = [
    'Event Loop@linjiayu',
    'Redux code@linjiayu',
    'Redux / Koa Middleware@linjiayu',
    'Sorting Algorithms@linjiayu',
    'CRC32@linjiayu',
    'Machine Learning@linjiayu'
]
const url = 'https://github.com/Linjiayu6/Tech-Sharing'

export default function () {
    return (
        <main>
          <h3># TECH SHARING 🤪</h3>
          <ul>
            {list.map((item, key) => <li key={key}><a href={url}>{item}</a></li>)}
          </ul>
          <p>More Projects See <a href={url}>Tech-Sharing</a></p>
      </main>
    )
}