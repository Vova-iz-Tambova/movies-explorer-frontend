import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h3 className='techs__name'>Технологии</h3>
      <div className='techs__line' />
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='techs__list'>
        <div className='techs__tech'>HTML</div>
        <div className='techs__tech'>CSS</div>
        <div className='techs__tech'>JS</div>
        <div className='techs__tech'>React</div>
        <div className='techs__tech'>Git</div>
        <div className='techs__tech'>Express.js</div>
        <div className='techs__tech'>mongoDB</div>
      </div>
    </section>
  )
};

export default Techs;