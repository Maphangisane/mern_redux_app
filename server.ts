import app from './src/app.js';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(chalk.magenta.bold(`Server is running at http://localhost:${PORT}`));
});
