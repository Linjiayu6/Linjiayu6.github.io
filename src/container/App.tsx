import React from 'react'
import Lottie from 'lottie-react-web'

// import _lottieJSON from '../config/lottie_start.json';
import Header from '../component/Header'
import OpenSource from '../component/OpenSource'
import TechShare from '../component/TechShare'
import Life from '../component/Life'

import '../style/App.css'

function App () {
  // const [isLoad, setLoading] = useState(true)
  // const [lottieJSON, setLottieJSON] = useState(_lottieJSON)

  // useEffect(() => {
  //   async function fetch () {
  //     try {
  //       // const body = await axios.get('https://assets4.lottiefiles.com/private_files/lf30_P9kQz3.json')
  //       if (body && body.data) {
  //         setLottieJSON(body && body.data)
  //       } else {
  //         setLoading(false)
  //       }
  //     } catch (error) {
  //       setLoading(false)
  //     }
  //   }
  //   fetch()
  // }, [])

  // const _renderLoad = () => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2500)
  //   return (
  //     <div className="lottie-animation">
  //       <h2>Loading ...</h2>
  //       <Lottie title="lottie" options={{ animationData: lottieJSON }} />
  //     </div>
  //   )
  // }

  const _render = () => (
    <div className="App">
      <Header />
      <hr />
      <OpenSource />
      <TechShare />
      <Life />
    </div>
  )

  return _render()
  // return isLoad ? _renderLoad() : _render()
}
export default App
