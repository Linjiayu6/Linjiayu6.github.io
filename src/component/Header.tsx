import React from 'react'
// import Lottie from 'lottie-react-web'
// import axios from 'axios'

/**
 * lottieJSON
 * assets: 图片
 * fr: 帧率
 * h / w: 高 宽
 * layers: 图层
 * nm: name
 */
const Header: React.FC = () => {
  // const [lottieJSON, setLottie] = useState(null)

  // useEffect(() => {
  //   const fetch = async () => {
  //     const body = await axios.get('https://assets7.lottiefiles.com/private_files/lf30_AGoC3n.json')
  //     if (body && body.data) {
  //       const data = body.data
  //       setLottie(data)
  //     }
  //   }

  //   fetch()
  // }, [])

  return (
    <header>
      <h1>Lin. JY</h1>
      <p><span role="img" aria-label="l">🤠</span> An engineer and explorer. Let's improve everything.</p>
      {/* {
        lottieJSON && <div className="lotte-container">
          <Lottie 
            title="lottie"
            options={{ animationData: lottieJSON }}
          />
        </div>
      } */}
    </header>
  )
}

export default Header