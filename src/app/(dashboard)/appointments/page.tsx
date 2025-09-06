'use client';

import { Badge, Button, Input, Modal, Space, Table, Tag } from 'antd';
import { useMemo, useState } from 'react';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import AppointmentModal from '@/components/AppointmentModal';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2023-10-26', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Doe', doctorName: 'Dr. Jones', date: '2023-10-27', time: '11:00 AM', status: 'Pending' },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | undefined>(undefined);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return appointments.filter(a =>
      a.patientName.toLowerCase().includes(q) ||
      a.doctorName.toLowerCase().includes(q) ||
      a.status.toLowerCase().includes(q)
    );
  }, [appointments, search]);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => { setIsModalVisible(false); setEditingAppointment(undefined); };

  const handleOk = (values: any) => {
    if (editingAppointment) {
      setAppointments(appointments.map(a => (a.id === editingAppointment.id ? { ...a, ...values } : a)));
    } else {
      setAppointments([{ ...values, id: Date.now() }, ...appointments]);
    }
    setIsModalVisible(false);
    setEditingAppointment(undefined);
  };

  const handleEdit = (record: Appointment) => { setEditingAppointment(record); setIsModalVisible(true); };
  const handleDelete = (record: Appointment) => {
    Modal.confirm({
      title: 'Delete this appointment?',
      onOk: () => setAppointments(appointments.filter(a => a.id !== record.id)),
    });
  };

  const statusTag = (status: Appointment['status']) => {
    const color = status === 'Confirmed' ? 'green' : status === 'Pending' ? 'orange' : 'red';
    return <Tag color={color}>{status}</Tag>;
  };

  const columns = [
    { title: 'Patient', dataIndex: 'patientName', key: 'patientName' },
    { title: 'Doctor', dataIndex: 'doctorName', key: 'doctorName' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (v: Appointment['status']) => statusTag(v) },
    {
      title: 'Action', key: 'action',
      render: (_: string, record: Appointment) => (
        <Space>
          <Button size="small" onClick={() => handleEdit(record)}>Edit</Button>
          <Button size="small" danger onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      )
    },
  ];

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Appointments <Badge count={appointments.length} /></h1>
        <div className="flex items-center gap-2">
          <Input allowClear prefix={<SearchOutlined />} placeholder="Search by name, doctor, or status" value={search} onChange={e => setSearch(e.target.value)} className="w-full md:w-80" />
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>Add</Button>
        </div>
      </div>
      <Table size="middle" columns={columns} dataSource={filtered} rowKey="id" pagination={{ pageSize: 8 }} />
      <AppointmentModal visible={isModalVisible} onCancel={handleCancel} onOk={handleOk} initialValues={editingAppointment} />
    </div>
  );
};

export default AppointmentsPage;