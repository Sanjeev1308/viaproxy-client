/* eslint-disable @typescript-eslint/no-explicit-any */
export function objectToFormData<T extends Record<string, any>>(
  obj: T,
  formData: FormData = new FormData(),
  parentKey: string | null = null,
): FormData {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value: any = obj[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      // Skip null or undefined values
      if (value === null || value === undefined) {
        continue;
      }

      if (value instanceof Date) {
        // Convert Date objects to ISO strings
        formData.append(formKey, value.toISOString());
      } else if (typeof value === 'object' && value !== null && value.constructor !== File) {
        // Recursively process nested objects (excluding File instances)
        objectToFormData(value, formData, formKey);
      } else {
        // Append other types (including Files) to FormData
        formData.append(formKey, value as any);
      }
    }
  }
  return formData;
}
