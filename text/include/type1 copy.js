document.write(`
<radialGradient id="type1_1" cy="50%" r="100%" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:darkblue">
                <animate attributeName="offset" dur="3s" values="0;1" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:cyan">
                <animate attributeName="offset" dur="3s" values="0;1.7" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:white">
                <animate attributeName="offset" dur="3s" values="0;2.2" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:cyan">
                <animate attributeName="offset" dur="3s" values="0;2.5" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:darkblue">
                <animate attributeName="offset" dur="3s" values="0;2.7" repeatCount="indefinite"/>
                </stop>
            </radialGradient>

            <radialGradient id="type1_2" cy="50%" r="100%" gradientUnits="userSpaceOnUse">
                <stop style="stop-color:rgb(0, 0, 0)">
                <animate attributeName="offset" dur="3s" values="0;1" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:navy">
                <animate attributeName="offset" dur="3s" values="0;1.7" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:white">
                <animate attributeName="offset" dur="3s" values="0;2.2" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:cyan">
                <animate attributeName="offset" dur="3s" values="0;2.5" repeatCount="indefinite"/>
                </stop>
                <stop style="stop-color:rgb(0, 0, 0)">
                <animate attributeName="offset" dur="3s" values="0;2.7" repeatCount="indefinite"/>
                </stop>
            </radialGradient>

`)

console.log("include")