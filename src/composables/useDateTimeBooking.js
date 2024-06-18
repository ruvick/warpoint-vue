export const stylesColor = {
  0: 'blue-1',
  1: 'negative',
  2: 'blue-1',
  3: 'negative',
  selected: '',
  defColor: '',
}

export const getPriceAndStyles = (array) => {
  const updatedStyles = {}
  array.forEach(timeSlot => {
    updatedStyles[timeSlot.price] = timeSlot.style ? timeSlot.style : 'defColor'
  })
  return updatedStyles
}

export const currentTime = {
  hour: new Date().getHours(),
  day: new Date().getDate(),
  month: new Date().getMonth() + 1
}

export const getTimeSlotCaption = (timeSlot) => {
  return timeSlot.start.split('T')[1].split(':00+')[0]
}

export const getTimeSlotStyle = (timeSlot) => {
  return stylesColor[timeSlot.style]
}
