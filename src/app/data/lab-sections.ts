import { LabSection } from './lab-section.model';

export const LAB_SECTIONS: readonly LabSection[] = [
  {
    order: '00',
    path: '/',
    shortTitle: 'Overview',
    title: 'NgOptimizedImage Learning Lab',
    summary: 'A guided workspace for adding and comparing your own image optimization examples.',
    learningGoals: [
      'Use each route as a focused exercise area.',
      'Keep demos small enough to inspect in DevTools.',
      'Compare browser behavior before and after adding optimized image code.',
    ],
  },
  {
    order: '01',
    path: '/basic-ng-src',
    shortTitle: 'Basic ngSrc',
    title: 'Basic Directive Activation',
    summary: 'Reserved for the smallest possible example that activates the directive.',
    learningGoals: [
      'Replace a normal image source with the directive trigger.',
      'Inspect the generated attributes in the rendered DOM.',
      'Keep this page intentionally minimal.',
    ],
  },
  {
    order: '02',
    path: '/priority-lcp',
    shortTitle: 'Priority / LCP',
    title: 'Priority and LCP Experiments',
    summary: 'Reserved for hero-image experiments and Largest Contentful Paint checks.',
    learningGoals: [
      'Add a likely LCP image.',
      'Compare priority and non-priority behavior.',
      'Use performance tooling to identify the LCP element.',
    ],
  },
  {
    order: '03',
    path: '/dimensions',
    shortTitle: 'Dimensions',
    title: 'Width, Height, and Layout Stability',
    summary: 'Reserved for examples that compare correct and incorrect image dimensions.',
    learningGoals: [
      'Practice choosing intrinsic dimensions.',
      'Observe layout shift prevention.',
      'Create controlled broken examples for warnings.',
    ],
  },
  {
    order: '04',
    path: '/fill-mode',
    shortTitle: 'Fill Mode',
    title: 'Fill Mode and Object Fit',
    summary: 'Reserved for image-as-background layouts using a positioned parent container.',
    learningGoals: [
      'Prepare stable parent containers.',
      'Compare cover, contain, and object-position behavior.',
      'Avoid hardcoding image dimensions where fill mode is more appropriate.',
    ],
  },
  {
    order: '05',
    path: '/responsive-images',
    shortTitle: 'Responsive',
    title: 'Responsive Images and Sizes',
    summary: 'Reserved for viewport-dependent image selection and srcset inspection.',
    learningGoals: [
      'Experiment with simple and advanced sizes values.',
      'Resize the viewport and inspect selected candidates.',
      'Compare fixed-size and responsive image behavior.',
    ],
  },
  {
    order: '06',
    path: '/placeholders',
    shortTitle: 'Placeholders',
    title: 'Placeholders and Loading States',
    summary: 'Reserved for generated, data URL, blurred, and non-blurred placeholder examples.',
    learningGoals: [
      'Compare placeholder strategies.',
      'Understand where a loader is required.',
      'Keep placeholder payload size visible and intentional.',
    ],
  },
  {
    order: '07',
    path: '/loader-demo',
    shortTitle: 'Built-in Loaders',
    title: 'Built-in Image Loader Setup',
    summary: 'Reserved for trying CDN loader configuration and generated image URLs.',
    learningGoals: [
      'Add one built-in loader provider.',
      'Inspect URL transformation behavior.',
      'Keep provider configuration isolated and easy to remove.',
    ],
  },
  {
    order: '08',
    path: '/custom-loader',
    shortTitle: 'Custom Loader',
    title: 'Custom Image Loader Playground',
    summary: 'Reserved for writing a loader function and experimenting with loader params.',
    learningGoals: [
      'Design a small custom loader.',
      'Pass extra options through loader params.',
      'Verify generated URLs without depending on production infrastructure.',
    ],
  },
  {
    order: '09',
    path: '/background-migration',
    shortTitle: 'Background Migration',
    title: 'Migrating Background Images',
    summary: 'Reserved for replacing CSS background-image patterns with image elements.',
    learningGoals: [
      'Compare a CSS background slot with a semantic image slot.',
      'Preserve layout and cropping behavior.',
      'Practice accessibility decisions for decorative and meaningful images.',
    ],
  },
];

export const DEMO_SECTIONS = LAB_SECTIONS.filter((section) => section.path !== '/');
