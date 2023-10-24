import './AboutProject.css';

function AboutProject() {
  return (
    <div className='project' id='project'>
      <h3 className='project__title'>О проекте</h3>
      <table className='project__table'>
        <tr>
          <th className='project__table-title'>Дипломный проект включал 5 этапов</th>
          <th className='project__table-title'>На выполнение диплома ушло 5 недель</th>
        </tr>
        <tr>
          <th className='project__cell'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</th>
          <th className='project__cell'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</th>
        </tr>
      </table>
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