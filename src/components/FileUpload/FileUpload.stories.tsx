import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { FileUpload, FileUploadProps } from './FileUpload';

export default {
  title: 'components/FileUpload',
  component: FileUpload,
  args: {
    buttonLabel: 'Выбрать файл',
    uploadButtonLabel: 'Загрузить',
  },
} as Meta<FileUploadProps>;

const Template: StoryFn<FileUploadProps> = (args) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const fakeUploadRequest = async (file: File) => {
    const fileSizeInMB = file.size / (1024 * 1024);
    const uploadSpeed = 1;
    const totalUploadTime = fileSizeInMB / uploadSpeed;

    const interval = 100;
    const totalSteps = Math.ceil((totalUploadTime * 1000) / interval);
    let currentStep = 0;

    return new Promise<void>((resolve) => {
      const intervalId = setInterval(() => {
        currentStep++;
        const progress = Math.min((currentStep / totalSteps) * 100, 100);
        setUploadProgress(progress);

        if (progress === 100) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  };

  return (
    <FileUpload
      {...args}
      uploadRequest={fakeUploadRequest}
      onUploadProgress={setUploadProgress} // Для передачи прогресса
      uploadProgress={uploadProgress} // Передаем прогресс
      renderSuccess={<p style={{ color: 'green' }}>Файл загружен успешно!</p>}
      renderError={(error) => <p style={{ color: 'red' }}>Ошибка: {String(error)}</p>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Выбрать файл',
  uploadButtonLabel: 'Загрузить',
};
