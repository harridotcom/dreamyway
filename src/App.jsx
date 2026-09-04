import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HajjUmrah from './pages/HajjUmrah'
import EnquiryModal from './components/EnquiryModal'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [enquiryData, setEnquiryData] = useState({})

  const openModal = (data = {}) => {
    setEnquiryData(data)
    setModalOpen(true)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar onEnquire={openModal} />
        <Routes>
          <Route path="/" element={<Home onEnquire={openModal} />} />
          <Route path="/hajj-umrah" element={<HajjUmrah onEnquire={openModal} />} />
        </Routes>
        {modalOpen && (
          <EnquiryModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            initialData={enquiryData}
          />
        )}
        <button className="float-enquire" onClick={() => openModal()}>
          Enquire Now
        </button>
      </div>
    </BrowserRouter>
  )
}

export default App
