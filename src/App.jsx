import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import './global.css';

import styles from './App.module.css';
function App() {
  return (
    <div>

      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Higor Nóbrega"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur, eligendi recusandae natus eius libero. Cum molestiae libero sit! Libero a explicabo porro. Molestias maxime sunt provident excepturi praesentium expedita."
          />
          <Post
            author="Nóbrega Higor"
            content="2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur iure voluptate vero inventore dolor voluptatem illum, nihil voluptatum, molestias esse, voluptates error qui omnis adipisci saepe commodi beatae vel.
        2      "
          />
        </main>
     </div>
    </div>
  );
}

export default App;
