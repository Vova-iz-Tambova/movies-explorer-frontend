import './AboutProject.css';

function AboutProject() {
  return (
    <div className='project' id='project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__table'>
        <div className='project__column'>
          <h3 className='project__table-title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__cell'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__column'>
          <h3 className='project__table-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__cell'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project__timeline'>
        <p className='project__backend'>1 неделя</p>
        <p className='project__frontend'>4 недели</p>
      </div>
      <div className='project__timeline'>
        <p className='project__backend-title'>Back-end</p>
        <p className='project__frontend-title'>Front-end</p>
      </div>
    </div>
  )
};

export default AboutProject;