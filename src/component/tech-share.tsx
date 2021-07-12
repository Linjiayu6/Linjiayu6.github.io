import React from 'react'

const list: string[] = [
    'Event Loop @Lin.JY',
    'Redux code @Lin.JY',
    'Redux / Koa Middleware @Lin.JY',
    'Sorting Algorithms @Lin.JY',
    'CRC32 @Lin.JY',
    'Machine Learning @Lin.JY'
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