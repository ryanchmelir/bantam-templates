// File preview handling
document.addEventListener('DOMContentLoaded', () => {
  // Handle image previews
  const previewImage = document.querySelector('.preview-area img');
  if (previewImage) {
    previewImage.addEventListener('click', () => {
      window.open(previewImage.src, '_blank');
    });
    
    // Add zoom cursor
    previewImage.style.cursor = 'zoom-in';
  }

  // Handle PDF previews
  const pdfFrame = document.querySelector('.preview-area iframe');
  if (pdfFrame) {
    // Ensure PDF takes full height
    pdfFrame.style.height = '70vh';
  }

  // File list enhancements
  const filesList = document.querySelector('.files-list');
  if (filesList) {
    // Add keyboard navigation
    filesList.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const entries = Array.from(filesList.querySelectorAll('.file-entry .name'));
        const currentIndex = entries.findIndex(entry => entry === document.activeElement);
        
        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < entries.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : entries.length - 1;
        }
        
        entries[nextIndex]?.focus();
      }
    });

    // Add sorting functionality
    let sortDirection = 1;
    const headers = filesList.querySelectorAll('.sort-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const column = header.dataset.sort;
        const entries = Array.from(filesList.querySelectorAll('.file-entry'));
        
        entries.sort((a, b) => {
          const aValue = a.querySelector(`.${column}`).textContent;
          const bValue = b.querySelector(`.${column}`).textContent;
          return sortDirection * aValue.localeCompare(bValue);
        });
        
        sortDirection *= -1;
        entries.forEach(entry => filesList.appendChild(entry));
      });
    });
  }
}); 