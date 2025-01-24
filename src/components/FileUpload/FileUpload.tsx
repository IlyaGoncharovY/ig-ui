import React, { ChangeEvent, FC, useRef, useState, ReactNode } from 'react';
import clsx from 'clsx';

import s from './FileUpload.module.css';

export interface FileUploadProps {
    uploadRequest: (file: File, onProgress: (progress: number) => void) => Promise<void>;
    onUploadStart?: () => void;
    onUploadProgress?: (progress: number | null) => void;
    uploadProgress?: number | null;
    onUploadSuccess?: () => void;
    onUploadError?: (error: unknown) => void;
    renderSuccess?: ReactNode | ((file: File) => ReactNode);
    renderError?: ReactNode | ((error: unknown) => ReactNode);
    buttonLabel?: string;
    uploadButtonLabel?: string;
    styles?: {
        container?: React.CSSProperties;
        button?: React.CSSProperties;
        progressBarContainer?: React.CSSProperties;
        progressBar?: React.CSSProperties;
        fileName?: React.CSSProperties;
    };
}

/**
 * Компонент для загрузки файлов с визуальным прогрессом.
 * @param {Function} uploadRequest - Функция для выполнения запроса загрузки.
 * @param {Function} [onUploadStart] - Callback при старте загрузки.
 * @param {Function} [onUploadProgress] - Callback для отслеживания прогресса загрузки.
 * @param {number | null} [uploadProgress] - Текущее значение прогресса.
 * @param {Function} [onUploadSuccess] - Callback при успешной загрузке.
 * @param {Function} [onUploadError] - Callback при ошибке загрузки.
 * @param {ReactNode | Function} [renderSuccess] - Компонент или функция отображения успешной загрузки.
 * @param {ReactNode | Function} [renderError] - Компонент или функция отображения ошибок.
 * @param {string} [buttonLabel='Выбрать файл'] - Текст кнопки выбора файла.
 * @param {string} [uploadButtonLabel='Загрузить'] - Текст кнопки загрузки.
 * @param {object} [styles] - Кастомные стили для элементов.
 * @returns {JSX.Element} Компонент загрузки файла.
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import axios from 'axios';
 * import { FileUpload } from 'goncharov-ui/components/FileUpload';
 *
 * const uploadFileWithAxios = async (file: File, onProgress: (progress: number) => void) => {
 *   const formData = new FormData();
 *   formData.append('file', file);
 *
 *   await axios.post('https://your-server-url.com/upload', formData, {
 *     headers: { 'Content-Type': 'multipart/form-data' },
 *     onUploadProgress: (event) => {
 *       if (event.total) {
 *         const progress = Math.round((event.loaded / event.total) * 100);
 *         onProgress(progress);
 *       }
 *     },
 *   });
 * };
 *
 * const App = () => {
 *   const [uploadProgress, setUploadProgress] = useState<number | null>(null);
 *
 *      const uploadRequest = async (file: File) => {
 *          await uploadFileWithAxios(file, setUploadProgress);
 *      };
 *
 *   return (
 *     <FileUpload
 *       uploadRequest={uploadRequest}
 *       uploadProgress={uploadProgress}
 *       onUploadProgress={setUploadProgress}
 *       renderSuccess={<p>Файл загружен успешно!</p>}
 *       renderError={(error) => <p>Ошибка: {error.message}</p>}
 *     />
 *   );
 * };
 * ```
 */
export const FileUpload: FC<FileUploadProps> = ({
  uploadRequest,
  onUploadStart,
  onUploadProgress,
  uploadProgress,
  onUploadSuccess,
  onUploadError,
  renderSuccess,
  renderError,
  buttonLabel = 'Выбрать файл',
  uploadButtonLabel = 'Загрузить',
  styles = {},
}: FileUploadProps): JSX.Element => {
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

  const renderFeedback = () => {
    if (uploadStatus === 'success') {
      if (typeof renderSuccess === 'function') {
        return renderSuccess(selectedFile!);
      }
      return renderSuccess || <p>Файл успешно загружен!</p>;
    }

    if (uploadStatus === 'error') {
      if (typeof renderError === 'function') {
        return renderError(uploadError);
      }
      return renderError || <p>Ошибка загрузки файла!</p>;
    }

    return null;
  };

  return (
    <div
      className={clsx(s.fileUploadContainer)}
      style={styles.container}
    >
      <div className={s.displayInputContainer}>
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          className={s.hiddenInput}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={clsx(s.buttonLabel)}
          style={styles.button}
        >
          {buttonLabel}
        </button>
        {selectedFile && (
          <p
            className={clsx(s.fileName)}
            style={styles.fileName}
          >
              Выбран файл: {selectedFile.name}
          </p>
        )}
        <button
          type="button"
          onClick={handleUpload}
          disabled={isUploading || !selectedFile}
          className={clsx(s.buttonUpload, {[s.disabled]: isUploading || !selectedFile})}
          style={styles.button}
        >
          {isUploading ? 'Загрузка...' : uploadButtonLabel}
        </button>
      </div>
      {uploadProgress !== null && (
        <div
          className={clsx(s.progressBarContainer)}
          style={styles.progressBarContainer}
        >
          <div
            className={clsx(s.uploadProgressContainer)}
            style={{width: `${uploadProgress}%`, ...styles.progressBar}}
          />
          <p className={s.progressBar}>{uploadProgress?.toFixed(2)}%</p>
        </div>
      )}
      {renderFeedback()}
    </div>
  );
};
