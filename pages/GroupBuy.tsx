
import React from 'react';

const GroupBuy: React.FC = () => {
  const items = [
    {
      id: '1',
      user: '阿飞',
      avatar: 'https://picsum.photos/100/100?random=20',
      time: '2分钟前',
      courseTitle: 'Midjourney V6 核心精通：从入门到商业变现',
      courseImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAp-cCVuBg5JSnsKEBOrh8v0il2E7eef5ElVHdyYaHZfh014FMiYj8bs5E5LlfTo976er0NcSNSWdYiLanW_2-RbJawzzJifM6pSPqk4Jv25XHH9h4rNH2Kvw8EbQfVcuZoidTPhqVHV3ySWKjEM5QZQi4i6LQrztLh6ZnczWxWwJWrTaow1RH4MqRi2v9jqMSXTUlg2CjzJd9uEEXA27H4luC19RC3B36MjHmoYkZI6icCpQcNQdxYeCkIqIkx3neKU4k7a8BhX8',
      price: 19.9,
      origPrice: 299,
      missing: 1,
      timeLeft: '23:54:12'
    },
    {
      id: '2',
      user: 'Lisa.W',
      avatar: 'https://picsum.photos/100/100?random=21',
      time: '15分钟前',
      courseTitle: 'ChatGPT 高级指令秘籍：写出价值万元的Prompt',
      courseImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqn6VLXKaPIKDqBqX1Z881oygtx0Tq3U3npIGuFXr6sebSpchy9s-6N9B_jVSzHQkPe05G4KAMPOgPsDFRPicBaHyFXTccBouODTK0tD1iRtxdmuJ0DhjGixkRC6VPILLXy6FKfQHidjMf9aBAoIGgMPXtMaY50dRA7gZWhuwwo4Ea2JtvivHrmWB_dwAS9VmLm8ydeAbjwapJa1tygq2z3n0RXK5VASqViZ02m897WqoOsVc5dInJlzuhisemyiwd-BK_TzcpdsA',
      price: 9.9,
      origPrice: 159,
      missing: 2,
      timeLeft: null
    }
  ];

  return (
    <div className="pb-24 bg-gray-50 min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border-subtle">
        <div className="px-4 py-3 flex items-center justify-center relative">
          <h1 className="text-lg font-bold">拼团动态</h1>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-sub">
            <span className="material-icons-round">add_circle_outline</span>
          </button>
        </div>
        <div className="flex items-center justify-center px-4">
          <div className="relative flex space-x-8">
            <button className="relative py-3 text-base font-bold text-primary">
              好友在拼
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-full"></span>
            </button>
            <button className="relative py-3 text-base font-medium text-text-sub">
              广场热拼
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 pt-4 space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-border-subtle">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={item.avatar} className="w-10 h-10 rounded-full border border-border-subtle" alt="Avatar" />
                  <span className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] px-1 rounded-md border border-white">好友</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold">{item.user}</h3>
                  <p className="text-xs text-text-sub">{item.time} 发起</p>
                </div>
              </div>
              <button className="text-text-sub"><span className="material-icons-round">more_horiz</span></button>
            </div>

            <div className="flex bg-gray-50 rounded-lg p-2 gap-3 mb-3">
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                <img src={item.courseImg} className="w-full h-full object-cover" alt="Course" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <h4 className="text-sm font-bold line-clamp-2">{item.courseTitle}</h4>
                <div className="text-price-red font-bold text-base">
                  <span className="text-xs">¥</span>{item.price}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-dashed border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px]">?</div>
                </div>
                <span className="text-xs text-text-sub">差 <span className="text-price-red font-bold">{item.missing}</span> 人成团</span>
              </div>
              <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full">立即参与</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GroupBuy;
