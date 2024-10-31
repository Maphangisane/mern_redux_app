import express from 'express';
declare module 'app' {
	const app: express.Express;
	export default app;
}
