import { SingleFileTemplateData } from '../types/index.js';
import { formatFileSize, getFileIcon, canPreviewFile } from '../utils/format.js';

/**
 * Renders a template for displaying a single file
 * @param data The template data
 * @returns HTML string for the single file view
 */
export function renderSingleFileTemplate(data: SingleFileTemplateData): string {
  const { file, projectUrl } = data;
  const canPreview = canPreviewFile(file.type);
  const isImage = file.type.startsWith('image/');
  const isPDF = file.type === 'application/pdf';
  const icon = getFileIcon(file.type);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${file.name} - Bantam</title>
  <link rel="stylesheet" href="https://bantam.site/template/viewer.css">
  <script defer src="https://bantam.site/template/viewer.js"></script>
</head>
<body>
  <div class="bantam-viewer">
    <header>
      <div class="file-info">
        <h1>${file.name}</h1>
        <div class="meta">
          <span class="type">${file.type}</span>
          <span class="size">${formatFileSize(file.size)}</span>
          <span class="updated">Updated: ${new Date(file.updated).toLocaleString()}</span>
        </div>
      </div>
      <div class="actions">
        <a href="${file.path}" class="button primary">Download</a>
        <a href="${file.path}" class="button">View Full</a>
      </div>
    </header>

    <main class="preview-area">
      ${canPreview 
        ? isImage 
          ? `<img src="${file.path}" alt="${file.name}">`
          : isPDF
            ? `<iframe src="${file.path}"></iframe>`
            : ''
        : `<div class="icon-preview">
             <img src="https://bantam.site/template/icons/${icon}.svg" alt="${file.type} icon">
           </div>`
      }
    </main>
  </div>
</body>
</html>`;
} 