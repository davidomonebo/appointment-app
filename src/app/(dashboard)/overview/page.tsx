'use client';

import { Card, Col, Row, Statistic } from 'antd';
import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ECharts to avoid SSR issues
const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false } as any);

const OverviewPage = () => {
  const [range] = useState<'7d' | '30d'>('7d');

  // Fake dataset for demo
  const data = useMemo(() => {
    const days = range === '7d' ? 7 : 30;
    const labels = Array.from({ length: days }, (_, i) => `Day ${i + 1}`);
    const created = labels.map(() => Math.floor(Math.random() * 10) + 5);
    const completed = labels.map(() => Math.floor(Math.random() * 10));
    const cancelled = labels.map(() => Math.floor(Math.random() * 3));
    return { labels, created, completed, cancelled };
  }, [range]);

  const lineOption = useMemo(() => ({
    tooltip: { trigger: 'axis' },
    legend: { data: ['Created', 'Completed', 'Cancelled'] },
    grid: { left: 40, right: 20, bottom: 30, top: 40 },
    xAxis: { type: 'category', data: data.labels },
    yAxis: { type: 'value' },
    series: [
      { name: 'Created', type: 'line', smooth: true, areaStyle: {}, data: data.created },
      { name: 'Completed', type: 'line', smooth: true, areaStyle: {}, data: data.completed },
      { name: 'Cancelled', type: 'line', smooth: true, areaStyle: {}, data: data.cancelled },
    ],
  }), [data]);

  const pieOption = useMemo(() => {
    const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
    return {
      tooltip: { trigger: 'item' },
      legend: { top: 'bottom' },
      series: [
        {
          name: 'Status Split',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
          label: { show: false, position: 'center' },
          emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
          labelLine: { show: false },
          data: [
            { value: sum(data.completed), name: 'Completed' },
            { value: sum(data.created), name: 'Created' },
            { value: sum(data.cancelled), name: 'Cancelled' },
          ],
        },
      ],
    };
  }, [data]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card><Statistic title="Total Appointments" value={data.created.reduce((a,b)=>a+b,0)} /></Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card><Statistic title="Completed" value={data.completed.reduce((a,b)=>a+b,0)} /></Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card><Statistic title="Cancelled" value={data.cancelled.reduce((a,b)=>a+b,0)} /></Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-4">
        <Col xs={24} md={16}>
          <Card title="Activity">
            <ReactECharts option={lineOption} style={{ height: 320 }} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Status Breakdown">
            <ReactECharts option={pieOption} style={{ height: 320 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OverviewPage;