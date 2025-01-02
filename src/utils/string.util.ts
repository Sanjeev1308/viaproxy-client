/* eslint-disable @typescript-eslint/no-explicit-any */
export function getInitials(fullName: string): string {
  if (!fullName) return '';

  return fullName
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');
}

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>) {
    const later = () => {
      timeoutId = undefined;
      func(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, wait);
  };
}
