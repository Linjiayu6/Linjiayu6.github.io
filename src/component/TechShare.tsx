import React from 'react'

const list: string[] = [
    'Event Loop@linjiayu',
    'Redux code@linjiayu',
    'Redux / Koa Middleware@linjiayu',
    'Sorting Algorithms@linjiayu',
    'CRC32@linjiayu',
    'Machine Learning@linjiayu'
]
const url: string = 'https://github.com/Linjiayu6/Tech-Sharing'

export default function () {
    return (
        <main>
          <h3># TECH SHARING <span role="img" aria-label="l">🤪</span></h3>
          <ul>
            {list.map((item, key) => <li key={key}><a href={url}>{item}</a></li>)}
          </ul>
          <p>More Projects See <a href={url}>Tech-Sharing</a></p>
      </main>
    )
}