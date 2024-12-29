import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import AutoFormLabel from '../common/label';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';

export default function AutoFormFile({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
  field,
}: AutoFormInputComponentProps) {
  const { showLabel: _showLabel, className = 'w-full', ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = _showLabel === undefined ? true : _showLabel;

  const [file, setFile] = useState<string | null>(field.value || null); // File data URL or backend path
  const [fileName, setFileName] = useState<string | null>(null); // File name
  const [isImage, setIsImage] = useState<boolean>(false); // Whether the file is an image

  useEffect(() => {
    // Handle edit mode (preloaded file from backend)
    console.log('field', field.value);
    if (field.value && typeof field.value === 'string') {
      const fileExtension = field.value.split('.').pop()?.toLowerCase();
      const isImageFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(fileExtension || '');
      setIsImage(isImageFile);
      setFile(field.value);
      setFileName(field.value.split('/').pop() || 'Uploaded File');
    }
  }, [field.value]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const isImageFile = selectedFile.type.startsWith('image/');
      setIsImage(isImageFile);
      setFileName(selectedFile.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string); // Set the file preview for new uploads
        field.onChange(selectedFile); // Update the form state with the file object
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveClick = () => {
    setFile(null);
    setFileName(null);
    setIsImage(false);
    field.onChange(null); // Reset the form state
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <FormItem className="flex w-full flex-col justify-start">
        {showLabel && <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />}
        {!file && (
          <FormControl>
            <Input type="file" {...fieldPropsWithoutShowLabel} onChange={handleFileChange} value="" />
          </FormControl>
        )}
        {file && (
          <div className="flex flex-col items-start">
            <div className="flex w-full flex-row items-center justify-between space-x-2 rounded-sm border p-2">
              {isImage ? (
                <img
                  src={file.startsWith('data:') ? file : `${import.meta.env.VITE_IMAGE_BASE_URL}/${file}`}
                  alt={fileName || 'Uploaded File'}
                  className="h-12 w-12 object-cover rounded-sm"
                />
              ) : (
                <a
                  href={file.startsWith('data:') ? file : `${import.meta.env.VITE_IMAGE_BASE_URL}/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-blue-600 hover:underline"
                >
                  {fileName || 'View File'}
                </a>
              )}
              <button onClick={handleRemoveClick} aria-label="Remove file" className="text-red-600 hover:text-red-800">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        )}
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
