import { Home, Heroes, Media, Items, Blog } from './pages'
import { HeroDetails } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/heroes" element={<Heroes />} />
                        <Route path="/media" element={<Media />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/heroes/:id" element={<HeroDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
