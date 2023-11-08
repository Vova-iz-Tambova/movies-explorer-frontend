import './AboutProject.css';

function AboutProject() {
  return (
    <div className='project' id='project'>
      <h3 className='project__title'>О проекте</h3>
      <div className='project__line' />
      <div className='project__table'>
        <div className='project__column'>
          <h4 className='project__table-title'>Дипломный проект включал 5 этапов</h4>
          <p className='project__cell'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__column'>
          <h4 className='project__table-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='project__cell'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project__timeline'>
        <div className='project__backend'>1 неделя</div>
        <div className='project__frontend'>4 недели</div>
      </div>
      <div className='project__timeline'>
        <div className='project__backend-title'>Back-end</div>
        <div className='project__frontend-title'>Front-end</div>
      </div>
    </div>
  )
};

export default AboutProject;