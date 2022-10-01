import GridItem from './GridItem'

import styles from './Grid.module.scss'

const Grid = ({ links }) => {
  return <div className={styles.grid}>
    {links.map(link => (
      <GridItem key={link._id} item={link} />
    ))}
  </div>
}

export default Grid