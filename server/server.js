const express = require('express');
const cors = require('cors');
const quizRoutes = require('./quiz.routes'); // Update the path accordingly
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Use the quiz routes
app.use('/api/quiz', quizRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



