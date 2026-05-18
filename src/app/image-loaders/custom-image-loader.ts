import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { Provider } from '@angular/core';

const IMGIX_ORIGIN = 'https://6a0af781dbb8bba1984e949e.imgix.net';

export function customImageLoader(config: ImageLoaderConfig): string {
  const path = config.src.replace(/^\/+/, '');
  const params = new URLSearchParams();
  params.set('auto', 'format');
  if (config.width) {
    params.set('w', String(config.width));
  }
  if (config.height) {
    params.set('h', String(config.height));
  }
  if (config.isPlaceholder) {
    params.set('q', '20');
  }
  if (config.loaderParams?.['mono']) {
    params.set('sat', '-100');
  }
  return `${IMGIX_ORIGIN}/${path}?${params.toString()}`;
}

export const customImageLoaderProvider: Provider = {
  provide: IMAGE_LOADER,
  useValue: customImageLoader,
};

export const customLoaderProviders: Provider[] = [customImageLoaderProvider];
