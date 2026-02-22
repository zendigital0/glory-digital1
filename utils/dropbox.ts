// utils/dropbox.ts

export const sanitizeDropboxUrl = (url: string): string => {
  if (!url) return '';
  
  
  let sanitized = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
  
  
  if (sanitized.includes('dl=0')) {
    sanitized = sanitized.replace('dl=0', 'raw=1');
  } 
  
  else if (!sanitized.includes('raw=1')) {
    sanitized += sanitized.includes('?') ? '&raw=1' : '?raw=1';
  }
  
  return sanitized;
};