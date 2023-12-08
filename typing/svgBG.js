

const html=`<linearGradient id="bg1" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0" style="stop-color:limegreen">
  <animate attributeName="offset" dur="5s" values="-1;1" repeatCount="indefinite"/>
</stop>
<stop offset="-0.3" style="stop-color:lime">
  <animate attributeName="offset" dur="5s" values="-0.8;1.2" repeatCount="indefinite"/>
</stop>
<stop offset="-0.6" style="stop-color:white">
<animate attributeName="offset" dur="5s" values="-0.6;1.4" repeatCount="indefinite"/>
</stop>
  <stop offset="-0.9" style="stop-color:lime">
    <animate attributeName="offset" dur="5s" values="-0.4;1.6" repeatCount="indefinite"/>
</stop>
<stop offset="-1.2" style="stop-color:limegreen">
  <animate attributeName="offset" dur="5s" values="-0.2;1.8" repeatCount="indefinite"/>
</stop>
</linearGradient>


<radialGradient id="bg2" cy="50%" r="80%">
<stop offset="0" style="stop-color:orangered" closest-corner>
  <animate attributeName="offset" dur="3s" values="0;1" repeatCount="indefinite"/>
</stop>
      <stop offset="0" style="stop-color:darkblue" closest-corner>
  <animate attributeName="offset" dur="3s" values="0;1.6" repeatCount="indefinite"/>
</stop>
<stop offset="0" style="stop-color:orange" closest-corner>
  <animate attributeName="offset" dur="3s" values="0;1.9" repeatCount="indefinite"/>
</stop>
<stop offset="0" style="stop-color:yellow" closest-corner>
<animate attributeName="offset" dur="3s" values="0;2.3" repeatCount="indefinite"/>
</stop>
  <stop offset="0" style="stop-color:white" closest-corner>
    <animate attributeName="offset" dur="3s" values="0;2.5" repeatCount="indefinite"/>
</stop>
<stop offset="0" style="stop-color:orangered" closest-corner>
  <animate attributeName="offset" dur="3s" values="0;2.7" repeatCount="indefinite"/>
</stop>
</radialGradient>

<!--
<pattern id="bg3" width="100%" height="100%">
<rect y="0" width="100%" height="100%">
<animate attributeName="fill" values="orangered;orange;gold;yellow;gold;orange;orangered" dur="2.5s" repeatCount="indefinite">  
</rect>

</pattern>
  <pattern id="bdr3" width="100%" height="100%">
<rect y="0" width="100%" height="100%" fill="blue">
<animate attributeName="fill" values="orangered;orange;gold;yellow;gold;orange;orangered" begin=".5s" dur="2.5s" repeatCount="indefinite">  
</rect>
      
      </pattern>-->

      

`


// const html=`<div>aa</div>`



document.querySelector("defs.borderDefs").insertAdjacentHTML("beforeend",html)