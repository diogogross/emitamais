export const captureError = (error: Error, context?: Record<string, any>) => {
  console.error('[Error Capture]:', error, context);
  // Aqui poderíamos integrar com serviços como Sentry ou LogRocket
};

export const handleGlobalError = (error: unknown) => {
  if (error instanceof Error) {
    captureError(error);
  } else {
    console.error('Unknown error occurred:', error);
  }
};