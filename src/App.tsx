import React, { useState } from 'react'
import { fetchQuizQuestions, Category } from './API'
//Components 
import QuestionCards from './components/QuestionCards'
import ScoreCard from './components/ScoreCard'
//Types 
import { QuestionState, Difficulty } from './API'
// Styles
import { GlobalStyle, Wrapper } from './App.styles'
import  Spinner from './assests/loading.gif'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const options = [
  {
    name: 'Difficulty',
    value: undefined,
  },
  {
    name: 'Easy',
    value: 'EASY',
  },
  {
    name: 'Medium',
    value: 'MEDIUM',
  },
  {
    name: 'Hard',
    value: 'HARD',
  },
]

const categories = [
  {
    name: 'Category',
    value: undefined,
  },
  {
    name: 'Computer Science',
    value: '18',
  },
  {
    name: 'Mythology',
    value: '20',
  },
  {
    name: 'Nature',
    value: '17',
  },
]

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(1);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0].value)
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value)

  
    console.log(selectedOption)
    let level = Difficulty.EASY
    let category = Category.Computerscience

  
  console.log(questions)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    if(selectedOption === 'MEDIUM'){
        level = Difficulty.MEDIUM }
        else if(selectedOption === 'HARD'){
          level = Difficulty.HARD
        };
        if(selectedCategory === '20'){
          category = Category.Mytology }
          else if(selectedOption === '17'){
            category = Category.Nature
          };
        try { const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          category,
          level
        ) 
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false)
          
        } catch(error) {
          console.log(`${error.message}`)
        }
       
        
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
        //User answers
        const answer = e.currentTarget.value;
        //Check answer against correct answer
        const correct = questions[number].correct_answer === answer;
        // Add score if answer is  corrrect
        if(correct) setScore((prev) => prev + 1);
        //Save answer 
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        }
          setUserAnswers(prev => [...prev, answerObject])
          console.log(userAnswers)
      }
  }

  const nextQuestion = () => {
    //Move on to the nex question 
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  //Show results
  const showResults = () => {
      setGameOver(true)
   
  }


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz</h1>
      {gameOver ? (
         <select value={selectedCategory}
         onChange={e => setSelectedCategory(e.target.value)}>
         {categories.map(o => (
          <option key={o.name} value={o.value}>{o.name}</option>
        ))}
         </select>) : null}
      {gameOver ? (
         <select value={selectedOption}
         onChange={e => setSelectedOption(e.target.value)}>
         {options.map(o => (
          <option key={o.name} value={o.value}>{o.name}</option>
        ))}
         </select>) : null}
      {gameOver ? (
      <button className="start" onClick={startTrivia}>
        Start
      </button>) : null}
      {userAnswers.length === TOTAL_QUESTIONS ?
      (<button className="results" onClick={showResults}>
        Show My Answers
      </button>) : null
      }
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <img alt="" src={Spinner}></img>}
      {!loading && !gameOver && (
       <QuestionCards 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined }
        callback={checkAnswer}
       /> 
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ?
       (
      <button className="next" onClick={nextQuestion}>
          Next 
      </button>) : null}
      {gameOver && userAnswers.length === TOTAL_QUESTIONS ?
      (<ScoreCard userAnswers={userAnswers} totalQuestions={TOTAL_QUESTIONS} score={score}/>) : null
          }
    </Wrapper>
    </>
  );
}

export default App;
