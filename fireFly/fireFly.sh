#! /bin/bash

function main () {
  local gameResourcesPath="$1"
  node ${gameResourcesPath}/createGameBoard.js
  open "index.html"
  node ${gameResourcesPath}/isGameOver.js

  while [[ $? -ne '1' ]]
  do
    read -p 'your move : ' move

    if [ -z ${move} ]; 
    then
      continue
    fi
    node ${gameResourcesPath}/moveFly.js "${move}" "templates/index_template.html" 

    node ${gameResourcesPath}/isGameOver.js
  done
}

main "./gameResources"
echo "GAME OVER"