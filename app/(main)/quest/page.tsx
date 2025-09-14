'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Target, Lightbulb, Trophy, Star, Zap, CheckCircle, ArrowRight, BookOpen, Puzzle, Palette, Users, Settings, Clock, Code, Heart, Globe, Briefcase } from 'lucide-react';
import styles from './page.module.css';

export default function CareerQuestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showProgress, setShowProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [careerResult, setCareerResult] = useState<any>(null);

  useEffect(() => {
    setShowProgress(true);
  }, []);

  const questions = [
    {
      id: 1,
      question: "What kind of activity do you enjoy the most?",
      options: [
        { id: 'A', text: "Solving complex puzzles or math problems.", icon: <Puzzle size={20} /> },
        { id: 'B', text: "Creating art, music, or writing stories.", icon: <Palette size={20} /> },
        { id: 'C', text: "Organizing events or leading a team project.", icon: <Users size={20} /> },
        { id: 'D', text: "Building things or working with your hands.", icon: <Settings size={20} /> }
      ]
    },
    {
      id: 2,
      question: "Which environment makes you feel most productive?",
      options: [
        { id: 'A', text: "A quiet library or research lab.", icon: <BookOpen size={20} /> },
        { id: 'B', text: "A creative studio or workshop.", icon: <Palette size={20} /> },
        { id: 'C', text: "A busy office with team collaboration.", icon: <Users size={20} /> },
        { id: 'D', text: "Outdoors or hands-on workspace.", icon: <Settings size={20} /> }
      ]
    },
    {
      id: 3,
      question: "What motivates you the most?",
      options: [
        { id: 'A', text: "Discovering new knowledge and insights.", icon: <Lightbulb size={20} /> },
        { id: 'B', text: "Expressing creativity and innovation.", icon: <Star size={20} /> },
        { id: 'C', text: "Leading others to achieve goals.", icon: <Target size={20} /> },
        { id: 'D', text: "Creating something tangible and useful.", icon: <Trophy size={20} /> }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to work?",
      options: [
        { id: 'A', text: "Independently with deep focus.", icon: <Brain size={20} /> },
        { id: 'B', text: "With creative freedom and flexibility.", icon: <Zap size={20} /> },
        { id: 'C', text: "In teams with clear communication.", icon: <Users size={20} /> },
        { id: 'D', text: "With practical, hands-on tasks.", icon: <Settings size={20} /> }
      ]
    },
    {
      id: 5,
      question: "What type of problems do you like solving?",
      options: [
        { id: 'A', text: "Technical and analytical challenges.", icon: <Code size={20} /> },
        { id: 'B', text: "Creative and design challenges.", icon: <Palette size={20} /> },
        { id: 'C', text: "People and communication challenges.", icon: <Heart size={20} /> },
        { id: 'D', text: "Practical and mechanical challenges.", icon: <Settings size={20} /> }
      ]
    },
    {
      id: 6,
      question: "Which skill would you most like to develop?",
      options: [
        { id: 'A', text: "Data analysis and research methods.", icon: <Brain size={20} /> },
        { id: 'B', text: "Artistic techniques and creative tools.", icon: <Palette size={20} /> },
        { id: 'C', text: "Leadership and communication skills.", icon: <Users size={20} /> },
        { id: 'D', text: "Technical and engineering skills.", icon: <Settings size={20} /> }
      ]
    },
    {
      id: 7,
      question: "What impact do you want to make?",
      options: [
        { id: 'A', text: "Advance human knowledge and understanding.", icon: <Lightbulb size={20} /> },
        { id: 'B', text: "Inspire and entertain people.", icon: <Star size={20} /> },
        { id: 'C', text: "Help organizations and people succeed.", icon: <Target size={20} /> },
        { id: 'D', text: "Build solutions that improve daily life.", icon: <Trophy size={20} /> }
      ]
    },
    {
      id: 8,
      question: "Which work style appeals to you most?",
      options: [
        { id: 'A', text: "Research-based with lots of analysis.", icon: <BookOpen size={20} /> },
        { id: 'B', text: "Project-based with creative freedom.", icon: <Zap size={20} /> },
        { id: 'C', text: "Client-facing with lots of interaction.", icon: <Globe size={20} /> },
        { id: 'D', text: "Hands-on with tangible outcomes.", icon: <Briefcase size={20} /> }
      ]
    }
  ];

  const careerPaths = {
    A: {
      title: "Analytical Thinker",
      careers: [
        "Data Scientist",
        "Research Scientist", 
        "Software Engineer",
        "Financial Analyst",
        "Biomedical Researcher",
        "Statistician"
      ],
      description: "You excel at logical thinking, problem-solving, and working with data. You enjoy diving deep into complex problems and finding evidence-based solutions.",
      icon: <Brain size={48} />,
      color: "#3B82F6"
    },
    B: {
      title: "Creative Innovator", 
      careers: [
        "Graphic Designer",
        "UX/UI Designer",
        "Content Creator",
        "Marketing Specialist",
        "Architect",
        "Game Designer"
      ],
      description: "You thrive on creativity and innovation. You love bringing ideas to life and creating experiences that inspire and engage others.",
      icon: <Palette size={48} />,
      color: "#F59E0B"
    },
    C: {
      title: "People Leader",
      careers: [
        "Project Manager",
        "Human Resources Manager",
        "Sales Manager", 
        "Business Consultant",
        "Team Lead",
        "Operations Manager"
      ],
      description: "You're a natural leader who excels at working with people. You enjoy coordinating teams and helping others achieve their goals.",
      icon: <Users size={48} />,
      color: "#10B981"
    },
    D: {
      title: "Hands-On Builder",
      careers: [
        "Mechanical Engineer",
        "Product Manager",
        "Construction Manager",
        "Industrial Designer",
        "Systems Engineer",
        "Technical Specialist"
      ],
      description: "You love building and creating tangible solutions. You prefer practical, hands-on work that produces real-world results.",
      icon: <Settings size={48} />,
      color: "#EF4444"
    }
  };

  const handleAnswerSelect = (questionIndex: number, optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionId
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateCareerPath = () => {
    const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
    
    // Count frequency of each answer type
    Object.values(selectedAnswers).forEach(answer => {
      answerCounts[answer as keyof typeof answerCounts]++;
    });

    // Find the most frequent answer type
    const dominantType = Object.entries(answerCounts)
      .sort(([,a], [,b]) => b - a)[0][0] as keyof typeof careerPaths;

    return careerPaths[dominantType];
  };

  const completeQuest = () => {
    const result = calculateCareerPath();
    setCareerResult(result);
    setIsCompleted(true);
    console.log('Quiz completed! Answers:', selectedAnswers);
    console.log('Career Result:', result);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setCareerResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Show results if quiz is completed
  if (isCompleted && careerResult) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.resultsCard}>
            <div className={styles.resultsHeader}>
              <div 
                className={styles.resultsIcon}
                style={{ backgroundColor: careerResult.color }}
              >
                {careerResult.icon}
              </div>
              <h2 className={styles.resultsTitle}>You are a {careerResult.title}! 🎉</h2>
              <p className={styles.resultsDescription}>
                {careerResult.description}
              </p>
            </div>
            
            <div className={styles.careersSection}>
              <h3 className={styles.careersTitle}>Recommended Career Paths:</h3>
              <div className={styles.careersGrid}>
                {careerResult.careers.map((career, index) => (
                  <div key={index} className={styles.careerCard}>
                    <Star size={16} style={{ color: careerResult.color }} />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Podcast Section */}
            <div className={styles.podcastSection}>
              <h3 className={styles.podcastTitle}>
                🎧 Career Guidance Podcast
              </h3>
              <p className={styles.podcastDescription}>
                Listen to personalized advice and insights for {careerResult.title}s
              </p>
              <div className={styles.audioPlayer}>
                <audio 
                  controls 
                  className={styles.audioControls}
                  preload="metadata"
                >
                  <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
                  <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiN1/LFfScEIXvE796VRwsRUqvg8ahlFg1QqOL3tGMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFA" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                
                <div className={styles.podcastInfo}>
                  <div className={styles.podcastMeta}>
                    <span className={styles.podcastDuration}>Episode 1 • 15 min</span>
                    <span className={styles.podcastHost}>Hosted by Career Experts</span>
                  </div>
                  <p className={styles.podcastTopics}>
                    Topics covered: Career paths, skill development, industry insights, and next steps for {careerResult.title}s
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.resultsActions}>
              <button 
                onClick={restartQuiz} 
                className={styles.restartButton}
              >
                <ArrowRight size={20} />
                Take Quiz Again
              </button>
              <button 
                className={styles.exploreButton}
                style={{ backgroundColor: careerResult.color }}
              >
                <Target size={20} />
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Floating quiz-themed icons */}
      <div className={styles.floatingIcons}>
        <div className={`${styles.floatingIcon} ${styles.icon1}`}>
          <Brain size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon2}`}>
          <Target size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon3}`}>
          <Lightbulb size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon4}`}>
          <Trophy size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon5}`}>
          <Star size={18} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon6}`}>
          <Zap size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon7}`}>
          <Puzzle size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon8}`}>
          <Clock size={20} />
        </div>
      </div>

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <div className={styles.iconWrapper}>
              <Brain size={32} />
            </div>
            <h1 className={styles.title}>Career Quest</h1>
          </div>
          <p className={styles.subtitle}>Discover your perfect career path through our interactive quiz</p>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressInfo}>
            <span className={styles.progressText}>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className={styles.progressPercent}>
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className={styles.progressBarContainer}>
            <div 
              className={`${styles.progressBar} ${showProgress ? styles.progressBarActive : ''}`}
              style={{ width: showProgress ? `${progress}%` : '0%' }}
            >
              <div className={styles.progressBarGlow}></div>
            </div>
          </div>
        </div>

        {/* Quiz Card */}
        <div className={styles.quizCard}>
          {/* Question */}
          <div className={styles.questionSection}>
            <div className={styles.questionBadge}>
              <Target size={16} />
              <span>Question {currentQuestion + 1}</span>
            </div>
            <h2 className={styles.questionText}>
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* Options */}
          <div className={styles.optionsGrid}>
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={option.id}
                onClick={() => handleAnswerSelect(currentQuestion, option.id)}
                className={`${styles.optionCard} ${
                  selectedAnswers[currentQuestion] === option.id ? styles.optionSelected : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.optionContent}>
                  <div className={`${styles.optionIcon} ${
                    selectedAnswers[currentQuestion] === option.id ? styles.optionIconSelected : ''
                  }`}>
                    {option.icon}
                  </div>
                  <div className={styles.optionInfo}>
                    <div className={styles.optionHeader}>
                      <span className={`${styles.optionId} ${
                        selectedAnswers[currentQuestion] === option.id ? styles.optionIdSelected : ''
                      }`}>
                        {option.id}
                      </span>
                      {selectedAnswers[currentQuestion] === option.id && (
                        <CheckCircle size={20} className={styles.checkIcon} />
                      )}
                    </div>
                    <p className={styles.optionText}>{option.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`${styles.navButton} ${styles.prevButton} ${
                currentQuestion === 0 ? styles.navButtonDisabled : ''
              }`}
            >
              Previous
            </button>

            <div className={styles.progressDots}>
              {questions.map((_, index: number) => (
                <div
                  key={index}
                  className={`${styles.progressDot} ${
                    index === currentQuestion
                      ? styles.progressDotCurrent
                      : index < currentQuestion
                      ? styles.progressDotCompleted
                      : ''
                  }`}
                />
              ))}
            </div>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={completeQuest}
                disabled={!selectedAnswers[currentQuestion]}
                className={`${styles.navButton} ${styles.completeButton} ${
                  !selectedAnswers[currentQuestion] ? styles.navButtonDisabled : ''
                }`}
              >
                <Trophy size={20} />
                Complete Quest
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswers[currentQuestion]}
                className={`${styles.navButton} ${styles.nextButton} ${
                  !selectedAnswers[currentQuestion] ? styles.navButtonDisabled : ''
                }`}
              >
                Next
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}