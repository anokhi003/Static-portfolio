

import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AllBlogs from './pages/AllBlog'
import BlogsByTopic from './pages/BlogsByTopic'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout><Home /></Layout>}></Route>
					<Route path="/blogs" element={<Layout><AllBlogs /></Layout>}> </Route>
					<Route path="/all-blogs" element={<Layout><BlogsByTopic /></Layout>}> </Route>
				</Routes>
			</BrowserRouter> 
		</>
	)
}

export default App
