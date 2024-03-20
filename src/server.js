import express from "express";
import cors from "cors";
import { PORT } from "../env.js";
import useDb from "./db/useDb.js";
import {
  routeFavorites,
  routeProducts,
  routeReservation,
  routeUsers,
} from "./routes/index.js";
import { handleError } from "./middlewares/index.js";
import fileUpload from "express-fileupload";

const app = express();

useDb();
app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));
app.use(routeProducts);
app.use(routeReservation);
app.use(routeUsers);
app.use(routeFavorites);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`SERVIDOR ACTIVO ${PORT}`);
});
