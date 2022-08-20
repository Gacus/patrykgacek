import imgTv from '../../images/tv.webp'
import imgSparly from '../../images/sparly.webp'
import imgNote from '../../images/note.webp'
import imgAnkietopoll from '../../images/ankietopoll.webp'

export const content = [
  {
    title: 'Porównywarka pakietów TV',
    technologies: ['React', 'Chakra-UI'],
    links: [
      { name: 'Demo', link: 'https://tv.patrykgacek.pl', target: '_self' },
      { name: 'Github', link: 'https://github.com/Gacus/compare-tv-packages', target: '_blank' }
    ],
    image: {src: imgTv, alt: 'Podgląd aplikacji porównywarki pakietów telewizyjnych'},
    body: 'Aplikacja do porównywania pakietów oferty telewizyjnej. Głównie do przećwiczenia metod tablicowych. Jak dotychczas najbardziej reprezentacyjna aplikacja, jeśli chodzi o jakość kodu.'
  },
  {
    title: 'Aplikacja do zarządzania budżetem domowym',
    technologies: ['React', 'Firebase', 'Tailwind.css'],
    links: [
      { name: 'Demo', link: 'https://sparly.herokuapp.com', target: '_blank' },
      { name: 'Github', link: 'https://github.com/Gacus/sparly', target: '_blank' }
    ],
    image: {src: imgSparly, alt: 'Podgląd aplikacji sparly'},
    body: 'Zrobiona w ramach grupowego projektu studenckiego. Projekt wymagałby dużej refaktoryzacji i poprawy interfejsu, jednak chciałem go tutaj umieścić, ze względu na to, że w nim po raz pierwszy zdecydowałem się na użycie firebase (Authentication oraz Realtime Database).'
  },
  {
    title: 'Notatnik',
    technologies: ['React', 'AWS-DynamoDB', 'AWS-Lambda', 'AWS-API-Gateway'],
    links: [
      { name: 'Demo', link: 'https://note.patrykgacek.pl', target: '_self' },
      { name: 'Github', link: 'https://github.com/Gacus/notatnik', target: '_blank' }
    ],
    image: {src: imgNote, alt: 'Podgląd aplikacji notatnik'},
    body: 'Zrobiony z poradnikiem autorstwa Adama (tworcastron.pl), jednak z wykorzystaniem innego back-endu. Aplikacje typu notatnik są idealną opcją do przetestowania w prosty sposób wszystkich podstawowych operacji CRUD i okazał się idealną okazją dla mnie na stworzenie własnego API z AWS.'
  },
  {
    title: 'Projekt w Figmie',
    technologies: [],
    links: [
      { name: 'Podgląd', link: 'https://www.figma.com/file/uPYeQJSgtV2iXPuCSEZabK/Ankietopoll?node-id=2%3A2', target: '_blank' }
    ],
    image: {src: imgAnkietopoll, alt: 'Podgląd projektu aplikacji Ankietopoll'},
    body: 'Zaprojektowany fragment interfejsu aplikacji do ankiet. Posłużył do wykonania projektu w Python-Django.'
  },
]