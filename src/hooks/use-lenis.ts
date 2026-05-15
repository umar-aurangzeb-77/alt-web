"use client";

import { useLenis as useLenisReact } from "lenis/react";

/**
 * Custom hook to access the Lenis instance.
 * Wrapped to allow for easier extensions or logging in the future.
 */
export function useLenis(callback?: (lenis: any) => void, deps: any[] = []) {
  return useLenisReact(callback, deps);
}
