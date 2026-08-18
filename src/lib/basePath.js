const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// next/link and next/router apply basePath automatically, but next/image
// src and other raw asset URLs do not — pass those through here.
export function withBasePath(path) {
  return `${basePath}${path}`;
}
