import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { 
  renderSingleFileTemplate, 
  renderCollectionTemplate,
  formatFileSize,
  getFileIcon,
  canPreviewFile
} from '../src/index.ts';

Deno.test('formatFileSize formats bytes correctly', () => {
  assertEquals(formatFileSize(500), '500.0 B');
  assertEquals(formatFileSize(1024), '1.0 KB');
  assertEquals(formatFileSize(1024 * 1024), '1.0 MB');
  assertEquals(formatFileSize(1024 * 1024 * 1024), '1.0 GB');
});

Deno.test('getFileIcon returns correct icons', () => {
  assertEquals(getFileIcon('image/jpeg'), 'image');
  assertEquals(getFileIcon('video/mp4'), 'video');
  assertEquals(getFileIcon('application/pdf'), 'pdf');
  assertEquals(getFileIcon('unknown/type'), 'file');
});

Deno.test('canPreviewFile detects previewable files', () => {
  assertEquals(canPreviewFile('image/jpeg'), true);
  assertEquals(canPreviewFile('application/pdf'), true);
  assertEquals(canPreviewFile('text/plain'), true);
  assertEquals(canPreviewFile('application/octet-stream'), false);
});

Deno.test('renderSingleFileTemplate generates valid HTML', () => {
  const html = renderSingleFileTemplate({
    file: {
      name: 'test.pdf',
      size: 1024,
      type: 'application/pdf',
      updated: '2024-01-01T00:00:00Z',
      path: '/test.pdf'
    },
    projectSlug: 'test-project',
    projectUrl: 'https://test-project.bantam.site'
  });

  // Basic structure checks
  assertEquals(typeof html, 'string');
  assertEquals(html.includes('<!DOCTYPE html>'), true);
  assertEquals(html.includes('test.pdf'), true);
  assertEquals(html.includes('1.0 KB'), true);
});

Deno.test('renderCollectionTemplate generates valid HTML', () => {
  const html = renderCollectionTemplate({
    files: [
      {
        name: 'test.pdf',
        size: 1024,
        type: 'application/pdf',
        updated: '2024-01-01T00:00:00Z',
        path: '/test.pdf'
      },
      {
        name: 'image.jpg',
        size: 2048,
        type: 'image/jpeg',
        updated: '2024-01-01T00:00:00Z',
        path: '/image.jpg'
      }
    ],
    projectSlug: 'test-project',
    projectUrl: 'https://test-project.bantam.site',
    currentPath: '/'
  });

  // Basic structure checks
  assertEquals(typeof html, 'string');
  assertEquals(html.includes('<!DOCTYPE html>'), true);
  assertEquals(html.includes('test.pdf'), true);
  assertEquals(html.includes('image.jpg'), true);
  assertEquals(html.includes('1.0 KB'), true);
  assertEquals(html.includes('2.0 KB'), true);
}); 