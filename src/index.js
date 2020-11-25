import React, { useEffect, useState } from 'react'

const RunesBannerAd = (props) => {
  const { adZoneId, triggers } = props
  const [rerender, setRerender] = useState(1)
  var scriptIsLoaded =
    document.querySelectorAll(
      "script[src='https://www.runesx.com/uploads/runesx.js']"
    ).length > 0

  if (scriptIsLoaded) {
    console.log('true')
  }
  if (!scriptIsLoaded) {
    console.log('false')
  }

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

  return <div id={`runesx-${adZoneId}`} key={rerender} />
}

export default RunesBannerAd
