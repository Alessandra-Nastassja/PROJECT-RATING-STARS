import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  questionsAnswers = [];
  currentQuestion: number;
  lastQuestionAnswered: number;
  nextQuestion: number = 0;
  quiz: FormGroup;

  questions = [
    {
      question: 'Pergunta 1'
    },
    {
      question: 'Pergunta 2'
    },
    {
      question: 'Pergunta 3'
    },
    {
      question: 'Pergunta 4'
    },
    {
      question: 'Pergunta 5'
    }
  ];

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.quiz = this.FormBuilder.group({
      answer: ["3"]
    })  
    
    // Pega a última questão respondida
    this.getCurrentQuestion();
  }

  setQuiz() {
    this.questionsAnswers.push({
      question: this.nextQuestion + 1,
      answer: parseInt(this.quiz.value.answer)
    });

    localStorage.setItem("quiz", JSON.stringify(this.questionsAnswers));

    // Passar para a próxima questão
    this.setNextQuestion();
  }

  setNextQuestion() {
    this.nextQuestion++;
  }

  getCurrentQuestion(){
    let lastQuestionArray = [];

    lastQuestionArray = JSON.parse(localStorage.getItem("quiz"));
    this.lastQuestionAnswered = lastQuestionArray.pop().question;

    this.currentQuestion = this.lastQuestionAnswered + 1;

    console.log(this.currentQuestion);
  }
}
