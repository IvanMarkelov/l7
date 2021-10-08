const lessons = [
  {
    id: 1,
    title:
      "Создание проекта курса в Трелло. Создание репозитория на GitHub. Файл ReadMe. Markdown язык разметки. Базовые команды Git. npm. Package.json. Создание проекта на stackblitz.com",
    homework: [
      {
        taskNumber: 9,
        taskDesc:
          "Создать новый проект с файлом index.js на https://stackblitz.com со стандартным JS. Сделать описание ReadMe при помощи Маркдауна. Добавить [UML-схему сборки приложения](https://trello-attachments.s3.amazonaws.com/607a4f1910a1f27254381596/607a520b7cd92579e31ac9c6/cb276a837091193a7a8c20ac9ddceb61/image.png) на реакт (PlantUML), таблицу, картинку, сделать форматирование текста",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/React-L01?file=app_schema%2Fapp_schema.png",
      },
      {
        taskNumber: 11,
        taskDesc:
          "Создать новый React с использованием react UI library [Ant Design of React](https://ant.design/docs/react/getting-started) проект и изменить текст на странице",
        taskLink: "https://stackblitz.com/github/IvanMarkelov/react-p2-t2",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/watch?v=0WJLkakbgYw&amp;list=RDCMUCmI5YBB9KJ0xLtFtgBX8rfw",
        "https://www.youtube.com/embed/ZDk4UnOHXXA",
        "https://www.youtube.com/embed/sL6VvWOAuLE",
        "https://www.youtube.com/embed/JfpCicDUMKc",
        "https://www.youtube.com/playlist?list=PL7Nh93imVuXyiJKz6YrELUACjXWfAXlwW",
        "https://www.youtube.com/embed/RJoNVnFWxRs",
      ],
      study: [
        "https://ru.reactjs.org/tutorial/tutorial.html",
        "https://real-world-plantuml.com/",
        "http://pdf.plantuml.net/PlantUML_Language_Reference_Guide_ru.pdf",
        "https://spec-md.com",
        "https://tyapk.ru/blog/post/gitignore",
        "https://stackedit.io/app#",
        "https://ax.digital/markdown/",
        "https://stackblitz.com/",
      ],
      links: [
        "https://docs.npmjs.com/cli/version.html",
        "https://habr.com/ru/company/ruvds/blog/345060/",
        "https://blog.popstas.ru/blog/2020/04/15/npm-version/",
        "https://docs.npmjs.com/cli/install.html",
        "https://docs.npmjs.com/cli/uninstall.html",
        "https://docs.npmjs.com/cli/update.html",
        "https://docs.npmjs.com/cli/run-script.html",
      ],
    },
  },
  {
    id: 2,
    title:
      "Создание React-приложения. Установка расширения React Developer Tools. Введение в React. Виртуальный DOM. Основы JSX.",
    homework: [
      {
        taskNumber: 6,
        taskDesc:
          "Создать новое приложение React https://www.youtube.com/embed/0grybmrgc2Q с использованием Material-UI library https://www.youtube.com/embed/GMfAgHcPSqc https://www.youtube.com/embed/RVSR2p6vxi0 проект и разместить на странице адаптивное меню",
        taskLink: "https://stackblitz.com/github/IvanMarkelov/react-p2-t3",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/v8q0e0bqJXk",
        "https://www.youtube.com/embed/VrayPysaeGY",
        "https://www.youtube.com/embed/WjxH7GODv6k",
        "https://www.youtube.com/embed/1nQlcb7E_eg",
        "https://www.youtube.com/embed/K2DB3B9PU9Q",
        "https://www.youtube.com/embed/-LfSE9ZxZDI",
        "https://www.youtube.com/embed/0grybmrgc2Q",
        "https://www.youtube.com/embed/GMfAgHcPSqc",
        "https://www.youtube.com/embed/RVSR2p6vxi0",
      ],
      study: [
        "https://real-world-plantuml.com/",
        "https://paulradzkov.com/2014/markdown_cheatsheet/",
        "https://trello.com/1/cards/61210414d0f3ca72f2d1766b/attachments/61210414d0f3ca72f2d17675/download/Benx_A__Porsello_E_React_I_Redux_Funktsionalnaya_Veb-Razrabotka_2018.pdf",
        "https://trello.com/1/cards/61210414d0f3ca72f2d1766b/attachments/61210414d0f3ca72f2d17673/download/React_Native_in_Action.pdf",
        "https://learn.javascript.ru/screencast/react#react-virtual-DOM",
      ],
      links: [
        "https://ru.reactjs.org/docs/introducing-jsx.html",
        "https://ru.reactjs.org/docs/hello-world.html",
      ],
    },
  },
  {
    id: 3,
    title: "Рендеринг элементов. Компоненты и пропсы.",
    homework: [
      {
        taskNumber: 2,
        taskDesc:
          "Создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложение часы из примера в задании 1 с изменением раз в 30 секунд.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-hw2",
      },
      {
        taskNumber: 4,
        taskDesc:
          "Создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложением блога из примера в задании 2. Тема новостей своя (путешествие, машины и тп.).",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task4",
      },
      {
        taskNumber: 6,
        taskDesc:
          "Посмотрев пример в задании 5 создать новое приложение React и добавьте ссылку на https://stackblitz.com/ в историю карточки. Приложение должно отображать только одну статью по выбору из списка (в качестве альтернативы может быть выбор другой тематики например бенефит услуг ДМС: 🦷 зубы, 👀 глаза, сосуды, амбулаторное лечение и тп. по выбору отображается список услуг и клиник)",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task6",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/IXXO2-xnI8U",
        "https://www.youtube.com/embed/rlTvbjScIKA",
        "https://www.youtube.com/embed/kv-T62uFJZg",
        "https://www.youtube.com/embed/-z-OAVigStA",
      ],
      study: [
        "https://blueprintjs.com/",
        "https://ru.reactjs.org/docs/rendering-elements.html",
        "https://ru.reactjs.org/docs/components-and-props.html",
        "https://metanit.com/web/react/2.1.php",
        "https://metanit.com/web/react/2.2.php",
        "https://metanit.com/web/react/2.3.php",
        "https://trello.com/1/cards/612a943daeaae07027458b0c/attachments/612a943daeaae07027458b1e/download/image.png",
      ],
      links: ["https://habr.com/ru/company/ruvds/blog/345060/"],
    },
  },
  {
    id: 4,
    title: "Обработка событий и состояние компонента",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе? Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2 Посмотреть и кратко описать в карточке сюжет видео ролика. Кто читал видео (кампания, лектор)? Добавьте ссылку на github профиля лектора. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть и кратко описать в карточке о чём это видео. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-3",
      },
      {
        taskNumber: "4",
        taskDesc: "4: Посмотреть и кратко описать в карточке о чём это видео. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть и кратко описать в карточке о чём это видео. Перепишите пример и добавьте ссылку в комментариях. Пусть в стейте хранится массив с характеристиками самоката. У каждого самоката есть наименование, остаток заряда и стоимость в час. Выведите все самокаты на экран с помощью цикла. Сделайте так, чтобы отображением самоката на экран занимался отдельный компонент. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную зарплату всех работников.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Дан следующий стейт: this.state = {show: true, name: 'Иван'}; Изначально результат работы метода render следующий ('Иван' берется из this.state.name): <div><p>Привет, Иван!</p></div> Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван', а если равен false - то 'Пока, Иван'",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-7",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8: Дан массив языков ['html', 'css', 'js', 'php']. Выведите эти языки в виде списка <ul>.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-8",
      },
      {
        taskNumber: "9",
        taskDesc:
          "9: Дан массив с числами. Выведите эти числа каждое в своем <span> так, чтобы на выводе к каждому числу прибавлялось число 3.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-9",
      },
      {
        taskNumber: "10",
        taskDesc:
          "10: Реализуйте игру крестики-нолики. Играют два игрока, каждый ходит по очереди.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l2/tree/l2-task2-10",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/Q7FkSWMf2Qo",
        "https://www.youtube.com/embed/yzxE3M_xx3w",
        "https://www.youtube.com/embed/qqeKBHnRR6A",
        "https://www.youtube.com/embed/7JNz14uTMTE",
        "https://www.youtube.com/embed/isrKkL_54Eo",
      ],
      study: [
        "https://ru.reactjs.org/docs/state-and-lifecycle.html",
        "https://ru.reactjs.org/docs/handling-events.html",
        "https://metanit.com/web/react/2.4.php",
        "https://metanit.com/web/react/2.5.php",
        "https://learn.javascript.ru/screencast/react#react-data-for-component",
        "https://learn.javascript.ru/screencast/react#react-state",
      ],
      links: [],
    },
  },
  {
    id: 5,
    title: "Жизненный цикл компонента",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-3",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Посмотреть и кратко описать в карточке сюжет видео ролика и добавить в комментарии внешнюю ссылку с пользователями. Перепишите пример с видео и добавьте ссылку в комментариях. ",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-7",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https//stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t1-8",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/O8f6aXqpGHw",
        "https://www.youtube.com/embed/bMApsb0FpFE",
        "https://www.youtube.com/embed/ty2ApOkMRws",
        "https://www.youtube.com/embed/CHFD45QYtI8",
        "https://www.youtube.com/embed/m_mtV4YaI8c",
        "https://www.youtube.com/embed/enpVbjOSLpQ",
        "https://www.youtube.com/embed/i2NE0cbuQa4",
        "https://www.youtube.com/embed/auAtFC5nfTs",
        "https://www.youtube.com/embed/bMApsb0FpFE",
        "https://www.youtube.com/embed/4xjWX3oRQoc",
      ],
      study: [
        "https://metanit.com/web/react/2.6.php",
        "https://ru.reactjs.org/docs/react-component.html",
        "https://ru.reactjs.org/docs/state-and-lifecycle.html",
        "https://abcinblog.blogspot.com/2018/05/reactjs-6.html",
        "https://tproger.ru/translations/react-after-learning-basics/",
      ],
      links: [
        "https://medium.com/frontend-notes/purecomponent-%D0%B8-components-5c15cf206ba7",
        "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",
      ],
    },
  },
  {
    id: 6,
    title: "Управление ресурсами. Условный рендеринг",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t2-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t2-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l3/tree/l3-t2-3",
      },
    ],
    materials: [
      {
        videos: [
          "https://www.youtube.com/embed/RfHw3oQRbgg",
          "https://www.youtube.com/embed/hZcKg7c7lbQ",
          "https://www.youtube.com/embed/hzB0CvJANn8",
        ],
      },
      {
        study: [
          "https://learn.javascript.ru/nullish-coalescing-operator",
          "https://learn.javascript.ru/optional-chaining",
        ],
      },
      {
        links: [],
      },
    ],
  },
  {
    id: 7,
    title: "Списки и ключи",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t1-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2. Выполнить задание \"Список задач\" Пусть в стейте дан массив: ['тестовое задание 1']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Под списком кнопка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'из поля ввода'. Добавьте кнопочку, по нажатию на которую каждый раз будет исчезать последняя li из списка (каждый раз по одной, пока li в списке не закончатся). Рядом с каждым именем добавить кнопочку, по нажатию на которую li с этим именем будет зачёркиваться запись. Ссылку на пример добавить в комментарии.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t1-2",
      },
    ],
    materials: {
      videos: ["https://www.youtube.com/embed/LeysYaa8iW4"],
      study: [
        "https://learn-reactjs.ru/basics/lists-and-keys",
        "https://ru.reactjs.org/docs/faq-state.html#what-is-the-difference-between-passing-an-object-or-a-function-in-setstate",
        "https://metanit.com/web/react/2.8.php",
      ],
      links: [],
    },
  },
  {
    id: 8,
    title: "Подъём состояния. Композиция компонентов",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-3",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: JS! Посмотреть и кратко описать в карточке плюсы и минусы. Привести СВОЙ пример сравнения и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Выполнить задание и добавьте ссылку в комментариях. Полицейский радар скорости, который сообщает о том, превышена ли скорость или нет.",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l4/tree/t2-7",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/dENUw979QiY",
        "https://www.youtube.com/embed/qdaDgC_xU0w",
        "https://www.youtube.com/embed/a2DkRBnp4ns",
        "https://www.youtube.com/embed/niRuU0RbYgI",
        "https://www.youtube.com/embed/j3MkFO0pUVo",
        "https://www.youtube.com/embed/v6AVfIupNB8",
      ],
      study: [
        "###[Подъём состояния выше по иерархии](https://learn-reactjs.ru/basics/lifting-state-up)",
        "###[Состояние компонента](https://ru.reactjs.org/docs/faq-state.html#what-is-the-difference-between-passing-an-object-or-a-function-in-setstate)",
        "###[Составные компоненты. Поиск в списке](https://metanit.com/web/react/2.8.php)",
      ],
      links: [
        "https://webdevblog.ru/prosto-o-kompozicii-agregacii-i-associacii-v-javascript/",
        "https://learn-reactjs.ru/basics/lifting-state-up",
      ],
    },
  },
  {
    id: 9,
    title: "HOC. Refs. Контекст. Формы. Валидация.",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть видео ролик и добавить комментарием одностраничное описание кода из примера видео и картинку запущенного решения из stackblitz.com. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Изучить понятие контекста и дать своё определение терминам: React.createContext; Context.Provider;Class.contextType; Context.Consumer; Context.displayName",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть видео ролик и добавить комментарием одностраничное описание кода из примера видео и картинку запущенного решения из stackblitz.com ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-3",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Изучить понятие Refs и дать определение термину: React.createRef",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть видео ролик и добавить комментарием одностраничное описание кода из примера видео и картинку запущенного решения из stackblitz.com ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Изучить понятие перенаправления refs и дать определение термину: React.forwardRef",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Посмотреть видео ролик и добавить комментарием одностраничное описание кода из примера видео и картинку запущенного решения из stackblitz.com ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-7",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8: Посмотреть и кратко описать в карточке сюжет видео ролика. Что вам понравилось? А что хотелось бы улучшить в рассказе? Перепишите пример с видео в вашем новом приложении на stackblitz.com и добавьте картинку запущенного решения с ссылкой в комментариях. ",
        taskLink: "https://codesandbox.io/s/loving-greider-jrncu",
      },
      {
        taskNumber: "9",
        taskDesc:
          "9: Посмотреть видео ролик и добавить комментарием одностраничное описание кода из примера видео и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-9",
      },
      {
        taskNumber: "10",
        taskDesc:
          '10: Написать новое приложение и добавить код с картинкой и ссылкой на приложение из stackblitz.com. Требования к форме. Поля ввода: Фамилия, Имя, Отчество, Дата рождения, Телефон, E-mail. Добавить кнопку "Отправить". Функционал кнопки отправка данных по адресу POST: https://jsonplaceholder.typicode.com/posts Требования к запросу: по нажатию "Отправить" заблокировать изменение полей, после ответа с сервера поменять все поля ввода на текстовые поля. Валидация полей: Фамилия - "Не более 50 символа",Имя - "Не более 31 символа", Отчество - "Не более 31 символа", Дата рождения - в формате "dd.MM.yyyy", Телефон-"Маска “+7(NNN) NNN NN NN”, где N – любая цифра", E-mail - "валидация email". Все поля обязательны, кроме E-mail',
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t1-10",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/7W4PD4BN3eY",
        "https://www.youtube.com/embed/hoQz95Fh84c",
        "https://www.youtube.com/embed/Q_UvAaKSK90",
        "https://www.youtube.com/embed/6OoMglkreKs",
        "https://www.youtube.com/embed/RLWniwmfdq4",
        "https://www.youtube.com/embed/mLwsIPBDr8A",
        "https://www.youtube.com/embed/LIkIM5u1mCk",
        "https://www.youtube.com/embed/Tln-wtsp8do",
      ],
      study: [
        "https://habr.com/ru/post/540442/",
        "https://ru.reactjs.org/docs/context.html",
        "https://ru.reactjs.org/docs/refs-and-the-dom.html",
        "https://ru.reactjs.org/docs/forwarding-refs.html",
      ],
      links: ["https://jsonplaceholder.typicode.com/posts"],
    },
  },
  {
    id: 10,
    title: "Маршрутизация",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: EN Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-3",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: EN Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Посмотреть видео ролик и добавить решение в комментарии ссылку на stackblitz.com и картинку запущенного решения. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l5/tree/t2-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. Ссылки меняют только URL, а не фактический компонент, отображаемый на странице что можно сделать?",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. Что такое блокировка переходов в истории api для React Router?",
      },
      {
        taskNumber: "9",
        taskDesc:
          "9: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. Приведите пример как получить параметры запроса и параметры контекстов в react-router-dom.",
      },
      {
        taskNumber: "10",
        taskDesc:
          "10: Самостоятельно найдите ответ на вопрос и добавьте ответ комментарием к карточке. Что такое window.performance.navigation.type и как после F5 загрузить нужную страницу?",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/kt1EwqBa7aA",
        "https://www.youtube.com/embed/5X5ZLWdAnt4",
        "https://www.youtube.com/embed/z7rhAp56Xvw",
        "https://www.youtube.com/embed/aHv_3g2Fw8A",
        "https://www.youtube.com/embed/KaoyIX-X69g",
        "https://www.youtube.com/embed/Vok-FQDjoiM",
        "https://www.youtube.com/embed/yYq0rWESsNY",
      ],
      study: [
        "[REACT-ROUTER-DOM](https://reactrouter.com/web/guides/quick-start)",
      ],
      links: [],
    },
  },
  {
    id: 11,
    title: "Хуки. Основные хуки",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-3",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-7",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-8",
      },
      {
        taskNumber: "9",
        taskDesc:
          "9: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-9",
      },
      {
        taskNumber: "10",
        taskDesc:
          '10: Что делает плагин "eslint-plugin-react-hooks"? Зачем нужен? Как настраивать?',
      },
      {
        taskNumber: "11",
        taskDesc:
          "11: EN Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t1-11",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/playlist?list=PLz_dGYmQRrr-g02jHDzuu-6VlOt8-8Uu5",
        "https://www.youtube.com/embed/hQRPsKzpo34",
        "https://www.youtube.com/embed/hwPo6OLBbD8",
        "https://www.youtube.com/embed/QPEB3ZQLTZY",
        "https://www.youtube.com/embed/rUGDM7MaRvk",
        "https://www.youtube.com/embed/slaaDOt0ZvM",
        "https://www.youtube.com/embed/8Yy6MDsF-Tg",
        "https://www.youtube.com/embed/wPQlz4M4rnI",
        "https://www.youtube.com/embed/X1Skt2n7y3U",
        "https://www.youtube.com/embed/ItUwRSXxwwk",
        "https://www.youtube.com/embed/ScT4ElKd6eo",
      ],
      study: [
        "https://michaellandis.medium.com/this-aint-your-grandma-s-react-ii-how-state-works-without-classes-dd75d29af217",
        "https://dmitripavlutin.com/react-usestate-hook-guide/",
        "https://dmitripavlutin.com/react-useeffect-explanation/",
        "https://dmitripavlutin.com/react-useref-guide/",
        "https://dmitripavlutin.com/react-useref-guide/",
        "https://vrogov-exceedteam.gitbook.io/react-hooks-redux/",
        "https://ru.hexlet.io/blog/posts/predvaritelnaya-versiya-react-17-oboshlis-bez-novoy-funktsionalnosti",
      ],
      links: ["https://ru.reactjs.org/docs/hooks-reference.html"],
    },
  },
  {
    id: 12,
    title: "Введение в Flux и Redux. Дополнительные хуки React",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть и кратко описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t2-1",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть и своими словами описать что такое: Reducer, Actions, Action Creators, Store, описать в карточке сюжет видео ролика. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t2-2",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: изучить материал на странице и кратко пересказать для чего нужен хук useDebugValue(value) ",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Посмотреть и кратко пересказать в карточке для чего нужен хук const [state, dispatch] = useReducer(reducer, initialArg, init);. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t2-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5: Посмотреть и кратко пересказать в карточке для чего нужен хук const memoizedCallback = useCallback( () => { doSomething(a, b); }, [a, b], );. объяснить на примере что такое мемозолированный колбэк. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t2-5",
      },
      {
        taskNumber: "6",
        taskDesc:
          "6: Посмотреть и кратко пересказать в карточке для чего предназначен хук const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);. Объяснить понятие хука применение на примере. Перепишите пример с видео и добавьте ссылку в комментариях. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t2-6",
      },
      {
        taskNumber: "7",
        taskDesc:
          "7: Посмотреть видео и рассказать на примере как создавать и зачем нужны кастомные хуки: ",
      },
      {
        taskNumber: "8",
        taskDesc:
          "8*: EN: Посмотреть видео и рассказать на примере чем отличается МVC от FLUX ",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/l4tKCCGUeMo",
        "https://www.youtube.com/embed/WLVjYRBoDgU?list=PLqHlAwsJRxANFIgAf7BO8hNYdvipLERxQ",
        "https://www.youtube.com/embed/l4tKCCGUeMo",
        "https://www.youtube.com/embed/F8EvdTsl6hU",
        "https://www.youtube.com/embed/bm7wyCDJ7H8",
        "https://www.youtube.com/embed/BGKbJ2aXCog",
        "https://www.youtube.com/embed/p8tqhf5qKOI",
      ],
      study: [
        "https://vrogov-exceedteam.gitbook.io/react-hooks-redux/react/vstuplenie",
        "https://ru.reactjs.org/docs/hooks-custom.html",
        "https://dmitripavlutin.com/react-usestate-hook-guide/",
        "https://dmitripavlutin.com/dont-overuse-react-usecallback/",
        "https://dmitripavlutin.com/use-react-memo-wisely/",
      ],
      links: [
        "https://github.com/Zveroboev/The-Complete-Redux-Book",
        "https://trello.com/1/cards/614f1f60ec296e48d9040e8b/attachments/614f1f60ec296e48d9040ebe/download/Osnovy_Redux__vk_com_tproger.pdf",
        "https://ru.reactjs.org/docs/hooks-reference.html",
        "https://ru.reactjs.org/docs/hooks-reference.html#usedebugvalue",
      ],
    },
  },
  {
    id: 13,
    title: "Введение в React Redux",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотреть цикл из 4-х видео уроков React и Redux 1. Что это за Redux и зачем он нужен. | 2. Подключаемся к Redux. | 3. Структура приложения, combineReducers, контейнеры. | 4. Redux Saga, Генераторы, Redux Thunk. и написать технические требования к каждому из разобранных примеров. Написать решение по собственному ТЗ и добавить в комментарии ссылку на проект в истории карточки. Ответить на вопросы что такое Генераторы, Redux Thunk и Redux Saga",
      },
      {
        taskNumber: "2",
        taskDesc:
          "2: Посмотреть видео и написать технические требования к разобранному приложению. Написать решение по собственному ТЗ и добавить в комментарии ссылку на проект в истории карточки. ",
      },
      {
        taskNumber: "3",
        taskDesc:
          "3: Посмотреть видео и написать технические требования к разобранному приложению. Написать решение по собственному ТЗ и добавить в комментарии ссылку на проект в истории карточки. ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t3-2",
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Изучить материал статьи и написать технические требования к разобранному приложению. Написать решение по собственному ТЗ и добавить в комментарии ссылку на проект в истории карточки. Redux: шаг за шагом Ответить на вопрос комментарием какие выводы вы сделали при изучении статьи?",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/jvkhKRHS2TY",
        "https://www.youtube.com/embed/wzWZDh0dUYE",
        "https://www.youtube.com/embed/MahSyZSFQv8",
        "https://www.youtube.com/embed/DG9rXV1kI0o",
        "https://www.youtube.com/embed/hpR-X2hTcqg",
        "https://www.youtube.com/embed/dgM9OGVfKCQ",
      ],
      study: [
        "https://medium.com/devschacht/redux-step-by-step-e6c42a9b00cd",
        "https://vrogov-exceedteam.gitbook.io/react-hooks-redux/redux-1/sho-take-redaks",
      ],
      links: [],
    },
  },
  {
    id: 14,
    title: "Введение в MobX",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          "1: Посмотрите видео. Перепишите примеры кодов счётчика. Ответьте на вопросы и задания ниже:",
        taskLink: "https://stackblitz.com/github/IvanMarkelov/l7/tree/t1-1",
      },
      {
        taskNumber: "1.1",
        taskDesc:
          "1.1: Напишите код с применением языка plantUML и добавьте сам код и картинку диаграммы data flow описания жизненных циклов Redux и Mobx в комментарии карточки.",
      },
      {
        taskNumber: "1.2",
        taskDesc:
          "1.2: Приведите в истории комментариев сравнительный анализ кодов счётчика написанных с применением Redux и Mobx.",
      },
      {
        taskNumber: "1.3",
        taskDesc:
          "1.3: Для каких проектов рекомендуется использовать Redux, а для каких Mobx?",
      },
      {
        taskNumber: "1.4",
        taskDesc: "1.4: Приведите список плюсов и минусов Redux VS Mobx?",
      },
      {
        taskNumber: "2",
        taskDesc: "2: Посмотрите видео ",
        taskLink: "https://stackblitz.com/github/IvanMarkelov/l7/tree/t1-2",
      },
      {
        taskNumber: "2.1",
        taskDesc:
          "2.1: Что такое и какие задачи расширение MobX Developer Tools помогает решать?",
      },
      {
        taskNumber: "2.2",
        taskDesc: "2.2: Как используется библиотека mobx-react-devtools?",
      },
      {
        taskNumber: "2.3",
        taskDesc: "2.3: Для чего нужна библиотека mobx-react?",
      },
      {
        taskNumber: "2.4",
        taskDesc:
          "2.4: Объясните как вы понимаете использование синтаксиса декоратора своими словами. Для чего нужен @babel/plugin-proposal-decorators? Какие задачи помогает решать включение декоратора в mobx?",
      },
      {
        taskNumber: "2.5",
        taskDesc: "2.5: Какой апи используется в примере ",
      },
      {
        taskNumber: "2.6",
        taskDesc:
          "2.6: Что такое конфигурация? Какие возможности предоставляет использование configure из библиотеки mobx?",
      },
      {
        taskNumber: "2.7",
        taskDesc:
          "2.7: Что такое побочные эфекты (side effects)? Какие есть побочные эффекты в mobx? Как запускать side effects из библиотеки mobx?",
      },
      {
        taskNumber: "2.8",
        taskDesc:
          "2.8: Как создаётся состояние в Mobx? В чём отличия makeAutoObservable(target, overrides?, options?) и makeObservable(target, annotations?, options?)? ",
      },
      {
        taskNumber: "2.9",
        taskDesc:
          "2.9: Для чего нужно observable и как работает наблюдение за объектом?",
      },
      {
        taskNumber: "2.10",
        taskDesc:
          "2.10: Перечислите списки аннотаций, ограничений и опций с описанием применения.",
      },
      {
        taskNumber: "3",
        taskDesc: "3: EN Посмотрите видео ",
        taskLink: "https://stackblitz.com/github/IvanMarkelov/l7/tree/t1-3",
      },
      {
        taskNumber: "3.1",
        taskDesc:
          "3.1: Объясните как использовать MobX для управления состоянием в react с использованием хуков?",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/hNy53MBpkkU",
        "https://www.youtube.com/embed/Yqz4rA85o68",
        "https://www.youtube.com/embed/2ejs-uxSbAk",
      ],
      study: [],
      links: [
        "https://chrome.google.com/webstore/detail/mobx-developer-tools/pfgnfdagidkfgccljigdamigbcnndkod",
        "https://www.npmjs.com/package/mobx-react-devtools",
        "https://www.npmjs.com/package/mobx-react",
        "https://babeljs.io/docs/en/babel-plugin-proposal-decorators",
        "https://mobx.js.org/enabling-decorators.html#enabling-decorators-",
        "https://mobx.js.org/configuration.html",
        "https://mobx.js.org/reactions.html#running-side-effects-with-reactions-",
        "https://mobx.js.org/observable-state.html#creating-observable-state",
        "https://mobx.js.org/observable-state.html#observable",
        "https://mobx.js.org/observable-state.html#available-annotations",
        "https://mobx.js.org/observable-state.html#limitations",
        "https://mobx.js.org/observable-state.html#options-",
      ],
    },
  },
  {
    id: 15,
    title: "Основы тестирования",
    homework: [
      {
        taskNumber: "1",
        taskDesc:
          '1: Добавить в свой итоговый проект меню "Мои проекты на курсе". Перечислить в рамках страницы "Мои проекты на курсе" все темы уроков и в каждом уроке добавить список всех домашних заданий и ссылки на проделанные задачи.',
      },
      {
        taskNumber: "2",
        taskDesc:
          '2: Добавить в свой итоговый проект меню "Материалы". Перечислить в рамках страницы Темы уроков и в каждой теме: Список всех видеоуроков для домашних работ и Список всех ссылок которые предложены для домашних работ во вложении и комментариях',
      },
      {
        taskNumber: "3",
        taskDesc:
          '3: Добавить в свой итоговый проект меню "Обратная связь о курсе". Написать отзыв как вам понравился курс.',
      },
      {
        taskNumber: "4",
        taskDesc:
          "4: Посмотрите . Перепишите пример и добавьте в комментариях ссылку на ",
        taskLink:
          "https://stackblitz.com/github/IvanMarkelov/react-l6/tree/t3-4",
      },
      {
        taskNumber: "5",
        taskDesc:
          "5*: Посмотрите список из 12 видеоуроков . Перепишите примеры из видео занятий и приложите в комментариях ссылку на ",
      },
    ],
    materials: {
      videos: [
        "https://www.youtube.com/embed/v4pycbXkP1Y?list=PLNkWIWHIRwMEsMUc0B-lYb7DTLroWlKLK",
        "https://www.youtube.com/embed/Ex2j4oIweDk",
        "https://www.youtube.com/embed/v4pycbXkP1Y?list=PLNkWIWHIRwMEsMUc0B-lYb7DTLroWlKLK",
      ],
      study: [
        "https://jestjs.io/ru/docs/getting-started",
        "https://create-react-app.dev/docs/running-tests",
        "https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17",
      ],
      links: ["https://enzymejs.github.io/enzyme/"],
    },
  },
];

export default lessons;
