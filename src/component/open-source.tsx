import React from 'react'
import CONFIG, { IKey } from '../config/constant'

interface IPROPS {}

interface ISTATE {
  _config: {
    title: string;
    name: string;
  }[]
}

class OpenSource extends React.Component<IPROPS, ISTATE> {
  state = {
    _config: [
      { title: '🔭 FRONT END', name: 'FE' },
      { title: '🌱 ARTIFICIAL INTELLIGENCE', name: 'AI' },
      { title: '📚 BASIC', name: 'BASIC' }
    ]
  }

  redirectToUrl (url?: string) {
      return url ? 
        <a href={url} style={{ color: '#ccc', fontSize: '16px' }}>
          DEMO <span role="img" aria-label="l">🚀 </span>
        </a> : null
  }

  renderConfig ({ title, name }: 
    { title: string; 
      name: IKey;
    }) {
      return (
        <div key={name}>
          <h4>{ title }</h4>
          <ul>
            {
              CONFIG[name] && CONFIG[name].map((item, key) => (
                <li key={key}>
                  <div>
                      <a className="name" href={`https://github.com/Linjiayu6/${item.name}`}>{ item.name }</a>
                      {
                        this.redirectToUrl(item.link)
                      }
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
        <h3># OPEN SOURCE <span role="img" aria-label="l">🧐</span></h3>
        {
          this.state._config.map(({ name, title }: any) => this.renderConfig({ name, title }))
        }
        <p>More Projects See <a href="https://github.com/Linjiayu6">GitHub</a></p>
      </main>
    ) 
  }
}

export default OpenSource