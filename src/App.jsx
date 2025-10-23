import Hero from './components/Hero';
import Nav from './components/Nav';
import ProductViewer from './components/ProductViewer';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
