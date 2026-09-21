/// <reference types="vite/client" />

// This package doesn't ship TypeScript type declarations,
// so we declare a loose (any-typed) module for it here.
declare module '3d-view-controls' {
  const CameraControls: any;
  export default CameraControls;
}
