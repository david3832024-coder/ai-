
import React from 'react';

const Profile: React.FC = () => {
  const menuItems = [
    { icon: 'confirmation_number', label: '我的优惠券', color: 'text-price-red', bg: 'bg-red-50', extra: '3张可用' },
    { icon: 'monetization_on', label: '邀请好友赚钱', color: 'text-accent-orange', bg: 'bg-orange-50', badge: '返现' },
    { icon: 'construction', label: '常用工具', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: 'headset_mic', label: '联系客服', color: 'text-primary', bg: 'bg-purple-50' },
    { icon: 'settings', label: '设置', color: 'text-text-sub', bg: 'bg-gray-100' }
  ];

  return (
    <div className="pb-24">
      <header className="relative bg-white px-6 pt-12 pb-8 mb-4">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-bl-full opacity-50 z-0"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-primary to-accent-orange shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
              <img src="https://picsum.photos/200/200?random=30" className="w-full h-full object-cover" alt="User" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
              <span className="material-icons-round text-accent-orange text-sm">verified</span>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">阿飞同学</h1>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full border border-primary/20">
                <span className="material-icons-round text-[14px]">diamond</span>
                黄金会员
              </span>
              <span className="text-xs text-text-sub">ID: 8849201</span>
            </div>
          </div>
          <button className="text-text-sub"><span className="material-icons-round">settings</span></button>
        </div>
        <div className="flex justify-around mt-8">
          {[
            { label: '收藏', val: 12 },
            { label: '关注', val: 5 },
            { label: '积分', val: 102 },
            { label: '足迹', val: 3 }
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-lg font-bold">{stat.val}</span>
              <span className="text-xs text-text-sub font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="px-4 space-y-4">
        {/* Orders */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border-subtle">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-bold">我的订单</h3>
            <button className="text-xs text-text-sub flex items-center gap-0.5">全部订单 &gt;</button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: 'payment', label: '待付款', count: 1 },
              { icon: 'groups', label: '待拼团', count: 2 },
              { icon: 'school', label: '待上课' },
              { icon: 'rate_review', label: '待评价' }
            ].map(item => (
              <button key={item.label} className="flex flex-col items-center gap-2">
                <div className="relative w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-sub">
                  <span className="material-icons-round">{item.icon}</span>
                  {item.count && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-price-red text-white text-[10px] flex items-center justify-center rounded-full border border-white font-bold">
                      {item.count}
                    </span>
                  )}
                </div>
                <span className="text-xs text-text-sub font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* VIP Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-4 text-white shadow-lg">
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="font-bold text-lg text-amber-300">升级 VIP 会员</h3>
              <p className="text-xs text-gray-300 mt-1">解锁所有高级课程，预计省 ¥2000/年</p>
            </div>
            <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              立即开通
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 transform translate-y-1/4 translate-x-1/4">
            <span className="material-icons-round text-9xl">workspace_premium</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-border-subtle overflow-hidden">
          <div className="divide-y divide-gray-50">
            {menuItems.map(item => (
              <button key={item.label} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group text-left">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${item.bg} ${item.color} flex items-center justify-center`}>
                    <span className="material-icons-round text-lg">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && <span className="bg-price-red text-white text-[10px] px-1.5 py-0.5 rounded ml-1 animate-pulse">{item.badge}</span>}
                </div>
                <div className="flex items-center gap-2">
                  {item.extra && <span className="text-xs text-text-sub">{item.extra}</span>}
                  <span className="material-icons-round text-text-sub text-lg group-hover:text-primary">chevron_right</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
