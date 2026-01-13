import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', visitors: 4000 },
    { name: 'Tue', visitors: 3000 },
    { name: 'Wed', visitors: 2000 },
    { name: 'Thu', visitors: 2780 },
    { name: 'Fri', visitors: 1890 },
    { name: 'Sat', visitors: 2390 },
    { name: 'Sun', visitors: 3490 },
];

export const VisitorChart: React.FC = () => {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                        itemStyle={{ color: '#0ea5e9' }}
                    />
                    <Area type="monotone" dataKey="visitors" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorVisitors)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
