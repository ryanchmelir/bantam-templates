import { renderSingleFileTemplate } from '../src/index.js';

// Example of rendering a PDF file
const pdfExample = renderSingleFileTemplate({
  file: {
    name: 'document.pdf',
    size: 1024 * 1024, // 1MB
    type: 'application/pdf',
    updated: new Date().toISOString(),
    path: '/document.pdf'
  },
  projectSlug: 'example-project',
  projectUrl: 'https://example-project.bantam.site'
});

console.log('PDF Example:', pdfExample);

// Example of rendering an image
const imageExample = renderSingleFileTemplate({
  file: {
    name: 'photo.jpg',
    size: 500 * 1024, // 500KB
    type: 'image/jpeg',
    updated: new Date().toISOString(),
    path: '/photo.jpg'
  },
  projectSlug: 'example-project',
  projectUrl: 'https://example-project.bantam.site'
});

console.log('Image Example:', imageExample); 