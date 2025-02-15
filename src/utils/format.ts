/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes The size in bytes
 * @returns A formatted string like "1.5 MB"
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * Gets the appropriate icon name for a file type
 * @param type The MIME type of the file
 * @returns An icon identifier string
 */
export function getFileIcon(type: string): string {
  if (type.startsWith('image/')) return 'image';
  if (type.startsWith('video/')) return 'video';
  if (type.startsWith('audio/')) return 'audio';
  if (type === 'application/pdf') return 'pdf';
  if (type.includes('document')) return 'document';
  if (type.includes('spreadsheet')) return 'spreadsheet';
  if (!type || type === 'application/directory') return 'folder';
  return 'file';
}

/**
 * Determines if a file can be previewed in the browser
 * @param type The MIME type of the file
 * @returns true if the file can be previewed
 */
export function canPreviewFile(type: string): boolean {
  return type.startsWith('image/') || 
         type === 'application/pdf' ||
         type.startsWith('text/') ||
         type === 'application/json';
} 