import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}
    >Lorem ipsum dolor sit amet. Qui harum facilis et quod iure ea tempore nobis ut unde cumque eos fugit vero aut aliquam sapiente. Et eaque nulla 33 quis repellat ut reprehenderit facere qui architecto commodi.
    </Header>
    
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href='mailto:aslammashalkar@gmail.com' target='_blank' rel='noreffer noopener'><MdEmail/></a>
          <a href='http://m.me/' target='_blank' rel='noreffer noopener'><BsMessenger/></a>
          <a href='https://wa.me/9356539203' target='_blank' rel='noreffer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact