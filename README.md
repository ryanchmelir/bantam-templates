# Bantam Templates

HTML templates for the Bantam file viewer and browser. This package provides reusable templates for displaying single files and file collections in Bantam projects.

## Features

- Single file viewer template with preview support
- Collection browser template with sorting and filtering
- Type-safe template interfaces
- Zero runtime dependencies
- Works with both npm and Deno

## Installation

### npm

```bash
npm install @bantamhq/templates
```

### Deno

```typescript
import { renderSingleFileTemplate, renderCollectionTemplate } 
  from 'https://esm.sh/@bantamhq/templates@1.0.0'
```

## Usage

### Single File Template

```typescript
import { renderSingleFileTemplate } from '@bantamhq/templates'

const html = renderSingleFileTemplate({
  file: {
    name: 'example.pdf',
    size: 1024,
    type: 'application/pdf',
    updated: new Date().toISOString(),
    path: '/example.pdf'
  },
  projectSlug: 'my-project',
  projectUrl: 'https://my-project.bantam.site'
})
```

### Collection Template

```typescript
import { renderCollectionTemplate } from '@bantamhq/templates'

const html = renderCollectionTemplate({
  files: [
    {
      name: 'document.pdf',
      size: 1024,
      type: 'application/pdf',
      updated: new Date().toISOString(),
      path: '/document.pdf'
    },
    {
      name: 'image.jpg',
      size: 2048,
      type: 'image/jpeg',
      updated: new Date().toISOString(),
      path: '/image.jpg'
    }
  ],
  projectSlug: 'my-project',
  projectUrl: 'https://my-project.bantam.site',
  currentPath: '/'
})
```

## API Reference

### Types

#### FileInfo

```typescript
interface FileInfo {
  name: string;      // The name of the file
  size: number;      // The size in bytes
  type: string;      // The MIME type
  updated: string;   // ISO timestamp
  path: string;      // Path relative to project root
}
```

#### SingleFileTemplateData

```typescript
interface SingleFileTemplateData {
  file: FileInfo;
  projectSlug: string;
  projectUrl: string;
}
```

#### CollectionTemplateData

```typescript
interface CollectionTemplateData {
  files: FileInfo[];
  projectSlug: string;
  projectUrl: string;
  currentPath: string;
}
```

### Functions

#### renderSingleFileTemplate

Renders a template for displaying a single file with preview support.

```typescript
function renderSingleFileTemplate(data: SingleFileTemplateData): string
```

#### renderCollectionTemplate

Renders a template for browsing a collection of files.

```typescript
function renderCollectionTemplate(data: CollectionTemplateData): string
```

### Utility Functions

#### formatFileSize

Formats a file size in bytes to a human-readable string.

```typescript
function formatFileSize(bytes: number): string
```

#### getFileIcon

Gets the appropriate icon name for a file type.

```typescript
function getFileIcon(type: string): string
```

#### canPreviewFile

Determines if a file can be previewed in the browser.

```typescript
function canPreviewFile(type: string): boolean
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test: `npm test`

## License

MIT 