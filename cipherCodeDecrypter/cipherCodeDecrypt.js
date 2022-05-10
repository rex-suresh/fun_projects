const codeKeyGen = function (startPos) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let index = startPos;
  const cipherKey = { ' ': ' '};

  for (const letter of alphabets) {
    cipherKey[letter] = alphabets[index % alphabets.length];
    index++;
  }
  return cipherKey;
};

const generateAllKeys = function () {
  const keyList = [];
  const alphabetsCount = 26;
  
  for (let keyPos = 0; keyPos < alphabetsCount; keyPos++) {
    keyList.push(codeKeyGen(keyPos));
  }
  return keyList;
};

const changeText = function (text, key) {
  const cipherText = text.toLowerCase();
  let decryptedText = '';

  for (const letter of cipherText) {
    decryptedText += key[letter];
  }

  return decryptedText;
};

const decrypt = function (text) {
  const cipherKeys = generateAllKeys();
  const decryptText = changeText.bind(null, text.toLowerCase());

  return cipherKeys.map(decryptText);
};

const encryptedText = process.argv[2];
// console.log(encryptedText);
// eslint-disable-next-line no-console
console.log(decrypt(encryptedText));
