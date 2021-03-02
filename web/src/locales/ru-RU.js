import localeAntd from 'antd/es/locale/ru_RU'

const messages = {
  'topBar.issuesHistory': 'История заданий',
  'topBar.projectManagement': 'Управление проектом',
  'topBar.typeToSearch': 'Поиск...',
  'topBar.findPages': 'Поиск страниц...',
  'topBar.actions': 'Действия',
  'topBar.status': 'Статус',
  'topBar.profileMenu.hello': 'Привет',
  'topBar.profileMenu.billingPlan': 'Тарифный план',
  'topBar.profileMenu.role': 'Роль',
  'topBar.profileMenu.email': 'Емайл',
  'topBar.profileMenu.phone': 'Телефон',
  'topBar.profileMenu.editProfile': 'Редактировать профиль',
  'topBar.profileMenu.logout': 'Выйти',
  'lobbyCard.start': 'Начните',
  'lobbyCard.end': 'Конец',
  'lobbyCard.joinRoom': 'вступать',
  'lobbyCard.scheduled': 'Запланированное',
  'lobbyCard.ended': 'оконченный',
  'lobbyCard.participantsInvited':
    '{count, plural, =0 {никто не приглашен} one {Приглашен # студент} other {Приглашены # студента}}',
  'lobbyCard.participantsJoined':
    '{count, plural, =0 {никто не присоединился} one {# студент присоединился} other {Присоединились # студента}}',
  'lobbyCard.participantsAttended':
    '{count, plural, =0 {никто присутствовал} one {Присутствовал # студент} other {Посетили # студента}}',
  'scheduleRoom.button': 'Запланировать комнату',
  'scheduleRoom.modal.title': 'Запланировать комнату',
  'scheduleRoom.modal.okText': 'назначать',
  'scheduleRoom.modal.cancelText': 'отменить',
  'scheduleRoom.form.roomName': 'название комнаты',
  'scheduleRoom.form.roomNameMissing': 'Пожалуйста, введите название комнаты',
  'scheduleRoom.form.time': 'Время начала и окончания',
  'scheduleRoom.form.timeMissing': 'Пожалуйста, введите время',
  'scheduleRoom.form.participants': 'Участников',
  'scheduleRoom.form.selectParticipants.placeholder': 'Пожалуйста, выберите участников',
  'createClass.modal.title': 'Создать класс',
  'createClass.modal.okText': 'Создать',
  'createClass.modal.cancelText': 'отменить',
  'createClass.form.className': 'Имя класса',
  'createClass.form.classNameMissing': 'Пожалуйста, введите имя класса',
  'createClass.form.classSubject': 'Тема',
  'createClass.form.classSubjectMissing': 'Пожалуйста, введите тему',
  'createClass.form.classDescription': 'Описание',
  'home.createClass.button': 'Создать новый класс',
  'home.title.allClasses': 'Все классы',
  'classMenu.placeholder.selectClass': 'Выберите класс',
  'rooms.title.upcomingSessions': 'Предстоящие сеансы',
  'rooms.title.todaysSessions': 'Сегодняшние сеансы',
  'rooms.empty.message': 'Нет комнат для показа',
  'error.message.oops': 'Ой! Что-то пошло не так ...',
  'home.empty.noClasses': 'Нет классов для отображения',
  'rooms.title.Rooms': 'Номера',
  'classlist.title.Classlist': 'Список классов',
  'classlist.button.text': 'Добавить студентов',
  'addStudents.input.add': 'Добавить адрес электронной почты студента',
  'addStudents.modal.title': 'Добавить студентов',
  'addStudents.modal.okText': 'Добавить',
  'addStudents.modal.cancelText': 'Отмена',
  'editProfile.modal.title': 'Редактировать профиль',
  'editProfile.modal.okText': 'Сохранить',
  'editProfile.modal.cancelText': 'отменить',
  'editProfile.form.firstName': 'Имя',
  'editProfile.form.middleName': 'Второе имя',
  'editProfile.form.lastName': 'Фамилия',
  'editProfile.form.phoneNumber': 'телефон',
  'editProfile.form.email': 'Емайл',
  'resources.title.Resources': 'Файлы',
  'resources.button.uploadFile': 'Загрузить файл',
  'resources.button.download': 'Загрузить',
  'resources.empty.noResources': 'Нет файлов для отображения',
  'uploadFile.modal.title': 'Загрузить файл',
  'uploadFile.modal.okText': 'Загрузить',
  'uploadFile.modal.cancelText': 'Отмена',
  'uploadFile.modal.message': 'Щелкните или перетащите файл в эту область для загрузки',
  'uploadFile.form.tags': 'Выбрать теги файла',
  'uploadFile.form.file': 'Выбрать файл',
  'uploadFile.form.createTag': 'Создать новый тег',
  'createTag.modal.title': 'Создать тег',
  'createTag.modal.okText': 'Создать',
  'createTag.modal.cancelText': 'Отмена',
  'createTag.form.name': 'Имя',
  'createTag.form.color': 'Цвет',
  'statistics.title.EngagementStatistics': 'Статистика вовлеченности',
  'room.title.questions': 'Вопросы',
  'room.questions.button': 'Спросить',
  'room.questions.editor': 'Задайте вопрос',
  'statistics.title.students': 'Студенты',
  'statistics.table.show': 'Показать',
  'statistics.table.remove': 'Удалять',
  'classInfo.classroom.title': 'Класс',
  'classInfo.classroom.instructor': 'ИНСТРУКТОР',
  'classInfo.classroom.started': 'Начато',
  'classInfo.classroom.students': 'Студенты',
  'RecentFiles.title.name': 'Последние файлы',
  'upcomingRooms.title.name': 'Предстоящие комнаты',
}

export default {
  locale: 'ru-RU',
  localeAntd,
  messages,
}
