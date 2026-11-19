import { Component, signal } from '@angular/core';
import { quizQuestions, codingExercises, QuizQuestion, CodingExercise } from './exercises.data';

@Component({
  selector: 'app-exercises',
  standalone: true,
  templateUrl: './exercises.html',
  styleUrl: './exercises.css'
})
export class ExercisesPage {
  quizQuestions = quizQuestions;
  codingExercises = codingExercises;

  selectedAnswers = signal<Record<number, number>>({});
  submittedQuizzes = signal<Set<number>>(new Set());
  expandedExercises = signal<Set<number>>(new Set());
  showHints = signal<Set<number>>(new Set());
  showSolutions = signal<Set<number>>(new Set());
  activeTab = signal<'quizzes' | 'coding'>('quizzes');
  selectedTopic = signal<string>('all');

  getTopics() {
    const topics = new Set<string>();
    this.quizQuestions.forEach(q => topics.add(q.topic));
    this.codingExercises.forEach(e => topics.add(e.topic));
    return ['all', ...Array.from(topics).sort()];
  }

  getFilteredQuizzes() {
    if (this.selectedTopic() === 'all') return this.quizQuestions;
    return this.quizQuestions.filter(q => q.topic === this.selectedTopic());
  }

  getFilteredExercises() {
    if (this.selectedTopic() === 'all') return this.codingExercises;
    return this.codingExercises.filter(e => e.topic === this.selectedTopic());
  }

  selectAnswer(questionIndex: number, optionIndex: number) {
    const current = this.selectedAnswers();
    this.selectedAnswers.update(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  }

  submitQuiz(questionIndex: number) {
    const submitted = this.submittedQuizzes();
    const newSet = new Set(submitted);
    newSet.add(questionIndex);
    this.submittedQuizzes.set(newSet);
  }

  isCorrect(questionIndex: number): boolean | null {
    const submitted = this.submittedQuizzes().has(questionIndex);
    if (!submitted) return null;
    const selected = this.selectedAnswers()[questionIndex];
    const question = this.quizQuestions[questionIndex];
    return selected === question.correctAnswer;
  }

  getScore(): { correct: number; total: number } {
    let correct = 0;
    const submitted = this.submittedQuizzes();
    this.quizQuestions.forEach((q, i) => {
      if (submitted.has(i) && this.selectedAnswers()[i] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: submitted.size };
  }

  resetQuizzes() {
    this.selectedAnswers.set({});
    this.submittedQuizzes.set(new Set());
  }

  toggleExercise(index: number) {
    const expanded = this.expandedExercises();
    const newSet = new Set(expanded);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    this.expandedExercises.set(newSet);
  }

  toggleHint(index: number) {
    const hints = this.showHints();
    const newSet = new Set(hints);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    this.showHints.set(newSet);
  }

  toggleSolution(index: number) {
    const solutions = this.showSolutions();
    const newSet = new Set(solutions);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    this.showSolutions.set(newSet);
  }

  getOptionClass(
    selected: boolean,
    isCorrectOption: boolean,
    showResult: boolean
  ): string {
    if (showResult && isCorrectOption) {
      return 'border-green-400 bg-green-50 text-green-800';
    }
    if (showResult && selected && !isCorrectOption) {
      return 'border-red-400 bg-red-50 text-red-800';
    }
    if (selected && !showResult) {
      return 'border-red-400 bg-red-50 text-red-800';
    }
    return 'border-gray-200 hover:border-red-300 hover:bg-gray-50 text-gray-700';
  }
}
