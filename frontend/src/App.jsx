import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import { Tasks } from './routes/Tasks';
import { Diary } from './routes/Diary';
import { Calendar } from './routes/Calendar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/calender" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
