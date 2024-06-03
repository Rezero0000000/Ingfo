 
import { view } from "../services/views";
import { asset } from "../services/helper";
let pkg = require("../../package.json");
const inertia = () => {
   return (req, res, next) => {
      res.inertia = async (component, inertiaProps = {}, viewProps = {}) => {
         try {
            // console.log("res.inertia called with component:", component);

            const url = `//${req.get("host")}${req.originalUrl}`;
            let props = { ...inertiaProps, ...viewProps, error: null, user: req.user || {} };

            if (req.cookies.error) {
               props.error = req.cookies.error;
            }

            const inertiaObject = {
               component: component,
               props: props,
               url: url,
               version: pkg.version,
            };

            // console.log("Constructed inertiaObject:", inertiaObject);

            if (!req.header("X-Inertia")) {
               // console.log("Rendering initial page load");

               const html = await view("inertia.html", {
                  page: JSON.stringify(inertiaObject),
                  title: "Blogpost",
                  app_js: asset("app.js"),
               });

               // console.log("Rendered HTML:", html);
               return res.type("html").send(html);
            }

            console.log("Inertia request detected, sending JSON response");
            res.setHeader("Vary", "Accept");
            res.setHeader("X-Inertia", "true");
            res.setHeader("X-Inertia-Version", pkg.version);

            return res.json(inertiaObject);
         } catch (error) {
            console.error("Error in res.inertia:", error);
            next(error);
         }
      };

      next();
   };
};

export default inertia;
