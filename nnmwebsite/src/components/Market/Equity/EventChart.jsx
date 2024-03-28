import React, { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const scriptId = 'tradingview-widget-script-events'; // Unique ID for the script
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.id = scriptId; // Set the unique ID
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "in",
        "importanceFilter": "-1,0,1",
        "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
   <div className='event-chart'>
     <div className="tradingview-widget-container" style={{width:"100%",height:"100%"}} ref={container}>
      <div className="tradingview-widget-container__widget"></div>
     
    </div>
   </div>
  );
}

export default TradingViewWidget;
