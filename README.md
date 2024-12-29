# IG-UI

**IG-UI** — это пользовательский интерфейсный набор компонентов для React и TypeScript, созданный для упрощения разработки интерфейсов. Включает готовые стилизованные компоненты с поддержкой кастомизации и гибкой интеграции.

---

## 📦 Установка

Установите библиотеку через npm:

```bash
npm install goncharov-ui
```

Или с помощью pnpm:

```bash
pnpm i goncharov-ui
```

Или с помощью yarn:

```bash
yarn add goncharov-ui
```

---

## 🔗 Ссылки
- GitHub репозиторий: [IG-UI GitHub](https://github.com/IlyaGoncharovY/ig-ui)
- Storybook документация: [Storybook IG-UI](https://ilyagoncharovy.github.io/ig-ui/)
- npm пакет: [goncharov-ui](https://www.npmjs.com/package/goncharov-ui)

---

## 🚀 Быстрый старт

### 1) Импорт компонента:

 **Избирательный импорт**

```tsx
import { Button } from 'goncharov-ui/Button';

const App = () => (
  <Button size="small">Small Button</Button>
);
```

### 2) Подключение стилей

 **Не требуется**

---

## 🛠️ Компоненты
### Button
**Описание:** Кнопка с поддержкой размеров и кастомных классов.

**Пример использования:**
```tsx
import { Button } from 'goncharov-ui/Button';

<Button size="medium" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```
**Параметры:**

| Параметр     | Тип                           | По умолчанию | Описание                           |
|--------------|-------------------------------|--------------|------------------------------------|
| `size`       | `'small' | 'medium' | 'large'` | `'medium'`  | Размер кнопки                     |
| `className`  | `string`                      | `''`         | Дополнительные CSS классы         |
| `...props`   | `ButtonHTMLAttributes<HTMLButtonElement>` | - | Дополнительные свойства кнопки |

---

### AnimateBG
**Описание:** Компонент для ввода с анимированным фоном.

**Пример использования:**
```tsx
import {AnimateBG} from "goncharov-ui/AnimateBG";

<AnimateBG inputLength={6} backgroundColor="#d4af37" inputType="text" />
```
**Параметры:**

| Параметр     | Тип                           | По умолчанию | Описание                           |
|--------------|-------------------------------|--------------|------------------------------------|
| `inputLength`       | `number` | `4`  | Максимальная длина ввода                     |
| `backgroundColor`  | `string`                      | `'#4a4a4a'`         | Цвет фона анимации         |
| `inputType`   | `React.HTMLInputTypeAttribute` | `'text'` | Тип инпута |
| `customInput`   | `React.ReactElement` | `undefined` | Пользовательский компонент ввода |

---

## 🌟 Особенности
- Полная документация доступна в [Storybook](https://ilyagoncharovy.github.io/ig-ui/).
- Поддержка избирательного импорта для улучшения производительности.
- Гибкая настройка и кастомизация.
- Написано с использованием React и TypeScript.

---

## 📚 Документация
Для более подробной информации о компонентах, их свойствах и примерах использования, посетите [Storybook](https://ilyagoncharovy.github.io/ig-ui/).

---

## 🤝 Вклад
Если вы хотите внести изменения или улучшить библиотеку:

1) Сделайте форк репозитория.
2) Создайте новую ветку для ваших изменений: `git checkout -b feature-name`.
3) Внесите изменения и отправьте PR.

---

## 📝 Лицензия
Проект распространяется под лицензией **ISC**. См. [LICENSE]() для подробностей.
