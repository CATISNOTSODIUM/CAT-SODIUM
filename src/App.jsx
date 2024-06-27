import { useState } from 'react'
import './App.css'
import './index.css'
import Contact from './section/contact'
import Projects from './section/projects'
import Competitions from './section/competitions'
import Education from './section/education'
import Blogs from './section/blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='lg:mx-48 md:mx-24 mt-6 mb-10'>
        <div className="display: flex; justify-content: space-between;">
          <div className="flex flex-col gap-2">
            <div className='text-xs'>✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧</div>
            <h1 className="text-3xl">•ﻌ• THITIWAT KOSOLPATTANADURONG</h1>
            <h1 className="text-sm">@ C A T I S N O T S O D I U M</h1>
            <div className='text-xs'>✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧✩₊˚.⋆☾⋆⁺₊✧</div>
            <h2 className="text-xl">═══ About me ═══ </h2>
            <div className="text-sm">Hi! I'm an undergraduate computer science student at National University of Singapore (NUS). I've worked on several projects involving in molecular dynamics simulation. My favourite programming language is Rust despite having used it for only two months. As you can tell from this website, I'm a big fan of cats. Still, I've no idea why I named my account @CATISNOTSODIUM.
            </div>
            <hr />
            <h2 className="text-xl">═══ Working Experiences ═══</h2>
            <Projects />
            <hr />
            <h2 className="text-xl">═══ Personal blogs/projects ═══</h2>
            <Blogs />
            <hr />
            <h2 className="text-xl">═══ Academics ═══</h2>
            <Education /><hr className='text-gray-100' />
            <Competitions />
            <hr />
            <h2 className="text-xl">═══ Contact ═══</h2>
            <Contact />
            <hr />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
