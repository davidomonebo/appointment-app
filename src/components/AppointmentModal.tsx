'use client';

import { Button, DatePicker, Form, Input, Modal, Select, TimePicker } from 'antd';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

interface AppointmentFormValues {
  patientName: string;
  doctorName: string;
  date: string; // stored as 'YYYY-MM-DD'
  time: string; // stored as 'HH:mm'
  status?: 'Confirmed' | 'Pending' | 'Cancelled';
}

interface AppointmentModalProps {
  visible: boolean;
  onCancel: () => void;
  onOk: (values: AppointmentFormValues) => void;
  initialValues?: Partial<AppointmentFormValues> | null;
}

const AppointmentSchema = Yup.object().shape({
  patientName: Yup.string().required('Required'),
  doctorName: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  status: Yup.mixed<'Confirmed' | 'Pending' | 'Cancelled'>().oneOf([
    'Confirmed',
    'Pending',
    'Cancelled',
  ]).optional(),
});

const normalizeTimeTo24h = (value?: string) => {
  if (!value) return '';
  // Accept '10:00', '10:00 AM', '22:15'
  const trimmed = value.trim();
  const ampm = trimmed.match(/\s?(AM|PM)$/i);
  let [hours, minutes] = trimmed.replace(/\s?(AM|PM)$/i, '').split(':').map((v) => parseInt(v, 10));
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return '';
  if (ampm) {
    const isPM = /PM/i.test(ampm[1]);
    hours = (hours % 12) + (isPM ? 12 : 0);
  }
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const AppointmentModal = ({ visible, onCancel, onOk, initialValues }: AppointmentModalProps) => {
  const formik = useFormik<AppointmentFormValues>({
    initialValues: {
      patientName: initialValues?.patientName || '',
      doctorName: initialValues?.doctorName || '',
      date: initialValues?.date || '',
      time: normalizeTimeTo24h(initialValues?.time) || '',
      status: (initialValues?.status as any) || 'Pending',
    },
    enableReinitialize: true,
    validationSchema: AppointmentSchema,
    onSubmit: (values) => {
      onOk({
        ...values,
        date: values.date, // 'YYYY-MM-DD'
        time: normalizeTimeTo24h(values.time), // 'HH:mm'
      });
      formik.resetForm();
    },
  });

  // Keep time normalized when user types manually (Input in some browsers)
  useEffect(() => {
    if (formik.values.time) {
      const t = normalizeTimeTo24h(formik.values.time);
      if (t && t !== formik.values.time) formik.setFieldValue('time', t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.time]);

  const dateValue = formik.values.date ? dayjs(formik.values.date, 'YYYY-MM-DD') : null;
  const timeValue = formik.values.time
    ? dayjs(`1970-01-01 ${normalizeTimeTo24h(formik.values.time)}`, 'YYYY-MM-DD HH:mm')
    : null;

  return (
    <Modal
      title={initialValues ? 'Edit Appointment' : 'Add Appointment'}
      open={visible}
      onCancel={onCancel}
      onOk={formik.handleSubmit}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={formik.handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item
          label="Patient Name"
          validateStatus={formik.touched.patientName && formik.errors.patientName ? 'error' : ''}
          help={formik.touched.patientName && formik.errors.patientName}
        >
          <Input
            name="patientName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.patientName}
            placeholder="John Doe"
          />
        </Form.Item>
        <Form.Item
          label="Doctor Name"
          validateStatus={formik.touched.doctorName && formik.errors.doctorName ? 'error' : ''}
          help={formik.touched.doctorName && formik.errors.doctorName}
        >
          <Input
            name="doctorName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.doctorName}
            placeholder="Dr. Jane Smith"
          />
        </Form.Item>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Form.Item
            label="Date"
            validateStatus={formik.touched.date && formik.errors.date ? 'error' : ''}
            help={formik.touched.date && formik.errors.date}
          >
            <DatePicker
              className="w-full"
              placeholder="Select date"
              onChange={(_, dateString) => formik.setFieldValue('date', dateString)}
              value={dateValue}
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item
            label="Time"
            validateStatus={formik.touched.time && formik.errors.time ? 'error' : ''}
            help={formik.touched.time && formik.errors.time}
          >
            <TimePicker
              className="w-full"
              placeholder="Select time"
              format="HH:mm"
              onChange={(_, timeString) => formik.setFieldValue('time', normalizeTimeTo24h(timeString))}
              value={timeValue}
            />
          </Form.Item>
          <Form.Item label="Status">
            <Select
              value={formik.values.status}
              onChange={(v) => formik.setFieldValue('status', v)}
              options={[
                { value: 'Confirmed', label: 'Confirmed' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Cancelled', label: 'Cancelled' },
              ]}
            />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AppointmentModal;
