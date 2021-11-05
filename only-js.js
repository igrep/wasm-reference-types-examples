/**
 * @param {Node} elem
 * @returns {Node}
 */
export function get_first_child(elem) {
  return elem.firstChild;
}

/**
 * @param {Element} elem
 */
export function append_and_remove(elem) {
  const child = document.createElement('br');
  elem.append(child);
  elem.removeChild(child);
}

async function init(_) {
  /* do nothing */
}

export default init;
