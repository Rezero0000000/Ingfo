import { web } from "./router/public-api";

web.listen(3000)
.then(() => console.log("Server is running on port 3000"))
.catch(err => console.log(err))