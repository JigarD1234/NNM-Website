
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
    if (!document.getElementById('tradingview-widget-script')){
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.id = 'tradingview-widget-script';
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "container_id": "basic-area-chart-demo",
            "width": "100%",
            "height": "100%",
            "autosize": true,
            "symbol": "AAPL",
            "interval": "D",
            "timezone": "exchange",
            "theme": "light",
            "style": "3",
            "hide_top_toolbar": true,
            "save_image": false
          }`;
        container.current.appendChild(script);
    }
    },
    []
  );

  return (
   <div className='sensex-chart'>
     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>
     
    </div>
   </div>
  );
}

export default memo(TradingViewWidget);
