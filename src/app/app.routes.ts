import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'NgOptimizedImage Lab',
  },
  {
    path: 'basic-ng-src',
    loadComponent: () =>
      import('./pages/basic-ng-src/basic-ng-src.component').then((m) => m.BasicNgSrcComponent),
    title: 'Basic ngSrc | NgOptimizedImage Lab',
  },
  {
    path: 'priority-lcp',
    loadComponent: () =>
      import('./pages/priority-lcp/priority-lcp.component').then((m) => m.PriorityLcpComponent),
    title: 'Priority and LCP | NgOptimizedImage Lab',
  },
  {
    path: 'dimensions',
    loadComponent: () =>
      import('./pages/dimensions/dimensions.component').then((m) => m.DimensionsComponent),
    title: 'Dimensions | NgOptimizedImage Lab',
  },
  {
    path: 'fill-mode',
    loadComponent: () =>
      import('./pages/fill-mode/fill-mode.component').then((m) => m.FillModeComponent),
    title: 'Fill Mode | NgOptimizedImage Lab',
  },
  {
    path: 'responsive-images',
    loadComponent: () =>
      import('./pages/responsive-images/responsive-images.component').then(
        (m) => m.ResponsiveImagesComponent,
      ),
    title: 'Responsive Images | NgOptimizedImage Lab',
  },
  {
    path: 'placeholders',
    loadComponent: () =>
      import('./pages/placeholders/placeholders.component').then((m) => m.PlaceholdersComponent),
    title: 'Placeholders | NgOptimizedImage Lab',
  },
  {
    path: 'loader-demo',
    loadComponent: () =>
      import('./pages/loader-demo/loader-demo.component').then((m) => m.LoaderDemoComponent),
    title: 'Built-in Loaders | NgOptimizedImage Lab',
  },
  {
    path: 'custom-loader',
    loadComponent: () =>
      import('./pages/custom-loader/custom-loader.component').then((m) => m.CustomLoaderComponent),
    title: 'Custom Loader | NgOptimizedImage Lab',
  },
  {
    path: 'background-migration',
    loadComponent: () =>
      import('./pages/background-migration/background-migration.component').then(
        (m) => m.BackgroundMigrationComponent,
      ),
    title: 'Background Migration | NgOptimizedImage Lab',
  },
  {
    path: 'diagnostics',
    loadComponent: () =>
      import('./pages/diagnostics/diagnostics.component').then((m) => m.DiagnosticsComponent),
    title: 'Diagnostics | NgOptimizedImage Lab',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
