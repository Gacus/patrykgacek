import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { content } from './content'
import styles from './github.module.scss'

const Github = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.projects}>
        {content.map(({title, technologies, links, image, body}) => (
          <ProjectCard
            title={title}
            technologies={technologies}
            links={links}
            image={image}
            key={title}
          >
            {body}
          </ProjectCard>
        ))}
      </section>
    </div>
  )
}

export default Github