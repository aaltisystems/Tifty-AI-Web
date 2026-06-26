declare module "react" {
  const React: any;
  export default React;
  export const useState: any;
  export const useEffect: any;
  export const useRef: any;
  export const useMemo: any;
  export const useCallback: any;
  export const Fragment: any;
}

declare module "framer-motion" {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module "@/lib/utils" {
  export function cn(...inputs: any[]): string;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
