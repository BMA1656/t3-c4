export const newObject = async (description, next) => {
  const plantDescriptionElement = document.getElementById('plantDescription')
  const plantCareElement = document.getElementById('consejos')
  plantDescriptionElement.textContent = description.info.description
  for (const careKey in description.info.care) {
    plantCareElement.innerHTML += `
    <div><p>
    <img src="Assets/icons/${careKey}.svg" alt="${careKey}">
    ${careKey}, ${description.info.care[careKey]}
   </p></div> 
    `
  }
  next()
}
