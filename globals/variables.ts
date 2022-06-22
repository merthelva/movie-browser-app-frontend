import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    /* Font Weights */
    --fw-thin: 300;
    --fw-normal: 400;
    --fw-semi: 500;
    --fw-bold: 600;
    --fw-bolder: 700;

    /* Spacing */
    --spacing-1x: 2px;
    --spacing-2x: calc(var(--spacing-1x) * 2);
    --spacing-4x: calc(var(--spacing-1x) * 4);
    --spacing-6x: calc(var(--spacing-1x) * 6);
    --spacing-8x: calc(var(--spacing-1x) * 8);
    --spacing-12x: calc(var(--spacing-1x) * 12);
    --spacing-14x: calc(var(--spacing-1x) * 14);
    --spacing-16x: calc(var(--spacing-1x) * 16);
    --spacing-24x: calc(var(--spacing-1x) * 24);
    --spacing-32x: calc(var(--spacing-1x) * 32);

    --shadow: 0 1px 5px;

    --container-width: 1200px;
  }
`;

export default Variables;
