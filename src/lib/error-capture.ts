let lastCapturedError: Error | undefined;

export const captureError = (error: Error, context?: Record<string, any>) => {
  lastCapturedError = error;
  console.error('[Error Capture]:', error, context);
  // Aqui poderíamos integrar com serviços como Sentry ou LogRocket
};

export const consumeLastCapturedError = (): Error | undefined => {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
};

export const handleGlobalError = (error: unknown) => {
  if (error instanceof Error) {
    captureError(error);
  } else {
    const normalizedError = new Error(String(error));
    captureError(normalizedError);
  }
};
