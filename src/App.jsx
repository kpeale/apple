import Hero from './components/Hero';
import Nav from './components/Nav';
import ProductViewer from './components/ProductViewer';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Showcase from './components/Showcase';
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
}

export default App;
