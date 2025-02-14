import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {Button} from '../Button';

import {useFileUpload} from './hook/useFileUpload';
import {Nullable} from './common/types/CommonTypesForFileUpload';

import s from './FileUpload.module.css';

export interface FileUploadProps {
    uploadRequest: (file: File, onProgress: (progress: number) => void) => Promise<void>;
    onUploadStart?: () => void;
    onUploadProgress?: (progress: Nullable<number>) => void;
    uploadProgress?: Nullable<number>;
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
 * import { FileUpload } from 'goncharov-ui/dist/components/FileUpload';
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

  const { inputRef, selectedFile, isUploading, uploadStatus, uploadError, handleFileChange, handleUpload,
  } = useFileUpload({ uploadRequest, onUploadStart, onUploadProgress, onUploadSuccess, onUploadError});

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
        <Button
          size="medium"
          className={clsx(s.buttonLabel)}
          onClick={() => inputRef.current?.click()}
          style={styles.button}
        >
          {buttonLabel}
        </Button>
        {selectedFile && (
          <p
            className={clsx(s.fileName)}
            style={styles.fileName}
          >
              Выбран файл: {selectedFile.name}
          </p>
        )}
        <Button
          size="medium"
          className={clsx(s.buttonUpload)}
          onClick={handleUpload}
          disabled={isUploading || !selectedFile}
          style={styles.button}
        >
          {isUploading ? 'Загрузка...' : uploadButtonLabel}
        </Button>
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
