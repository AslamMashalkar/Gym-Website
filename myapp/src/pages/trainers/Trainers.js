import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' image={HeaderImage}>Lorem ipsum dolor sit amet. Est enim pariatur non aspernatur rerum aut explicabo voluptates et debitis nihil eos itaque maxime. Et fugit laboriosam est illo nihil ut cupiditate deleniti est magnam quas.</Header>

    <section className='trainers'>
      <div className='container trainers__container'>
        {
          trainers.map(({id, image,name, job, socials}) => {
            return (
            <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebook/>, link: socials[2]},
                {icon: <FaLinkedin/>, link: socials[3]}
              ]
            }/>)

                    
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers