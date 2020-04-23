/*All Untility Function*/
function convertToSlug(Text) {
  return Text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

text_truncate = function(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
