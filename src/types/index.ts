/**
 * Represents a file in the Bantam system
 */
export interface FileInfo {
  /** The name of the file */
  name: string;
  /** The size of the file in bytes */
  size: number;
  /** The MIME type of the file */
  type: string;
  /** The last updated timestamp */
  updated: string;
  /** The path to the file relative to the project root */
  path: string;
}

/**
 * Data required to render a single file template
 */
export interface SingleFileTemplateData {
  /** Information about the file being displayed */
  file: FileInfo;
  /** The project's slug identifier */
  projectSlug: string;
  /** The full URL to the project */
  projectUrl: string;
}

/**
 * Data required to render a collection template
 */
export interface CollectionTemplateData {
  /** List of files in the collection */
  files: FileInfo[];
  /** The project's slug identifier */
  projectSlug: string;
  /** The full URL to the project */
  projectUrl: string;
  /** The current path within the project */
  currentPath: string;
} 