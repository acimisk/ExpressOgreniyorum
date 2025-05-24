import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();
const PORT = process.env.PORT;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);

// setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
