
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GroupBuy from './pages/GroupBuy';
import MyCourses from './pages/MyCourses';
import Profile from './pages/Profile';
import CourseDetail from './pages/CourseDetail';

const App: React.FC = () => {
  const location = useLocation();
  const hideNavPaths = ['/course/'];
  const showNav = !hideNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group-buy" element={<GroupBuy />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>

      {showNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-xl border-t border-border-subtle px-6 py-3 flex justify-between items-center z-50">
          <Link to="/" className={`flex flex-col items-center gap-1 ${location.pathname === '/' ? 'text-primary' : 'text-text-sub'}`}>
            <span className="material-icons-round">home</span>
            <span className="text-[10px] font-bold">首页</span>
          </Link>
          <Link to="/group-buy" className={`flex flex-col items-center gap-1 ${location.pathname === '/group-buy' ? 'text-primary' : 'text-text-sub'}`}>
            <span className="material-icons-round">groups</span>
            <span className="text-[10px] font-medium">拼团</span>
          </Link>
          <Link to="/my-courses" className={`flex flex-col items-center gap-1 ${location.pathname === '/my-courses' ? 'text-primary' : 'text-text-sub'}`}>
            <span className="material-icons-round">class</span>
            <span className="text-[10px] font-medium">我的课</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center gap-1 ${location.pathname === '/profile' ? 'text-primary' : 'text-text-sub'}`}>
            <span className="material-icons-round">person</span>
            <span className="text-[10px] font-medium">个人中心</span>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default App;
