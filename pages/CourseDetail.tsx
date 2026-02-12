
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 pb-32">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 pointer-events-none">
        <button onClick={() => navigate(-1)} className="w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full pointer-events-auto border border-black/5 shadow-sm">
          <span className="material-icons-round text-lg">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-3">
          <button className="w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full pointer-events-auto border border-black/5 shadow-sm">
            <span className="material-icons-round text-xl">share</span>
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full pointer-events-auto border border-black/5 shadow-sm">
            <span className="material-icons-round text-xl">more_horiz</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full aspect-[4/3] bg-gray-900">
        <img 
          className="w-full h-full object-cover opacity-80" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Dh3PZfLAn6A_BXKmAz1JT6-6AQW1m9NatXBmpORTamONXTU516CweJnlBGwClFmJbU9DsvUsoP7PTm2w34q70kH4omgNJbtErFo6FpUMosCCUhUDNNVSPsQtIjmf-lP5j-dDseIBg9r_m21Yvk3lsTc7e_vZD8fHgAzwEipPKoioGcc5g0PQXReO90v_slzvgxvp1sJREEZ8RIYIdwvH2IBsdMxfGmgX7XM_CHG8c5Yt9VwD4jjxs3z4GsquWpRfYIq30iV6G8g" 
          alt="Course" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/90 text-primary rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer">
            <span className="material-icons-round text-3xl ml-1">play_arrow</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-[10px] font-medium rounded-md text-white border border-white/20">
            2,431 人已加入
          </span>
        </div>
      </section>

      {/* Info Card */}
      <section className="px-4 -mt-4 relative z-10">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-end gap-2 mb-2">
            <div className="flex flex-col">
              <span className="text-xs text-price-red font-bold mb-0.5">拼团特惠</span>
              <span className="text-3xl font-extrabold text-price-red leading-none">¥299</span>
            </div>
            <span className="text-sm text-gray-400 line-through mb-1">¥599</span>
            <span className="ml-auto px-2 py-1 bg-price-red/5 text-price-red text-xs font-bold rounded border border-price-red/10">2人团</span>
          </div>
          <h1 className="text-lg font-bold mb-3 leading-snug">全栈 AI 应用开发：从 Prompt 到商业化部署</h1>
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-sm">star</span>)}
              </div>
              <span className="text-xs text-gray-500 font-medium">4.9</span>
            </div>
            <span className="text-xs text-gray-400">428 条评价</span>
          </div>
        </div>
      </section>

      {/* Group Buys */}
      <section className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-slate-800">正在进行的拼团</h2>
          <button className="text-xs text-gray-500">查看更多 &gt;</button>
        </div>
        <div className="space-y-2">
          <div className="bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full border border-gray-100" src="https://picsum.photos/100/100?random=10" alt="Avatar" />
              <div>
                <p className="text-sm font-semibold">Alex W.</p>
                <p className="text-xs text-gray-500">还差 <span className="text-price-red font-bold">1</span> 人成团</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] text-gray-400">剩余时间</p>
                <p className="text-xs font-mono font-medium">22:45:12</p>
              </div>
              <button className="bg-price-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">去拼单</button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="mt-6 px-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <h2 className="text-base font-bold text-slate-800 mb-4">讲师介绍</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img className="w-14 h-14 rounded-full object-cover border border-gray-100" src="https://picsum.photos/200/200?random=11" alt="Instructor" />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white">
                <span className="material-icons-round text-[10px]">check</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Dr. Chen</h3>
              <p className="text-xs text-gray-500 mt-0.5">前 OpenAI 高级研究员 / 技术博主</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-600 leading-relaxed italic">
              "AI 不会取代人类，但会用 AI 的人会取代不会用 AI 的人。本课程将带你深入理解大模型底层的逻辑。"
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mt-6 px-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold">课程大纲</h2>
            <span className="text-xs text-gray-400">共 8 章 · 24 节</span>
          </div>
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="p-3.5 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-md text-xs flex items-center justify-center font-bold">01</span>
                  <span className="font-semibold text-sm">Prompt Engineering 进阶</span>
                </div>
                <span className="material-icons-round text-gray-400">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 pb-8 pt-3 px-4 z-50">
        <div className="flex items-center gap-3">
          <div className="flex gap-4 pr-2">
            <button className="flex flex-col items-center justify-center text-gray-500 gap-0.5 w-10">
              <span className="material-icons-round text-xl">headset_mic</span>
              <span className="text-[10px]">客服</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-500 gap-0.5 w-10">
              <span className="material-icons-round text-xl">favorite_border</span>
              <span className="text-[10px]">收藏</span>
            </button>
          </div>
          <div className="flex-1 flex gap-3">
            <button className="flex-1 rounded-full bg-orange-50 text-orange-600 flex flex-col items-center justify-center border border-orange-100 py-1.5">
              <span className="text-sm font-bold">¥499</span>
              <span className="text-[10px]">单独购买</span>
            </button>
            <button className="flex-[1.5] rounded-full bg-price-red text-white flex flex-col items-center justify-center shadow-lg shadow-price-red/30 py-1.5">
              <span className="text-sm font-bold">¥299 发起拼团</span>
              <span className="text-[10px] opacity-90">省 ¥200 · 2人成团</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetail;
