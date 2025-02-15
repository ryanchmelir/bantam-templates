import { renderCollectionTemplate } from '../src/index.js';

// Example of rendering a collection with mixed file types
const collectionExample = renderCollectionTemplate({
  files: [
    {
      name: 'documents',
      size: 0,
      type: 'application/directory',
      updated: new Date().toISOString(),
      path: '/documents'
    },
    {
      name: 'report.pdf',
      size: 1024 * 1024, // 1MB
      type: 'application/pdf',
      updated: new Date().toISOString(),
      path: '/report.pdf'
    },
    {
      name: 'data.json',
      size: 2048, // 2KB
      type: 'application/json',
      updated: new Date().toISOString(),
      path: '/data.json'
    },
    {
      name: 'photo.jpg',
      size: 500 * 1024, // 500KB
      type: 'image/jpeg',
      updated: new Date().toISOString(),
      path: '/photo.jpg'
    }
  ],
  projectSlug: 'example-project',
  projectUrl: 'https://example-project.bantam.site',
  currentPath: '/'
});

console.log('Collection Example:', collectionExample); 