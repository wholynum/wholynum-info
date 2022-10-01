import MetaTitle from '../../ui/MetaTitle';
import About from './about/About';
import Grid from './grid/Grid';
import BackCircles from '../../ui/back-circles/BackCircles';

import styles from './Home.module.scss'

const Home = ({links, me}) => {
  return <section className={styles.section}>
    <MetaTitle title="Якушин Вадим. Портфолио." />
    <div className={styles.container}>
      <About me={me} />
      <Grid links={links} />
    </div>
    <BackCircles />
  </section>
};

export default Home;
