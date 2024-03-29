import { Route, Routes } from "react-router-dom"
import Main from "./routes/Main"
import Header from "./components/Header"
import { useState } from "react";
import Preloader from "./components/Preloader";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {

  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Preloader />
  }
  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.div>

  )
}

export default App