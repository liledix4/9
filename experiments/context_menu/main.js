const selector = {
  contextMenu: document.getElementById('context-menu'),
  document: document.documentElement,
};
let timeout = {};


function contextMenuShow(event) {
  event.preventDefault();
  clearTimeout(timeout.contextMenu);
  const allowedDistanceFromEdge = 10;
  const contextMenuStyle = selector.contextMenu.style;
  const bodyHeight = selector.document.clientHeight;
  const bodyWidth = selector.document.clientWidth;
  selector.contextMenu.classList.remove('hide');
  selector.contextMenu.classList.add('show');
  const contextMenuHeight = selector.contextMenu.offsetHeight;
  const contextMenuWidth = selector.contextMenu.offsetWidth;
  const contextMenuMaxTop = bodyHeight - contextMenuHeight - allowedDistanceFromEdge;
  const contextMenuMaxLeft = bodyWidth - contextMenuWidth - allowedDistanceFromEdge;
  const mouseTop = event.pageY;
  const mouseLeft = event.pageX;
  if (mouseTop > contextMenuMaxTop)
    contextMenuStyle.top = contextMenuMaxTop + 'px';
  else contextMenuStyle.top = mouseTop + 'px';
  if (mouseLeft > contextMenuMaxLeft)
    contextMenuStyle.left = contextMenuMaxLeft + 'px';
  else contextMenuStyle.left = mouseLeft + 'px';
}
function contextMenuHide() {
  if (selector.contextMenu.classList.contains('show')) {
    selector.contextMenu.classList.add('hide');
    timeout.contextMenu = setTimeout(() => {
      selector.contextMenu.classList.remove('show');
      selector.contextMenu.classList.remove('hide');
      selector.contextMenu.removeAttribute('style');
    }, 200);
  }
}


selector.document.addEventListener('click', contextMenuHide);
selector.document.addEventListener('contextmenu', contextMenuShow);