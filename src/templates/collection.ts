import { CollectionTemplateData } from '../types/index.js';
import { formatFileSize, getFileIcon } from '../utils/format.js';

/**
 * Renders a template for displaying a collection of files
 * @param data The template data
 * @returns HTML string for the collection view
 */
export function renderCollectionTemplate(data: CollectionTemplateData): string {
  const { files, projectUrl, currentPath } = data;
  
  // Generate breadcrumb
  const pathParts = currentPath.split('/').filter(Boolean);
  const breadcrumb = pathParts.map((part, index) => {
    const path = pathParts.slice(0, index + 1).join('/');
    return `<a href="/${path}">${part}</a>`;
  });

  // Sort files: directories first, then alphabetically
  const sortedFiles = [...files].sort((a, b) => {
    const aIsDir = !a.type || a.type === 'application/directory';
    const bIsDir = !b.type || b.type === 'application/directory';
    if (aIsDir && !bIsDir) return -1;
    if (!aIsDir && bIsDir) return 1;
    return a.name.localeCompare(b.name);
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Files - Bantam</title>
  <link rel="stylesheet" href="https://bantam.site/template/viewer.css">
  <script defer src="https://bantam.site/template/viewer.js"></script>
</head>
<body>
  <div class="bantam-browser">
    <header>
      <nav class="breadcrumb">
        <a href="/">home</a>
        ${breadcrumb.length ? '/' + breadcrumb.join('/') : ''}
      </nav>
    </header>

    <main class="files-list">
      ${sortedFiles.map(file => {
        const icon = getFileIcon(file.type);
        const isDir = !file.type || file.type === 'application/directory';
        return `
          <div class="file-entry">
            <img src="https://bantam.site/template/icons/${isDir ? 'folder' : icon}.svg" alt="${isDir ? 'Folder' : file.type} icon">
            <a href="${file.path}" class="name">${file.name}</a>
            <span class="size">${formatFileSize(file.size)}</span>
            <span class="updated">${new Date(file.updated).toLocaleString()}</span>
          </div>
        `;
      }).join('')}
    </main>
  </div>
</body>
</html>`;
} 