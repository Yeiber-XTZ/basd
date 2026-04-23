import React from 'react';
import { 
  Download, 
  Calendar, 
  UserRoundCheck, 
  Dribbble, 
  Timer, 
  Zap, 
  TrendingUp,
  Medal,
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const performanceData = [
  { month: 'JAN', performance: 6.8, target: 6.2 },
  { month: 'FEB', performance: 7.2, target: 6.5 },
  { month: 'MAR', performance: 7.0, target: 6.8 },
  { month: 'APR', performance: 7.8, target: 7.0 },
  { month: 'MAY', performance: 8.2, target: 7.2 },
  { month: 'JUN', performance: 8.5, target: 7.5 },
];

const categoryData = [
  { name: 'Sub-18', value: 45, color: '#5AAC32' },
  { name: 'Sub-23', value: 30, color: '#E7D916' },
  { name: 'Senior', value: 15, color: '#6dad90' },
  { name: 'Master', value: 10, color: '#f4f7f9' },
];

const competitionResults = [
  {
    athlete: 'Isabella Murillo',
    club: 'Club Atletas de Quibdó',
    event: '100m Flat - Women',
    result: '11.42s',
    medal: 'GOLD',
    status: 'verified',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZUBxF7VvHxvPxoavamsnsZcA59OrrKAdlPdJc3L7kD31dHNWMqrtD5o1tGESnYhVU0Ces_37yYMixRNznwnriS-0n96mfbsdA5kRVDX_e8zN4qI8T6vFJcnbMJfU7mRy4lIYZHyjd35c1caYJzoBJFGNq49qw8eIlv6erd9UV-bLUVeoOsUBNWa_FVLr1gOY7PwIOosTkM1t6u-H3xA87rqDDkAgDT_mDfZ9I2dlgUJjEK7lSbhgfuvPFdfBEuhAC6dNTQFoc_t8'
  },
  {
    athlete: 'Carlos Córdoba',
    club: 'Loros Athletics',
    event: 'Long Jump - Men',
    result: '7.84m',
    medal: 'SILVER',
    status: 'verified',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3udLaVPEOMBbkhs6AJhLVTqPKpuAnyYK-3C7Nq4vFYeTYGB8kLY7jaTMN1lycXEXAC8auHt4OKfvVm_O9lQI_c0pRFlNY0GciF_EGNW1W-HJvFAGnOFK_QjGXP7_sgtH_W7_IyM8Zp9XB9UH0iP4dN_yl4Ecbcw_VT7ikYOSH0OKxfOdPQfv1hYbDaLVJek5Aw9_6h6C9dk_4eqa_8fS5ufKg-zlFcbnyqXYkc5osuwYrYhbPwm3Y0dXeLjMk68MfiTSPxoARY4EQ'
  },
  {
    athlete: 'Mateo Mosquera',
    club: 'Condoto Sprint Club',
    event: 'Shot Put - Men',
    result: '16.20m',
    medal: 'BRONZE',
    status: 'pending',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWz1AgfSpCbXCQpBh1HA19tnqC2zPO-gaa7_fXMWwQ1P6nvAiyHh5wM-IlU49PyM6Aftkb6BTAOa9sTmZzxqJKEoDl_4VDMN1bZSdwBcqxRhOy4s36jLycQtKdHjweW6RLi48_ZAGpdaucFuEM3MVKBESJ-_Btek1hE-91UV68w3iqyCyDtgaJdu13HtriNJ5xOxK74OG-__QHMGAM0kmnUz2ItLlFm5iv5Gjpraaoag0p6KjhljICt3PtSkl0ZuiDAi7uur7DqpJD'
  }
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">Strategic Dashboard</h2>
          <p className="text-lg text-on-surface-variant">Real-time performance analytics & institutional overview</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-primary font-bold rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="px-4 py-2 bg-[#5AAC32] text-white font-bold rounded-lg flex items-center gap-2 hover:brightness-110 transition-all shadow-sm">
            <Calendar className="w-4 h-4" />
            Scheduled Events
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={UserRoundCheck} 
          label="Total Athletes" 
          value="1,284" 
          growth="+12%" 
          color="green"
          progress={78}
        />
        <StatCard 
          icon={Dribbble} 
          label="Active Clubs" 
          value="42" 
          growth="+4" 
          color="amber"
          progress={65}
        />
        <StatCard 
          icon={Timer} 
          label="Upcoming" 
          value="08" 
          subtitle="Chocó Regional Open next" 
          growth="In 12 Days" 
          color="blue"
        />
        <StatCard 
          icon={Zap} 
          label="Records Broken" 
          value="15" 
          growth="This Season" 
          color="purple"
          avatars={[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBKEEnpOX9KgGIH2m4RJCVirS4o2_P1Bb1Y424mIAfQNxsXiyN4vq3vUeRq1T84Au2nTjAlxTZJan61SuBGw5jNcb4jf7F64pVnDWxqyRYcW-1c_CDp9vo1cv2UlZeGQA6oVbarNKt9S3_WQiWFS0yezaOI0QrzwoF-k5aOuvXeWlP6tlTxggcxd4eYoSwtdiLu1EN_JwYnEQqO1pY_VG7XAXiQpstXaVWEAoiwHGlkA2pJwVEOCnkBKCVn_btJ6vMFe7lDDVWZIX5F",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD7VPlS3DqtzHbrrobms_lSmXmZr0e8sH64OK6KDqrarmnqo3LvOPrPSWfmYsq6GLyrOnO0p4gm5H9Zf-_oSubiTkGYAu-MhKfJzFU5gMUZcEty7RhgJf4wC6s04-rSJLYGw3Jd5nUKPaZ-r7pGZACsjkfjYr89xu8pYjdf7mp_XD91CiN6Xv7CvCL21-1gYEWSKhLiCTZsATHC5djU7K_LkUZ9wJNKz1Vm8tAi84nze_-UMzquNc2RsocDXJ1fb65RoKrbCAFihUG4"
          ]}
          moreCount={13}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl premium-lift border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-xl font-bold text-primary">Athlete Performance Evolution</h4>
              <p className="text-sm text-on-surface-variant">Weighted average of top 100 competitive results</p>
            </div>
            <select className="bg-surface-bright border-none font-bold rounded-lg text-primary text-sm p-2 outline-hidden">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="flex-1 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <defs>
                  <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5AAC32" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#5AAC32" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#6b7280' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 700 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#5AAC32" 
                  strokeWidth={4} 
                  dot={false} 
                  activeDot={{ r: 6, fill: '#5AAC32' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#E7D916" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl premium-lift border border-gray-100">
          <h4 className="text-xl font-bold text-primary mb-8">Category Distribution</h4>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-primary leading-none">1,284</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {categoryData.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-bold text-on-surface">{item.name}</span>
                </div>
                <span className="text-sm font-black text-primary font-mono">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl premium-lift border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 flex justify-between items-center bg-gray-50/50 border-b border-gray-100">
          <h4 className="text-xl font-bold text-primary">Recent Competition Results</h4>
          <button className="text-sm font-bold text-emerald-700 hover:underline">View All Records</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/30">
                <th className="px-6 py-4 text-xs font-black text-emerald-900 uppercase tracking-widest">Athlete</th>
                <th className="px-6 py-4 text-xs font-black text-emerald-900 uppercase tracking-widest">Event</th>
                <th className="px-6 py-4 text-xs font-black text-emerald-900 uppercase tracking-widest">Result</th>
                <th className="px-6 py-4 text-xs font-black text-emerald-900 uppercase tracking-widest">Medal</th>
                <th className="px-6 py-4 text-xs font-black text-emerald-900 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {competitionResults.map((result, idx) => (
                <tr key={idx} className={cn("hover:bg-gray-50/80 transition-colors", idx % 2 === 1 && "bg-gray-50/30")}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={result.avatar} alt={result.athlete} className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm" />
                      <div>
                        <p className="text-sm font-bold text-primary">{result.athlete}</p>
                        <p className="text-[11px] text-on-surface-variant font-medium">{result.club}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold">{result.event}</td>
                  <td className="px-6 py-4 font-mono font-bold text-primary">{result.result}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black border",
                      result.medal === 'GOLD' ? "bg-[#E7D916]/20 text-[#2d3e50] border-[#E7D916]/50" :
                      result.medal === 'SILVER' ? "bg-gray-100 text-gray-600 border-gray-200" :
                      "bg-orange-50 text-orange-700 border-orange-200"
                    )}>
                      <Medal className="w-3 h-3 fill-current" />
                      {result.medal}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {result.status === 'verified' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#5AAC32] mx-auto fill-[#5AAC32]/10" />
                    ) : (
                      <Clock className="w-5 h-5 text-[#E7D916] mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg transition-all text-gray-400 hover:text-primary">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, growth, color, progress, subtitle, avatars, moreCount }: any) {
  const colorMap: any = {
    green: 'bg-[#5AAC32]/10 text-[#5AAC32] ring-[#5AAC32]/10',
    amber: 'bg-[#E7D916]/10 text-[#E7D916] ring-[#E7D916]/10',
    blue: 'bg-blue-50 text-blue-600 ring-blue-500/10',
    purple: 'bg-purple-50 text-purple-600 ring-purple-500/10'
  };

  const growthColor = growth && growth.includes('+') ? 'text-[#5AAC32]' : 
                    growth && growth.includes('Season') ? 'text-purple-600' :
                    growth && growth.includes('Days') ? 'text-blue-600' : 'text-[#E7D916]';

  return (
    <div className="bg-white p-6 rounded-2xl premium-lift border border-gray-100 flex flex-col group hover:border-[#5AAC32]/10 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-2.5 rounded-xl shadow-sm transition-transform group-hover:scale-110", colorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={cn("flex items-center gap-1 text-xs font-black uppercase tracking-tight", growthColor)}>
          {growth && growth.includes('+') && <TrendingUp className="w-3 h-3" />}
          {growth}
        </span>
      </div>
      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">{label}</p>
      <h3 className="text-4xl font-black text-primary leading-tight font-sans">{value}</h3>
      
      {progress !== undefined && (
        <div className="mt-4 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className={cn("h-full transition-all duration-1000", color === 'green' ? "bg-[#5AAC32]" : "bg-[#E7D916]")} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      
      {subtitle && <p className="text-xs mt-4 text-gray-500 font-bold">{subtitle}</p>}
      
      {avatars && (
        <div className="flex -space-x-2 mt-4">
          {avatars.map((url: string, i: number) => (
            <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
              <img src={url} alt="Athlete" className="w-full h-full object-cover" />
            </div>
          ))}
          {moreCount && (
            <div className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-primary text-[8px] text-white font-black shadow-sm">
              +{moreCount}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
