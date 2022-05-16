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
    currentPos=$((${currentPos} + 1))
    sleep 0.1
  done
}

main "100" "30" "3"
