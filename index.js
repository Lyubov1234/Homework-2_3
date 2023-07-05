const validateData = (text, type = "string") => {
  let result = prompt(text);

  if (type === "number") {
    while (!result || isNaN(result)) {
      alert("Вы ввели некорректные данные, попробуйте еще раз");
      result = prompt(text);
    }

    return +result;
  }

  while (!result || !isNaN(result)) {
    alert("Вы ввели некорректные данные, попробуйте еще раз");
    result = prompt(text);
  }

  return result;
};

const getGrade = (experience, isEnglish, isDifficultProjects, isTeamManagement) => {
  let grade = null;
  switch (true) {
    case experience > 2 && experience <= 5 && isEnglish:
      grade = "middle";
      break;
    case experience > 5 && isEnglish && isDifficultProjects:
      grade = "senior";
      break;
    case experience >= 10 && isEnglish && isDifficultProjects && isTeamManagement:
      grade = "principal";
      break;
    default:
      grade = "junior";
  }
  return grade;
};

const getSalary = (grade) => {
  let salary = null;
  switch (grade) {
    case "middle":
      salary = "от 1500$ до 2700$";
      break;
    case "senior":
      salary = "от 3000$";
      break;
    case "principal":
      salary = "от 7000$";
      break;
    default:
      salary = "от 300$ до 1500$";
  }
  return salary;
};

const getChance = (isEnglish, isAlgorithms, isDifficultProjects) => {
  let chance = null;
  switch (true) {
    case !isEnglish || !isAlgorithms:
      chance = "Шансов нет";
      break;
    case !isDifficultProjects:
      chance = "Шансов мало";
      break;
    default:
      chance = "Шансы есть";
  }
  return chance;
};
const showAnketa = (fullName, experience, grade, salary, chance) => {
  alert(`
  Ваше полное Имя: ${fullName}
  Ваш опыт в годах: ${experience}
  Градация: ${grade}
  Примерная зп: ${salary}
  Шансы попасть на работу в корпорацию: ${chance}
`);
};

const init = () => {
  const name = validateData("Введите Имя");
  const surname = validateData("Введите Фамилию");
  const experience = validateData("Введите опыт работы в годах", "number");
  const isDifficultProjects = confirm("Ваши проекты были сложные?");
  const isEnglish = confirm("Вы свободно говорите на английском?");
  const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
  const isTeamManagement = confirm("Тебе нравится управлять командой?");
  const fullName = `${name} ${surname}`;

  const grade = getGrade(experience, isEnglish, isDifficultProjects, isTeamManagement);
  const salary = getSalary(grade);
  const chance = getChance(isEnglish, isDifficultProjects, isAlgorithms);

  showAnketa(fullName, experience, grade, salary, chance);
};

init();
