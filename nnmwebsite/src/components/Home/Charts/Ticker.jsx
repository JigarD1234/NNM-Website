import React, { useEffect, useRef, memo } from 'react';

function TickerTapeWidget() {
    const container = useRef();

    useEffect(() => {
        if (!document.getElementById('tradingview-widget-script-ticker-tape')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.id = 'tradingview-widget-script-ticker-tape';
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
                "symbols": [
                    {
                        "description": "BSE SENSEX",
                        "proName": "BSE:SENSEX"
                    },
                    {
                        "description": "BSE MIDCAP",
                        "proName": "BSE:MIDCAP"
                    },
                    {
                        "description": "BSE SMALLCAP",
                        "proName": "BSE:SMLCAP"
                    },
                    {
                        "description": "BSE LARGECAP",
                        "proName": "BSE:LRGCAP"
                    },
                    {
                        "description": "BSE 500 index",
                        "proName": "BSE:BSE500"
                    }
                ],
                "showSymbolLogo": true,
                "isTransparent": false,
                "displayMode": "adaptive",
                "colorTheme": "dark",
                "locale": "in"
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

export default memo(TickerTapeWidget);
