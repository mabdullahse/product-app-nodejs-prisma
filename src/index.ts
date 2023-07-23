// Inject env variables into process
import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

// Attach an event listener for uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

// Attach an event listener for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

import app from "./server";

app.listen(config.PORT, () => {
  console.log(`hello on http://localhost:3001  ${config.PORT}`);
});
