import styles from './projectCard.module.scss'

const ProjectCard = ({title, children, image, technologies, links}) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectContent}>
        <div>
          <h1>{title}</h1>
          <p>
            {children}
          </p>
        </div>
        <ul className={styles.projectLib}>
          {technologies.map(item => <li key={item}>{item}</li>)}
        </ul>
        <ul className={styles.projectLinks}>
          {links.map(({name, link, target}) => {
            if (target === '_blank')
              return <a href={link} target={target} rel='noreferrer' key={name}>{name}</a>
            else
              return <a href={link} target={target} key={name}>{name}</a>
            })}
        </ul>
      </div>
      <img src={image.src} alt={image.alt} />
    </article>
  )
}

export default ProjectCard

