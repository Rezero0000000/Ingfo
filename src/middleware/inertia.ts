 
import { view } from "../services/View";
import { asset } from "../services/helper";
let pkg = require("../../package.json");

const inertia = () => {
   return (req, res, next) => {
      res.inertia = async (component, inertiaProps = {}, viewProps = {}) => {
         const url = `//${req.get("host")}${req.originalUrl}`;

         let props = { ...inertiaProps, ...viewProps, error : null, user : req.user || {}  } as any;

         

         if(req.cookies.error)
         {
            props.error = req.cookies.error; 
         }

         const inertiaObject = {
            component: component,
            props: props,
            url: url,
            version: pkg.version,
         };

         if (!req.header("X-Inertia")) {
            const html = await view("inertia.html", {
               page: JSON.stringify(inertiaObject),
               title:    "Blogpost",
               app_js: asset("app.js"),
            });

            return res.type("html").send(html);
         }

         res.setHeader("Vary", "Accept");
         res.setHeader("X-Inertia", "true");
         res.setHeader("X-Inertia-Version", pkg.version);

         return res.json(inertiaObject);
      };

      next();
   };
};

export default inertia;
