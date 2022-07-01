import { toast } from "react-toastify";

export function appLogger(
  tag: string,
  message: string,
  ...object: any[]
): void {
  const DEBUG = process.env.NODE_ENV === 'development';
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.group();
    // eslint-disable-next-line no-console
    console.log(`[${tag.toUpperCase()}] ${message}`, ...object);
    // eslint-disable-next-line no-console
    console.groupEnd();
  }
}

export const errorToast = (message: string) => {
  toast.error(message);
}
