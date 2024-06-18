// Массив с названиями месяцев
const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

// сегодняшняя дата
const today = new Date()
export const formattedDatetoDay = today.toISOString().slice(0, 10)

// добавление 0 к цифре
export const addLeadZero = (number) => {
  return number < 10 ? "0" + number : number;
}

// Вспомогательная функция для парсинга даты из формата 'YYYY-MM-DD'
const parseDate = (inputDate) => {
  const [year, month, day] = inputDate.split('-').map(Number);
  return { year, month, day };
}

// Функция перевода даты в формат 'DD Месяца'
export const formatDateinDDMM = (inputDate) => {
  const { day, month } = parseDate(inputDate);
  const formattedMonth = monthNames[month - 1];
  return `${day} ${formattedMonth}`;
}

// Функция прибавления дня к дате
export const getNextDay = (inputDate) => {
  const { year, month, day } = parseDate(inputDate);
  const dateObj = new Date(year, month - 1, day);
  dateObj.setDate(dateObj.getDate() + 1);

  const nextYear = dateObj.getFullYear();
  const nextMonth = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const nextDay = dateObj.getDate().toString().padStart(2, '0');

  return `${nextYear}-${nextMonth}-${nextDay}`;
}

export const getPreviousDay = (inputDate) => {
  const { year, month, day } = parseDate(inputDate);
  const dateObj = new Date(year, month - 1, day);
  dateObj.setDate(dateObj.getDate() - 1);

  const previousYear = dateObj.getFullYear();
  const previousMonth = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const previousDay = dateObj.getDate().toString().padStart(2, '0');

  return `${previousYear}-${previousMonth}-${previousDay}`;
}

// создание даты в реальном времени по формату - 25 марта 2024 в 11:45
export const formatRussianDate = () => {
  const currentDate = new Date()
  const day = currentDate.getDate()
  const monthIndex = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  const formattedDate = `${day} ${monthNames[monthIndex]} ${year} в ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  const isoDate = currentDate.toISOString()
  return {
    view: formattedDate,
    iso: isoDate
  }
}

// ввод 2-х дат в формате ISO 8601 с указанием временной зоны в формат - 19 февраля 2024, 19:00 - 20:00
export const formatViewDateRange = (startDateString, endDateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  const startDateFormatted = startDate.toLocaleDateString('ru-RU', options);
  const startTimeFormatted = startDate.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });
  const endTimeFormatted = endDate.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });

  return `${startDateFormatted}, ${startTimeFormatted} - ${endTimeFormatted}`;
}
