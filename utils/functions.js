export function omit(obj, arr) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !arr.includes(key)))
}

export function hasAccess(user, permission) {
  return (user?.role?.permissions || []).includes(permission)
}

export function createSelectOption(option) {
  return {
    value: option,
    label: option
  }
}

export function createSelectOptions(options) {
  return options.map((option) => createSelectOption(option))
}

export const getLabelStatusChat = (status) => {
  switch (status) {
    case 'OPENED':
      return 'Открытый'
    case 'CLOSED':
      return 'Закрытый'
    default:
      return status
  }
}

export const getLabelStatus = (status) => {
  switch (status) {
    case 'PUBLISHED':
      return 'Опубликовано'
    case 'MODERATION':
      return 'На модерации'
    default:
      return status
  }
}

export const getLabelRole = (role) => {
  switch (role) {
    case 'ADMIN':
      return 'Админ'
    case 'USER':
      return 'Пользователь'
    case 'MODERATOR':
      return 'Модератор'
    case 'OFICIAL':
      return 'Оф. лицо'
    case 'ENTITY':
      return 'Юр. лицо'
    case 'INDIVIDUAL':
      return 'Физ. лицо'
    case 'RESPONSIBLE ADMIN':
      return 'Ответственный админ'
    case 'RESPONSIBLE USER':
      return 'Ответственный пользователь'
    case 'RESPONSIBLE MODERATOR':
      return 'Ответственный модератор'
    case 'RESPONSIBLE OFICIAL':
      return 'Ответственное оф. лицо'
    case 'RESPONSIBLE ENTITY':
      return 'Ответственное юр. лицо'
    case 'RESPONSIBLE INDIVIDUAL':
      return 'Ответственное физ. лицо'
    default:
      return role
  }
}

export const getLabelCategory = (category) => {
  switch (category) {
    case 'TICKET':
      return 'Тема обращения'
    case 'DIVISION':
      return 'Раздел проектов/статей'
    default:
      return category
  }
}

export const getLabelPermission = (permission) => {
  switch (permission) {
    case 'ACCESS_CLIENT':
      return 'Доступ к сайту'
    case 'ACCESS_DASHBOARD':
      return 'Доступ к административной панели'
    case 'VIEW_USER':
      return 'Просмотр пользователя'
    case 'VIEW_CATEGORY':
      return 'Просмотр категории'
    case 'VIEW_ARTICLE':
      return 'Просмотр статьи'
    case 'VIEW_PROJECT':
      return 'Просмотр проекта'
    case 'VIEW_TICKET':
      return 'Просмотр обращения'
    case 'VIEW_ROLE':
      return 'Просмотр роли'
    case 'ADD_USER':
      return 'Создание пользователя'
    case 'ADD_CATEGORY':
      return 'Создание категории'
    case 'ADD_ARTICLE':
      return 'Создание статьи'
    case 'ADD_PROJECT':
      return 'Создание проекта'
    case 'EDIT_USER':
      return 'Редактирвоание пользователя'
    case 'EDIT_CATEGORY':
      return 'Редактирование категории'
    case 'EDIT_ARTICLE':
      return 'Редактирвоание статьи'
    case 'EDIT_PROJECT':
      return 'Редактирвоание проекта'
    case 'DELETE_USER':
      return 'Удаление пользователя'
    case 'DELETE_CATEGORY':
      return 'Удаление категории'
    case 'DELETE_ARTICLE':
      return 'Удаление статьи'
    case 'DELETE_PROJECT':
      return 'Удаление проекта'
    case 'COMMENT_ARTICLE':
      return 'Комментирование статьи'
    case 'COMMENT_PROJECT':
      return 'Комментирование проекта'
    case 'PURPOSE_PROJECT':
      return 'Предложение проекта'
    case 'PURPOSE_ARTICLE':
      return 'Предложение статьи'
    case 'CHATTING':
      return 'Общение'
    default:
      return 'Не определено'
  }
}

export const getFileSize = (size) => {
  if (!size) return 'Неизвестно'

  const limit = 1024
  const bytes = Number(size)
  const kilobytes = bytes / limit
  const megabytes = kilobytes / limit
  const gigabytes = megabytes / limit

  if (Math.trunc(gigabytes) > 0) return `${Math.round(gigabytes)} ГБ`
  if (Math.trunc(megabytes) > 0) return `${Math.round(megabytes)} МБ`
  if (Math.trunc(kilobytes) > 0) return `${Math.round(kilobytes)} КБ`
  return `${bytes} байт`
}

export const b64EncodeUnicode = (str) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1)
    })
  )
}

export const b64DecodeUnicode = (str) => {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
}
