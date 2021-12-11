import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import profile from '../public/perfil.jpg'
import tecsupLogo from '../public/tesupLogo.png'
import Skills from '../components/ListSkills'
import SocialsNetworks from '../components/ListSocialNetwork'

export default function Home() {

  const skillsList = () => {
    const listItems = Skills.map((s) =>
      <li key={s.id}>
        {s.svg}
      </li>
    )
    return (
      <ul>
        {listItems}
      </ul>
    )
  }

  const redes = () => {

    const socialsNetworks = SocialsNetworks.map((r) =>
      <a href={r.url} key={r.id}
        target="_blank"
        rel='noopener noreferrer'
        className={(r.style == 1 ? styles.after_facebook : styles.facebook)}>
        <Image
          src={r.image}
          alt={r.alt}
          width={40}
          height={40}
        />
      </a>
    )

    return (
      <>
        {socialsNetworks}
      </>
    )
  }

  return (
    <>
      <title>Sobre Mi</title>
      <Navbar />
      <div className={styles.container_about_me}>
        <div className={styles.perfilImgContainer}>
          <Image
            src={profile}
            alt="Profile"
            width={250}
            height={250}
            className={styles.perfilImg}
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className={styles.perfil_description}>
          <p className={styles.description}>
            Soy Elard Huaraca Quispe pre profesional en
            <b> Diseño y Desarrollo de Software</b> en <a href="https://www.tecsup.edu.pe/" target="_blank" rel="noopener noreferrer"><u>TECSUP</u></a>.
            Me especializo en el desarrollo <b>Backend</b>.
          </p>
          {redes()}
        </div>
      </div>
      <div className={styles.container_estudios}>
        <div className={styles.container}>
          <h3 className={styles.title_center}>Conocimientos</h3>
          <div className={styles.content_skills}>
            {skillsList(Skills)}
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={`${styles.title_center}`}>Estudios</h3>
          <div className={styles.tecsup}>
            <div style={{ marginBottom: '2rem' }}>
              <h4>TECSUP</h4>
              <p>
                <b>Diseño y Desarrollo de Software</b>
                <br />
                <br />
                <b>2018 - 2021</b>
              </p>
            </div>
            <div>
              <Image
                src={tecsupLogo}
                alt="Tecsup"
                width={350}
                height={125}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem', paddingBottom: '6rem' }}>
        <iframe src="https://drive.google.com/file/d/1CWK03r1aM0t0rWO_pkUh7L1SxQwVUtZq/preview"
          width="850" height="480" allow="autoplay"
          style={{ border: 'none' }}></iframe>
      </div>
    </>
  )
}