#! /bin/bash
node gameResources/isGameOver.js
while [[ $? -ne '1' ]]
do
  read -p 'your move : ' move
  if [ -z ${move} ]; then
  continue
  fi
  node gameResources/moveFly.js "${move}" "templates/index_template.html" 
  open index.html
  node gameResources/isGameOver.js
done

echo 'gameOver'