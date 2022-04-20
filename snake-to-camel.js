function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function snakeToCamel(variableName) {
  // split into an array and uppercase starting from the second word
  // return a joined array of words
  const words = variableName.split("_");
  for (let i = 1; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join("");
}