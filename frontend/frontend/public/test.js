const { useState } = React;

// All 80 questions of the RAADS-R Test
const RAADSRQuestions = [
    "I have difficulty understanding social rules.",
    "I find it hard to make eye contact.",
    "I prefer to be alone rather than with others.",
    "I find it difficult to start a conversation.",
    "I often feel overwhelmed in social situations.",
    "I have trouble recognizing when others are joking.",
    "I find it hard to understand how people feel.",
    "I dislike changes in routine.",
    "I enjoy doing things on my own.",
    "I feel uncomfortable when others touch me.",
    "I have a very good memory for things that interest me.",
    "I find it difficult to understand sarcasm.",
    "I often misinterpret what people say.",
    "I am very sensitive to sounds, tastes, smells, or colors.",
    "I feel anxious when I am in a large group of people.",
    "I find it hard to pick up on nonverbal cues.",
    "I have trouble making friends.",
    "I often feel lonely.",
    "I prefer to watch rather than participate in group activities.",
    "I have trouble understanding other people's perspectives.",
    "I tend to speak my mind without thinking about how it affects others.",
    "I find it hard to empathize with others.",
    "I get very focused on specific interests or hobbies.",
    "I find it hard to express my feelings.",
    "I dislike certain textures or fabrics.",
    "I have difficulty organizing my tasks.",
    "I often daydream or lose focus.",
    "I have strong reactions to changes in my environment.",
    "I find it hard to connect with people emotionally.",
    "I struggle to follow conversations in noisy environments.",
    "I often feel overwhelmed by sensory experiences.",
    "I avoid eye contact.",
    "I have specific routines that I follow.",
    "I often prefer to be alone.",
    "I have a hard time telling stories or jokes.",
    "I find it difficult to join in conversations.",
    "I dislike unexpected events.",
    "I prefer to plan things in detail.",
    "I have trouble following the flow of conversations.",
    "I feel drained after social interactions.",
    "I often prefer activities that involve rules and structure.",
    "I have a strong sense of justice.",
    "I feel more comfortable with things than people.",
    "I get attached to objects or toys.",
    "I find it hard to relate to characters in movies or books.",
    "I have trouble understanding complex ideas.",
    "I often repeat myself when talking.",
    "I find it difficult to make decisions.",
    "I dislike crowded places.",
    "I often get anxious about upcoming events.",
    "I find it hard to deal with changes in plans.",
    "I often misread social situations.",
    "I have difficulty understanding jokes or humor.",
    "I prefer clear instructions.",
    "I have a strong interest in specific topics.",
    "I often need to be reminded to stay on task.",
    "I find it hard to adjust to new environments.",
    "I often struggle to make small talk.",
    "I get stressed when I am interrupted.",
    "I have a tendency to speak in a monotone voice.",
    "I find it hard to enjoy social gatherings.",
    "I often feel like I don't fit in.",
    "I find it hard to understand the emotions of others.",
    "I dislike surprises.",
    "I often get lost in my thoughts.",
    "I have difficulty understanding the intentions of others.",
    "I tend to take things literally.",
    "I often avoid talking about my feelings.",
    "I find it hard to deal with criticism.",
    "I have trouble initiating conversations.",
    "I feel overwhelmed by my emotions.",
    "I find it hard to express empathy.",
    "I prefer structured activities.",
    "I have difficulty understanding the concept of time.",
    "I often struggle to stay focused in conversations.",
    "I find it hard to understand social norms.",
    "I have a tendency to analyze situations too deeply.",
    "I often feel anxious in new situations.",
    "I find it hard to maintain friendships.",
    "I have a strong reaction to loud noises.",
    "I often feel misunderstood."
];

// Scoring interpretation based on the RAADS-R guidelines
const scoringInterpretation = [
    { range: "0-14", interpretation: "No autism traits." },
    { range: "15-24", interpretation: "Mild autism traits." },
    { range: "25-34", interpretation: "Moderate autism traits." },
    { range: "35-39", interpretation: "Severe autism traits." },
    { range: "40-240", interpretation: "Very severe autism traits." },
];

