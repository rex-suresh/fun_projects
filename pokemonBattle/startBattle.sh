#! /bin/bash

pokemons=`
  node -e "const pokemons = require('./resources/pokemons.json'); 
  Object.keys(pokemons).map(pokemon => console.log(pokemon))"`

function selectPokemon() {
  local pokemons="$1"
  select pokemon in ${pokemons}; 
  do 
    echo ${pokemon}
    break
  done

  return 0;
}

function selectMove() {
  local moves=( 'shield' 'attack' 'defend' )
  select move in ${moves[@]}; 
  do 
    echo ${move}
    break
  done
  return 0;
}

function createPlayerStats () {
  local player1=$1
  local player2=$2
  local statFile=$3
  node gameResources/createPlayers.js "${player1}" "${player2}" "${statFile}"
  
  if [[ ! -f "${statFile}" ]];
  then
    echo 'File Not Created' > /dev/stderr # error printing
    exit
  fi

  return 0;
}

echo -e "\nSelect Player 1 Pokemon\n"
player1=`selectPokemon "${pokemons}"`

echo -e "\nSelect Player 2 Pokemon\n"
player2=`selectPokemon "${pokemons}"`

gameFile="gameResources/playerStats.json"
createPlayerStats "${player1}" "${player2}" "${gameFile}"

node gameResources/isGameOver.js "${gameFile}"
while [[ $? -ne 1 ]]
do
  echo -e "\nselect a move - player 1 :\n"
  moveOne=$(selectMove)

  echo -e "\nselect a move - player 2 :\n"
  moveTwo=$(selectMove)
  
  node gameResources/playOneRound.js "${gameFile}" "${moveOne}" "${moveTwo}"
done;


echo 'Game Over'