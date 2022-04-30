export function isTS(fileName: string): boolean {
  return fileName === 'TypeScript' || fileName.endsWith('.ts');
}

export function isLess(fileName: string): boolean {
  return fileName === 'LESS' || `${fileName}`.endsWith('.less');
}
