// Enable drag and drop functionality for draggable elements
const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

draggables.forEach(draggable => {
  draggable.addEventListener('mousedown', (e) => {
    draggedElement = draggable;
    draggedElement.classList.add('dragging');
    
    // Calculate offset between mouse position and element position
    const rect = draggable.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });
});

document.addEventListener('mousemove', (e) => {
  if (draggedElement) {
    draggedElement.style.position = 'fixed';
    draggedElement.style.left = (e.clientX - offsetX) + 'px';
    draggedElement.style.top = (e.clientY - offsetY) + 'px';
    draggedElement.style.zIndex = '999';
  }
});

document.addEventListener('mouseup', () => {
  if (draggedElement) {
    draggedElement.classList.remove('dragging');
    draggedElement = null;
  }
});
