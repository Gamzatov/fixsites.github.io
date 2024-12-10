const words = ["ОБСЛУГОВУВАННЯ", "РОЗРОБКА", "ДИЗАЙН", "ТЕХПІДТРИМКА", "СЕО"]; // Список слов
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const speed = isDeleting ? 50 : 100; // Скорость печати и стирания
  
  // Изменяем текст в зависимости от состояния
  if (!isDeleting) {
    typingElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
  } else {
    typingElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
  }

  // Логика переключения между печатью и стиранием
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Пауза перед стиранием
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Переход к следующему слову
    setTimeout(typeEffect, 500); // Пауза перед началом нового слова
  } else {
    setTimeout(typeEffect, speed); // Продолжение анимации
  }
}

// Запуск анимации
typeEffect();
