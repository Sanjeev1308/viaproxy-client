export function getInitials(fullName: string): string {
  if (!fullName) return '';

  return fullName
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');
}
