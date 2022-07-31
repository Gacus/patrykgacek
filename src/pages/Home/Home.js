import styles from './home.module.scss'
import iconGithub from '../../images/github-brands.svg'
import iconLinkedin from '../../images/linkedin-brands.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <article className={styles.content}>
        <h1>Cześć, jestem Patryk :)</h1>
        <div className={styles.divider} />
        <p>
          Pełen pozytywnej energii, 
          swoją przyszłość wiążę z tworzeniem nowoczesnych, 
          szybkich i bezpiecznych aplikacji internetowych.
        </p>
        <p>
          Komunikacja przez API, usługi chmurowe, aplikacje PWA, 
          mnóstwo narzędzi czy świetna społeczność. To wszystko 
          pozwoliło mi zobaczyć jak dobre rozwiązania można tworzyć 
          w oparciu o technologie webowe. Jestem zwolennikiem wytwarzania 
          dobrej jakości kodu, w końcu (przynajmniej na razie 😉) wciąż 
          czytają to ludzie. Nie mogę również nie wspomnieć o kwestii wizualnej - UI/UX to 
          także dla mnie ważna kwestia i lubię w tym przypadku dbać o szczegóły.
        </p>
        <p>
          Na chwilę obecną spośród Angulara Vue i Reacta wybrałem właśnie Reacta. 
          Stwierdziłem, że dobre jego poznanie pozwoli na dalszy rozwój w pozostałych 
          dwóch technologiach i innych. Jestem również wielkim fanem rozwiązań chmurowych, 
          w kontekście aplikacji internetowych wypróbowałem usługi z AWS i Firebase.
        </p>
      </article>
      <nav className={styles.nav}>
        <Link to='github'>
          <div className={styles.icon}>
            <img src={iconGithub} alt='ddd' />
          </div>
          <div>
            <h1>Projekty</h1>
            <p>Kilka wybranych projektów wraz z krótkim opisem i wykorzystanymi technologiami</p>
          </div> 
        </Link>
        <a href='https://www.linkedin.com/in/patryk-gacek' target='_blank' rel="noreferrer">
          <div className={styles.icon}>
            <img src={iconLinkedin} alt='ddd' />
          </div>
          <div>
            <h1>Linkedin</h1>
            <p>Zapraszam do kontaktu</p>
          </div>
        </a>
      </nav>
    </main>
  )
}

export default Home