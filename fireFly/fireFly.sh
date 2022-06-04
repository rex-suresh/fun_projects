#! /bin/bash
function startGame () {
  local gameResourcesPath="$1"

  node ${gameResourcesPath}/createGameBoard.js
  open "index.html"
}

function main () {
  local gameResourcesPath="$1"
  startGame "${gameResourcesPath}"

  node ${gameResourcesPath}/isGameOver.js
  while [[ $? -ne '1' ]]
  do
    echo 'Select your move : '
    select move in "up" "down" "left" "right";
    do
      if [ -n ${move} ];
      then
        echo ${move}
        break;
      fi
    done
    
    node ${gameResourcesPath}/moveFly.js "${move}" "templates/index_template.html" 

    node ${gameResourcesPath}/isGameOver.js
  done
echo "GAME OVER !!!"
}

main "./src/gameResources"
