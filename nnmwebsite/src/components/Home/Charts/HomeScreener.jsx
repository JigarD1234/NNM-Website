import React, { useEffect, useRef, memo } from 'react';

function HomeScreener() {
    const container = useRef();

    useEffect(() => {
        if (!document.getElementById('tradingview-widget-script-screener')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
            script.id = 'tradingview-widget-script-screener';
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
                "width": "100%",
                "height": 550,
                "defaultColumn": "overview",
                "defaultScreen": "volume_leaders",
                "market": "india",
                "showToolbar": true,
                "colorTheme": "dark",
                "locale": "en"
            }`;
            container.current.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
           
        </div>
    );
}

export default memo(HomeScreener);
