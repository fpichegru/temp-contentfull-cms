import heroImg from './assets/hero.svg'

export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                 <h1>Contentful CMS</h1>
                 <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ad saepe aliquam autem magnam quibusdam nostrum ut sequi facere sapiente? Ratione accusantium laborum, iure explicabo exercitationem fugit praesentium tenetur! Nisi ad laboriosam molestias expedita dignissimos necessitatibus. Sapiente, dicta tempore numquam impedit praesentium nam quam, optio explicabo, harum ut consequatur quo dolor odit. Soluta saepe earum molestias repellendus, adipisci impedit maxime alias veritatis.
                 </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="women and the browser" className='img'/>
            </div>

        </div>

    </section>
  )
}