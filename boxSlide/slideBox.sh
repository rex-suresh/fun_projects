#! /bin/bash

function main () {
  local slideLimit="$1"
  local frames="$2"
  local time="$3"
  local currentPos="0"
  
  open index.html
  while [[ currentPos -le slideLimit ]];
  do
    node createStyle.js "${slideLimit}" "${frames}" "${time}"
    currentPos=$(grep "right" "./boxPosition.json" | cut -f 2 -d':');
    sleep 0.1
  done
}

main "500" "30" "3"
