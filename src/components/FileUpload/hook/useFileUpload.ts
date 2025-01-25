import { useState, useRef, ChangeEvent } from 'react';

interface UseFileUploadParams {
    uploadRequest: (file: File, onProgress: (progress: number) => void) => Promise<void>;
    onUploadStart?: () => void;
    onUploadProgress?: (progress: number | null) => void;
    onUploadSuccess?: () => void;
    onUploadError?: (error: unknown) => void;
}

interface UseFileUploadResult {
  inputRef: React.RefObject<HTMLInputElement>;
  selectedFile: File | null;
  isUploading: boolean;
  uploadStatus: 'success' | 'error' | null;
  uploadError: unknown | null;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUpload: () => Promise<void>;
}

/**
 * Кастомный хук для управления загрузкой файлов с отслеживанием прогресса и поддержкой callback-функций
 * на различных этапах загрузки.
 *
 * @param {UseFileUploadParams} params - Объект конфигурации для хука.
 * @param {Function} params.uploadRequest - Функция для обработки запроса на загрузку файла.
 * Принимает `file` и callback `onProgress`.
 * @param {File} params.uploadRequest.file - Файл, который необходимо загрузить.
 * @param {Function} params.uploadRequest.onProgress - Callback для отслеживания прогресса загрузки.
 * Принимает процент выполнения (число).
 * @param {Function} [params.onUploadStart] - Опциональный callback, вызываемый при старте загрузки.
 * @param {Function} [params.onUploadProgress] - Опциональный callback для обработки обновлений прогресса загрузки.
 * Принимает процент выполнения или `null`.
 * @param {Function} [params.onUploadSuccess] - Опциональный callback, вызываемый при успешной загрузке.
 * @param {Function} [params.onUploadError] - Опциональный callback, вызываемый при ошибке загрузки.
 * @returns {Object} - Объект, содержащий состояние и методы для управления процессом загрузки файла.
 * @property {React.RefObject<HTMLInputElement>} inputRef - Ссылка на элемент ввода файла.
 * @property {File | null} selectedFile - Выбранный для загрузки файл или `null`, если файл не выбран.
 * @property {boolean} isUploading - Указывает, идет ли процесс загрузки.
 * @property {'success' | 'error' | null} uploadStatus - Статус загрузки
 * (`success`, `error` или `null`, если статус отсутствует).
 * @property {unknown} uploadError - Объект ошибки, если произошла ошибка во время загрузки, или `null`.
 * @property {Function} handleFileChange - Функция для обработки выбора файла.
 * Принимает `ChangeEvent<HTMLInputElement>`.
 * @property {Function} handleUpload - Функция для запуска процесса загрузки.
 * Должна быть вызвана после выбора файла.
 *
 * @example
 * import { useFileUpload } from './useFileUpload';
 *
 * const МойКомпонент = () => {
 *   const {
 *     inputRef,
 *     selectedFile,
 *     isUploading,
 *     uploadStatus,
 *     handleFileChange,
 *     handleUpload,
 *   } = useFileUpload({
 *     uploadRequest: async (file, onProgress) => {
 *       const formData = new FormData();
 *       formData.append('file', file);
 *       await axios.post('/upload', formData, {
 *         onUploadProgress: (event) => {
 *           if (event.total) {
 *             const progress = Math.round((event.loaded / event.total) * 100);
 *             onProgress(progress);
 *           }
 *         },
 *       });
 *     },
 *     onUploadStart: () => console.log('Загрузка началась'),
 *     onUploadProgress: (progress) => console.log('Прогресс загрузки:', progress),
 *     onUploadSuccess: () => console.log('Загрузка успешно завершена'),
 *     onUploadError: (error) => console.error('Ошибка загрузки', error),
 *   });
 *
 *   return (
 *     <div>
 *       <input type="file" ref={inputRef} onChange={handleFileChange} />
 *       <button onClick={handleUpload} disabled={isUploading || !selectedFile}>
 *         {isUploading ? 'Загрузка...' : 'Загрузить'}
 *       </button>
 *       {uploadStatus === 'success' && <p>Загрузка успешно завершена!</p>}
 *       {uploadStatus === 'error' && <p>Ошибка загрузки!</p>}
 *     </div>
 *   );
 * };
 */
export const useFileUpload = ({
  uploadRequest,
  onUploadStart,
  onUploadProgress,
  onUploadSuccess,
  onUploadError,
}: UseFileUploadParams): UseFileUploadResult => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<'success' | 'error' | null>(null);
  const [uploadError, setUploadError] = useState<unknown>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      onUploadProgress?.(null);
      setUploadStatus(null);
      setUploadError(null);
      event.target.value = '';
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('Выберите файл для загрузки!');

    setIsUploading(true);
    onUploadStart?.();

    try {
      await uploadRequest(selectedFile, (progress) => {
        onUploadProgress?.(progress);
      });
      setUploadStatus('success');
      onUploadSuccess?.();
    } catch (error) {
      setUploadError(error);
      setUploadStatus('error');
      onUploadError?.(error);
    } finally {
      setIsUploading(false);
      setSelectedFile(null);
    }
  };

  return {
    inputRef,
    selectedFile,
    isUploading,
    uploadStatus,
    uploadError,
    handleFileChange,
    handleUpload,
  };
};
