
import React from 'react';

const MyCourses: React.FC = () => {
  const learningData = [
    { label: '完成课程', value: '12' },
    { label: '学习小时', value: '45.5' },
    { label: '获得证书', value: '8' }
  ];

  const ongoingCourses = [
    {
      id: '1',
      title: 'Midjourney V6 核心精通：从入门到商业变现',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAp-cCVuBg5JSnsKEBOrh8v0il2E7eef5ElVHdyYaHZfh014FMiYj8bs5E5LlfTo976er0NcSNSWdYiLanW_2-RbJawzzJifM6pSPqk4Jv25XHH9h4rNH2Kvw8EbQfVcuZoidTPhqVHV3ySWKjEM5QZQi4i6LQrztLh6ZnczWxWwJWrTaow1RH4MqRi2v9jqMSXTUlg2CjzJd9uEEXA27H4luC19RC3B36MjHmoYkZI6icCpQcNQdxYeCkIqIkx3neKU4k7a8BhX8',
      progress: 65,
      lastLesson: '第3章 - 提示词进阶语法',
      timeLeft: '1h 20m 剩余'
    },
    {
      id: '2',
      title: 'ChatGPT 高级指令秘籍：写出价值万元的Prompt',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqn6VLXKaPIKDqBqX1Z881oygtx0Tq3U3npIGuFXr6sebSpchy9s-6N9B_jVSzHQkPe05G4KAMPOgPsDFRPicBaHyFXTccBouODTK0tD1iRtxdmuJ0DhjGixkRC6VPILLXy6FKfQHidjMf9aBAoIGgMPXtMaY50dRA7gZWhuwwo4Ea2JtvivHrmWB_dwAS9VmLm8ydeAbjwapJa1tygq2z3n0RXK5VASqViZ02m897WqoOsVc5dInJlzuhisemyiwd-BK_TzcpdsA',
      progress: 12,
      lastLesson: '第1章 - 结构化提示词框架',
      timeLeft: '45m 剩余'
    }
  ];

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-subtle">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">我的课程</h1>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 border border-border-subtle text-text-sub">
            <span className="material-icons-round text-lg">search</span>
          </button>
        </div>
        <div className="flex px-4 gap-6 pt-1">
          {['学习中', '已购买', '收藏', '历史记录'].map((tab, i) => (
            <button key={tab} className={`relative pb-3 text-sm ${i === 0 ? 'font-bold text-primary' : 'font-medium text-text-sub'}`}>
              {tab}
              {i === 0 && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-t-full"></span>}
            </button>
          ))}
        </div>
      </header>

      <main className="px-4 mt-4 space-y-6">
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-border-subtle">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold flex items-center gap-2">
              <span className="material-icons-round text-primary text-base">bar_chart</span>
              学习数据
            </h2>
            <span className="text-xs text-text-sub flex items-center">本周 <span className="material-icons-round text-sm">expand_more</span></span>
          </div>
          <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100">
            {learningData.map(data => (
              <div key={data.label} className="flex flex-col items-center">
                <span className="text-2xl font-extrabold">{data.value}</span>
                <span className="text-[10px] text-text-sub font-medium">{data.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          {ongoingCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl p-3 shadow-sm border border-border-subtle flex gap-3">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img src={course.image} className="w-full h-full object-cover" alt="Course" />
                <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-sm text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <span className="material-icons-round text-[10px]">play_circle</span>
                  <span>12节</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold line-clamp-2">{course.title}</h3>
                    <button className="text-text-sub"><span className="material-icons-round text-base">more_horiz</span></button>
                  </div>
                  <p className="text-[10px] text-text-sub mb-2">上次学习至：{course.lastLesson}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[10px] font-medium text-text-sub mb-1.5">
                    <span>已学 {course.progress}%</span>
                    <span className="text-primary">{course.timeLeft}</span>
                  </div>
                  <div className="w-full bg-gray-50 rounded-full h-1.5 mb-3 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">
                    继续学习
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-text-sub py-4">没有更多课程了</p>
      </main>
    </div>
  );
};

export default MyCourses;
