// Contenidos en diferentes idiomas
const content = {
    es: {
        title: "Lo más importante del cálculo en un solo lugar",
        limits: "La notación 'e' apareció por primera vez en una carta escrita por Leonhard Euler a Christian Goldbach en 1731. Existe una gran relación entre este peculiar número y la noción de límite.",
        derivatives: "La derivada es una herramienta matemática que permite estudiar el cambio. En su obra Methodus Fluxiorum et Serierum Infinitorum (1671), Newton desarrolló los principios del cálculo diferencial.",
        integrals: "Una suma de Riemann es una aproximación del valor del área bajo la curva de una función mediante la suma finita de las áreas de rectángulos. Si en vez de una suma finita se efectúa una suma infinita, se calcula la integral.",
        about: "Concebido como un proyecto para el curso de Programación II, cuatro estudiantes de la Universidad Nacional de Trujillo fundaron Integrando con el objetivo de enseñar los temas más esenciales del Cálculo de la manera más accesible posible. Esto no se trata de recopilar información como si de una enciclopedia web se tratara, sino de mostrar lo interesante e importante que el Cálculo puede llegar a ser.",
        login: "Iniciar Sesión",
        register: "Regístrate",
        contact: "Contacto",
        partners: "Sitios socios",
        quote: '"Los encantos de esta ciencia sublime, las matemáticas, sólo se revelan a aquellos que tienen el valor de profundizar en ella"',
        author: "Carl Friedrich Gauss"
    },
    en: {
        title: "The most important aspects of calculus in one place",
        limits: "'e' notation first appeared in a letter written by Leonhard Euler to Christian Goldbach in 1731. There is a strong relationship between this peculiar number and the concept of limits.",
        derivatives: "The derivative is a mathematical tool that helps study change. In his work Methodus Fluxiorum et Serierum Infinitorum (1671), Newton developed the principles of differential calculus.",
        integrals: "A Riemann sum is an approximation of the area under the curve of a function using the finite sum of rectangle areas. If an infinite sum is used instead, the well-known integral is obtained.",
        about: "Founded as a project for the Programming II course, four students from the Universidad Nacional de Trujillo created Integrando with the goal of teaching the most essential topics of Calculus in the most accessible way. It is not about compiling information like a web encyclopedia, but rather showing how interesting and important Calculus can be.",
        login: "Login",
        register: "Register",
        contact: "Contact",
        partners: "Partner Sites",
        quote: '"The charms of this sublime science, mathematics, are only revealed to those who have the courage to delve into it."',
        author: "Carl Friedrich Gauss"
    },
    de: {
        title: "Die wichtigsten Aspekte der Mathematik an einem Ort",
        limits: "Die Notation 'e' erschien erstmals in einem Brief, den Leonhard Euler 1731 an Christian Goldbach schrieb. Es gibt eine starke Beziehung zwischen dieser eigenartigen Zahl und dem Konzept der Grenzen.",
        derivatives: "Die Ableitung ist ein mathematisches Werkzeug, das hilft, Veränderungen zu untersuchen. In seinem Werk Methodus Fluxiorum et Serierum Infinitorum (1671) entwickelte Newton die Prinzipien der Differentialrechnung.",
        integrals: "Eine Riemann-Summe ist eine Annäherung an den Flächeninhalt unter der Kurve einer Funktion, indem die endliche Summe der Rechtecksflächen verwendet wird. Wenn stattdessen eine unendliche Summe verwendet wird, erhält man das Integral.",
        about: "Das Projekt wurde als Teil des Programmierkurses II gegründet. Vier Studenten der Universidad Nacional de Trujillo gründeten Integrando mit dem Ziel, die wichtigsten Themen der Mathematik auf die zugänglichste Weise zu lehren. Es geht nicht darum, Informationen wie in einer Web-Enzyklopädie zu sammeln, sondern zu zeigen, wie interessant und wichtig Mathematik sein kann.",
        login: "Anmelden",
        register: "Registrieren",
        contact: "Kontakt",
        partners: "Partnerseiten",
        quote: '"Die Reize dieser erhabenen Wissenschaft, der Mathematik, offenbaren sich nur denen, die den Mut haben, in sie einzutauchen."',
        author: "Carl Friedrich Gauss"
    }
};

// Selección de elementos HTML
const title = document.querySelector('.title');
const limitsDescription = document.querySelector('.limits-description');
const derivativesDescription = document.querySelector('.derivatives-description');
const integralsDescription = document.querySelector('.integrals-description');
const aboutText = document.querySelector('.p-101');
const loginText = document.querySelector('.a-1');
const registerText = document.querySelector('.a-2');
const contactText = document.querySelector('.p-3');
const partnersText = document.querySelector('.p-4');
const quoteText = document.querySelector('.p-1');
const authorText = document.querySelector('.p-2');

// Función para cambiar el idioma
function changeLanguage(language) {
    // Guardar el idioma en localStorage
    localStorage.setItem('selectedLanguage', language);

    // Actualizar el contenido
    title.textContent = content[language].title;
    limitsDescription.textContent = content[language].limits;
    derivativesDescription.textContent = content[language].derivatives;
    integralsDescription.textContent = content[language].integrals;
    aboutText.textContent = content[language].about;
    loginText.textContent = content[language].login;
    registerText.textContent = content[language].register;
    contactText.textContent = content[language].contact;
    partnersText.textContent = content[language].partners;
    quoteText.textContent = content[language].quote;
    authorText.textContent = content[language].author;
}

// Función para cargar el idioma almacenado al iniciar
function loadLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);
}

// Cargar el idioma al abrir la página
document.addEventListener('DOMContentLoaded', loadLanguage);