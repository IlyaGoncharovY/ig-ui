import fs from 'fs';
import path from 'path';

import { glob } from 'glob';

const distDir = './dist';
const typesDir = `${distDir}/types`;

/**
 * Перемещает типы (.d.ts) из папки types в соответствующие директории внутри dist
 */
const moveTypes = () => {
  console.log('[INFO] Запуск postbuild...');
  console.log(`[INFO] Ищу файлы .d.ts в: ${typesDir}`);

  const files = glob.sync(`${typesDir}/**/*.d.ts`);
  console.log(`[INFO] Найдены ${files.length} .d.ts файлы.`);
  if (files.length === 0) {
    console.log('[INFO] Файлы .d.ts не найдены. Выход.');
    return;
  }
  // Находим все файлы .d.ts внутри папки types
  files.forEach((file) => {
    console.log(`[INFO] Обрабатывающий файл: ${file}`);

    const relativePath = path.relative(typesDir, file);
    console.log(`[INFO] Относительный путь: ${relativePath}`);

    const destPath = path.resolve(distDir, relativePath);
    console.log(`[INFO] Конечный путь: ${destPath}`);

    const dir = path.dirname(destPath);
    console.log(`[INFO] Обеспечение существования директории: ${dir}`);

    if (!fs.existsSync(dir)) {
      console.log(`[INFO] Директория не существует. Создание: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`[INFO] Перемещение файла из ${file} в ${destPath}`);
    fs.renameSync(file, destPath);
  });

  if (fs.existsSync(typesDir)) {
    console.log(`[INFO] Удаление пустой директории: ${typesDir}`);
    fs.rmSync(typesDir, { recursive: true });
  }

  console.log('[INFO] Postbuild процес завершён.');
};

moveTypes();

// const files = glob.sync(`${typesDir}/**/*.d.ts`);
//
// files.forEach((file) => {
//   const relativePath = path.relative(typesDir, file);
//   const destPath = path.resolve(distDir, relativePath);
//   const dir = path.dirname(destPath);
//
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
//   }
//
//   fs.renameSync(file, destPath);
// });
//
// if (fs.existsSync(typesDir)) {
//   fs.rmSync(typesDir, { recursive: true });
// }