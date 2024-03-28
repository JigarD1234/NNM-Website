import React, { useEffect, useRef } from 'react';

function TradingViewTechnicalAnalysisWidget() {
  const container = useRef();
  const scriptId = 'tradingview-widget-script-technical-analysis'; // Unique identifier for this script

  useEffect(() => {
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "interval": "1m",
          "autosize":"true",
          "isTransparent": false,
          
          "symbol": "NASDAQ:AAPL",
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": "dark"
        }`;
      container.current.appendChild(script);
    }
  }, [scriptId]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{height:"60vh"}}></div>
    </div>
  );
}

export default TradingViewTechnicalAnalysisWidget;
