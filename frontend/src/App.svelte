<script>
  import { Router, Route } from "svelte-routing";

  // pages
  import Home from "./page/Home.svelte";
  import Profile from "./page/Profile.svelte";
  import Blog from "./page/Blog.svelte";
  import EditProfile from "./page/EditProfile.svelte";
  import User from "./page/User.svelte";
  import About from "./page/about.svelte";
  import Login from "./auth/Login.svelte";
  import Register from "./auth/Register.svelte";

  // components
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";

  const url = ""
</script>
<Navbar></Navbar>

<Router {url}>
  <main class="px-5 overflow-hidden sm:px-10 md:px-28 lg:px-32">
    <Route path="/" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/user" component={User}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/profile/edit" component={EditProfile}/>
  </main>
</Router>

<Router {url}>
  <Route path="/register" component={Register} />
  <Route path="/login" component={Login} />
</Router>

<Footer></Footer>
