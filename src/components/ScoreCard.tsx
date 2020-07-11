import React from 'react';
//Types
import {AnswerObject} from '../App'
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCards.styles';

type props = {
    score: number;
    totalQuestions: number;
    userAnswers:AnswerObject[];
    
}

const ScoreCard: React.FC<props> = ({
    score,
    totalQuestions,
    userAnswers

}) => (
    <Wrapper>
        <p className="number">
            Total score: {score} / {totalQuestions}
        </p>
            {userAnswers.map((userAnswer, i) => (
                <React.Fragment key={i}>
                <p>
                <span dangerouslySetInnerHTML={{ __html: userAnswer.question}} />
                </p>
                {userAnswer.answer === userAnswer.correctAnswer ? 
                (<p>Correct Answer!</p>) : (<p>Your answer:</p>)}
                <ButtonWrapper 
                 correct={userAnswer?.correctAnswer === userAnswer.answer}
                 userClicked={userAnswer?.answer === userAnswer.answer}
                >
                <button>
                <span dangerouslySetInnerHTML={{ __html: userAnswer.answer}} />
                </button>
                </ButtonWrapper>
                <ButtonWrapper 
                correct={userAnswer?.correctAnswer !== userAnswer.answer}
                userClicked={userAnswer?.answer !== userAnswer.answer}
                >
                {userAnswer.answer !== userAnswer.correctAnswer &&
                <button>
                <span dangerouslySetInnerHTML={{ __html: userAnswer.correctAnswer}} />
                </button>}
                </ButtonWrapper>
                
                </React.Fragment>
            ))}
        </Wrapper>
)

export default ScoreCard
