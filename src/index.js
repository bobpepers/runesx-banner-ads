import React, { useEffect, useState } from 'react'

const isScriptLoaded = (src) => {
  return !!document.querySelector(
    'script[src="https://www.runesx.com/uploads/runesx.js"]'
  )
}
const RunesBannerAd = (props) => {
  const { adZoneId, triggers } = props
  const [rerender, setRerender] = useState(1)
  if (!isScriptLoaded) {
    useEffect(() => {
      const s = document.createElement('script')
      setRerender(rerender + 1)
      s.type = 'text/javascript'
      s.src = 'https://www.runesx.com/uploads/runesx.js'
      document.body.appendChild(s)
      return () => {
        document.body.removeChild(s)
      }
    }, triggers)
  }
  return <div id={`runesx-${adZoneId}`} key={rerender} />
}

export default RunesBannerAd
