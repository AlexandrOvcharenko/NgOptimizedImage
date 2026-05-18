import { provideImgixLoader } from '@angular/common';
import { Provider } from '@angular/core';

const IMGIX_ORIGIN = 'https://6a0af781dbb8bba1984e949e.imgix.net';

export const imageLoaderProviders: Provider[] = [provideImgixLoader(IMGIX_ORIGIN)];
