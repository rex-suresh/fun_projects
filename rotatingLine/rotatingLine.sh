LINE_FUNCTIONS='horizontalLine crossLineLeft verticalLine crossLineRight';
lineWidth=11;

while [ $lineWidth -gt 0 ]
do
  for lineFn in ${LINE_FUNCTIONS}
  do
    clear;
    pattern=`node -p <<< "const srcFns = require('./generateLine.js');
    const ${lineFn} = srcFns.${lineFn};
    srcFns.generatePattern(${lineWidth}, ${lineFn});"`

    echo -e "\n${pattern}\n";
    sleep 0.01;
  done
done
clear;