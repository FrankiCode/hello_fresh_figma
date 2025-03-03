import React from 'react'
import { moreQuestions } from '../../../../Mock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'


const MoreQuestion = () => {
  return (
    <div className='question'>
        <div className='question-title'>
            <h2>More questions?</h2>
        </div>
        {
            moreQuestions.map(({id, question}) => {
                return <div key={id} className='questionInner'>
                    <p><FontAwesomeIcon className='chevronCircleDown-question' icon={faChevronCircleDown}/> {question}</p>
                </div>
            })
        }
    </div>
  )
}

export default MoreQuestion