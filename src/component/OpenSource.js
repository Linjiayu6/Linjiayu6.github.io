import React from 'react'
import CONFIG from '../config/opensouce'
// import axios from 'axios'
// const url = 'https://api.github.com/users/linjiayu6/repos'

class OpenSource extends React.Component {
//   componentDidMount () {
//     this.fetch().then(data => {
//       console.log(data)
//     })
//   }
//   async fetch () {
//     // https://developer.github.com/v3/#rate-limiting
//     var data = await axios.get(url)
//     return data
//   }

  renderIconByGithub () {
      return <svg t="1597226966753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1136" data-spm-anchor-id="a313x.7781069.0.i1" width="200" height="200"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" p-id="1137" fill="#ffffff"></path></svg>
  }

  renderConfig ({ title, configName }) {
      return (
        <div>
          <h5>{ title }</h5>
          <ul>
            {
              CONFIG[configName] && CONFIG[configName].map((item, key) => (
                <li key={key}>
                  <div>
                      <a className="name" href={`https://github.com/Linjiayu6/${item.name}`}>{ item.name }</a>
                      <span className="desc">{item.desc}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      )
  }

  render () {
    return (
      <main>
        <h3># OPEN SOURCE 🧐</h3>
        { this.renderConfig({ title: '🔭 FRONT END', configName: 'FE' }) }
        { this.renderConfig({ title: '🌱 ARTIFICIAL INTELLIGENCE', configName: 'AI' }) }
        { this.renderConfig({ title: '📚 BASIC', configName: 'BASIC' }) }
        <p>More Projects See <a href="https://github.com/Linjiayu6">GitHub</a></p>
      </main>
    ) 
  }
}

export default OpenSource