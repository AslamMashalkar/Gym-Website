

const SectionHead = ({icon, title, clasName}) => {
  return (
    <div className={`section__head ${clasName}`}>
          <span>{icon}</span>
          <h2>{title}</h2>
        </div>
  )
}

export default SectionHead