const RAADSRApp = () => {
    const [username, setUsername] = useState('');
    const [answers, setAnswers] = useState(Array(80).fill(null)); // Initialize with null
    const [currentPage, setCurrentPage] = useState(1); // To keep track of the current page
    const totalPages = 2; // Since we have 80 questions in total
    const [showScore, setShowScore] = useState(false); // To control score display
    const [testStarted, setTestStarted] = useState(false); // To track if the test has started

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const startTest = () => {
        if (username.trim() === "") {
            alert("Please enter your username.");
            return;
        }
        setTestStarted(true); // Start the test
    };

    const handleAnswerChange = (index, e) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else {
            const score = calculateScore();
            setShowScore(true); // Show score when last page is submitted
        }
    };

    const calculateScore = () => {
        let score = 0;
        answers.forEach(answer => {
            if (answer === 'yes') {
                score += 2; // Yes answer
            } else if (answer === 'sometimes') {
                score += 1; // Sometimes answer
            }
        });
        return score; // Return the total score
    };

    const getScoreInterpretation = (score) => {
        for (const interpretation of scoringInterpretation) {
            const [min, max] = interpretation.range.split('-').map(Number);
            if (score >= min && (max === undefined || score <= max)) {
                return interpretation.interpretation;
            }
        }
        return "Score out of range.";
    };

    return (
        <div className="container">
            <h1>RAADS-R Autism Test</h1>
            {!testStarted ? (
                <div>
                    <h2>About the RAADS-R Test</h2>
                    <p>
                        The RAADS-R (Ritvo Autism Asperger Diagnostic Scale-Revised) is a screening tool used to help identify autism spectrum disorder (ASD) traits in adults. 
                        It consists of 80 questions designed to assess a range of characteristics and behaviors commonly associated with ASD.
                    </p>
                    <h3>Who Should Take This Test?</h3>
                    <p>
                        This test is intended for individuals who suspect they may have autism or those who want to understand their traits better.
                    </p>
                    <h3>Why Take the RAADS-R Test?</h3>
                    <p>
                        The RAADS-R test helps individuals gain insights into their behaviors and characteristics that may relate to autism.
                    </p>
                    <h3>How to Take the Test:</h3>
                    <ol>
                        <li>Answer all 80 questions honestly.</li>
                        <li>Your score will be displayed at the end.</li>
                    </ol>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
                    />
                    <button onClick={startTest}>Start Test</button>
                </div>
            ) : (
                <div>
                    {currentPage === 1 && (
                        <div>
                            <h3>Questions 1-40:</h3>
                            {RAADSRQuestions.slice(0, 40).map((question, questionIndex) => (
                                <div className="question-container" key={questionIndex}>
                                    <p>{questionIndex + 1}. {question}</p>
                                    <label>
                                        <input
                                            type="radio"
                                            value="yes"
                                            checked={answers[questionIndex] === 'yes'}
                                            onChange={(e) => handleAnswerChange(questionIndex, e)}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="sometimes"
                                            checked={answers[questionIndex] === 'sometimes'}
                                            onChange={(e) => handleAnswerChange(questionIndex, e)}
                                        />
                                        Sometimes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="no"
                                            checked={answers[questionIndex] === 'no'}
                                            onChange={(e) => handleAnswerChange(questionIndex, e)}
                                        />
                                        No
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {currentPage === 2 && (
                        <div>
                            <h3>Questions 41-80:</h3>
                            {RAADSRQuestions.slice(40, 80).map((question, questionIndex) => (
                                <div className="question-container" key={questionIndex}>
                                    <p>{questionIndex + 41}. {question}</p>
                                    <label>
                                        <input
                                            type="radio"
                                            value="yes"
                                            checked={answers[questionIndex + 40] === 'yes'}
                                            onChange={(e) => handleAnswerChange(questionIndex + 40, e)}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="sometimes"
                                            checked={answers[questionIndex + 40] === 'sometimes'}
                                            onChange={(e) => handleAnswerChange(questionIndex + 40, e)}
                                        />
                                        Sometimes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="no"
                                            checked={answers[questionIndex + 40] === 'no'}
                                            onChange={(e) => handleAnswerChange(questionIndex + 40, e)}
                                        />
                                        No
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="next" onClick={handleNextPage}>
                        {currentPage === totalPages ? 'Submit Test' : 'Next'}
                    </button>
                </div>
            )}
            {showScore && (
                <div className="score">
                    <h2>Your Score: {calculateScore()}</h2>
                    <h3>{getScoreInterpretation(calculateScore())}</h3>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<RAADSRApp />, document.getElementById("root"));
