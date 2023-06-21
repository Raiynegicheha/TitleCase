function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");
