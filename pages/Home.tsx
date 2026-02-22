
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { s = 59; m--; }
        else if (h > 0) { s = 59; m = 59; h--; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      id: '1',
      title: 'Midjourney V6 核心精通：从入门到商业变现',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
      bgColor: 'bg-[#1e4d40]', // 深绿色
      price: 19.9,
      originalPrice: 299,
      activeUsers: 120
    },
    {
      id: '2',
      title: 'ChatGPT 高级指令秘籍：写出价值万元的Prompt',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      bgColor: 'bg-gray-100', // 浅灰色
      price: 9.9,
      originalPrice: 159,
      activeUsers: 85
    },
    {
      id: '3',
      title: 'Python 大模型应用开发：LangChain 实战指南',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
      bgColor: 'bg-[#2d3e50]', // 深蓝灰色
      price: 59.0,
      originalPrice: 899,
      activeUsers: 42
    },
    {
      id: '4',
      title: '企业级 AI 降本增效：从方案设计到工具落地',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      bgColor: 'bg-[#4a3f35]', // 深棕色
      price: 129,
      originalPrice: 1280,
      activeUsers: 18
    }
  ];

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative group">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-text-sub text-lg">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 bg-background-light border border-border-subtle rounded-full text-sm focus:ring-2 focus:ring-primary/20" 
              placeholder="搜索AI课程：Prompt工程, Midjourney..." 
              type="text" 
            />
          </div>
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-background-light border border-border-subtle text-text-sub">
            <span className="material-icons-round">notifications_none</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-price-red rounded-full border-2 border-white"></span>
          </button>
        </div>
        <nav className="flex overflow-x-auto hide-scrollbar gap-2.5 mt-3 pb-1">
          {['推荐', 'Prompt工程', 'AI 绘画', '大模型开发', 'AI办公'].map((tab, idx) => (
            <button key={tab} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium ${idx === 0 ? 'bg-primary text-white shadow-md' : 'bg-white text-text-sub border border-border-subtle'}`}>
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-4 mt-4">
        {/* Flash Sale Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-orange to-red-500 p-5 mb-6 text-white shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-icons-round text-sm">bolt</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">限时秒杀 · Flash Sale</span>
            </div>
            <h2 className="text-2xl font-extrabold mb-3">AI全家桶特惠<br/><span className="text-yellow-200">低至 1 折</span> 起拼</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs">距离结束还剩:</span>
              <div className="flex gap-1.5 font-bold text-accent-orange">
                <span className="bg-white px-2 py-0.5 rounded text-sm">{timeLeft.h.toString().padStart(2, '0')}</span>
                <span className="text-white">:</span>
                <span className="bg-white px-2 py-0.5 rounded text-sm">{timeLeft.m.toString().padStart(2, '0')}</span>
                <span className="text-white">:</span>
                <span className="bg-white px-2 py-0.5 rounded text-sm">{timeLeft.s.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-primary to-accent-orange rounded-full"></span>
            热门拼团
          </h3>
          <button className="text-text-sub text-xs font-medium flex items-center">查看更多 <span className="material-icons-round text-sm">chevron_right</span></button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 pb-4">
          {courses.map(course => (
            <Link to={`/course/${course.id}`} key={course.id} className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm border border-border-subtle hover:shadow-lg transition-all">
              <div className={`relative aspect-[3/4] ${course.bgColor} flex items-end justify-center`}>
                <img src={course.image} className="w-full h-full object-cover object-top" alt={course.title} />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-text-main text-xs px-2.5 py-1.5 rounded-full flex items-center gap-1.5 font-medium shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {course.activeUsers}人正在拼
                </div>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h4 className="text-sm font-bold leading-snug line-clamp-2 mb-3 min-h-[40px]">{course.title}</h4>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-bold text-price-red">¥</span>
                    <span className="text-2xl font-extrabold text-price-red">{course.price}</span>
                    <span className="text-xs text-text-sub line-through ml-1">¥{course.originalPrice}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Toast Notification */}
        <div className="fixed bottom-24 left-4 z-40 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full border border-border-subtle flex items-center gap-2 shadow-lg animate-bounce">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 border border-gray-100">
            <img src="https://picsum.photos/50/50?random=1" alt="User" />
          </div>
          <span className="text-[10px] font-medium text-text-main">用户 <span className="text-accent-orange font-bold">阿飞</span> 刚刚发起了拼团</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
