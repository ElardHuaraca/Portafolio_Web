import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import profile from '../public/perfil.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedin.png'
import cv from '../public/cv.png'
import tecsupLogo from '../public/tesupLogo.png'
import Skills from '../components/ListSkills'

export default function Home() {

  const skillsList = (skills) => {
    const listItems = skills.map((s) =>
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

  const redes = (redes) => {
    return (
      <a href={redes.url}
        target="_blank"
        rel={redes.rel}
        className={redes.style}>
        <Image
          src={redes.img}
          alt={redes.alt}
          width={redes.width}
          height={redes.height}
        />
      </a>
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
            <b> Diseño y Desarrollo de Software</b> en <a href="https://www.tecsup.edu.pe/" target="_blank" rel="TECSUP"><u>TECSUP</u></a>.
            Me especializo en el desarrollo <b>Backend</b>.
          </p>
          {redes({
            url: 'https://www.facebook.com/elard.huaracaquispe/',
            img: facebook,
            rel: 'Facbook',
            alt: 'Facebook',
            width: 35,
            height: 35,
            style: styles.facebook
          })}
          {redes({
            url: 'https://www.linkedin.com/in/elard-huaraca-quispe-a9a8b818b/',
            img: linkedin,
            rel: 'Linkedin',
            alt: 'Linkedin',
            width: 35,
            height: 35,
            style: styles.after_facebook
          })}
          {redes({
            url: '',
            rel: '',
            img: cv,
            alt: 'CV',
            width: 35,
            height: 35,
            style: styles.after_facebook
          })}
        </div>
      </div>
      <div>
        <h3 className={styles.title_center}>Conocimientos</h3>
        <div className={styles.content_skills}>
          {skillsList(Skills)}
        </div>
      </div>
      <div>
        <h3 className={`${styles.title_center} ${styles.title}`}>Estudios</h3>
        <div className={styles.container_estudios}>
          <div>
            <h4>TECSUP</h4>
            <p>
              <b>Diseño y Desarrollo de Software</b>
              <br />
              <br />
              <b>2018 - Actualidad</b>
            </p>
          </div>
          <div >
            <Image
              src={tecsupLogo}
              alt="Tecsup"
              width={350}
              height={125}
            />
          </div>
        </div>
      </div>
    </>
  )
}