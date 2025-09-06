'use client';

import { Button, Card, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegisterSchema } from '@/schemas';

const RegisterPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      toast.success('Account created!');
      router.push('/login');
    },
  });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-indigo-900 to-gray-900 p-6 text-white">
      <div className="absolute inset-0 bg-black/30" />
      <Card className="z-10 w-full max-w-md backdrop-blur-md" bordered={false}>
        <h1 className="mb-2 text-center text-3xl font-bold">Create account</h1>
        <p className="mb-6 text-center text-gray-500">Start managing your appointments</p>
        <Form onFinish={formik.handleSubmit} layout="vertical" requiredMark={false}>
          <Form.Item label="Name" name="name" validateStatus={formik.touched.name && formik.errors.name ? 'error' : ''} help={formik.touched.name && formik.errors.name}>
            <Input name="name" placeholder="Jane Doe" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          </Form.Item>
          <Form.Item label="Email" name="email" validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''} help={formik.touched.email && formik.errors.email}>
            <Input name="email" placeholder="you@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          </Form.Item>
          <Form.Item label="Password" name="password" validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''} help={formik.touched.password && formik.errors.password}>
            <Input.Password name="password" placeholder="••••••••" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">Create account</Button>
        </Form>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default RegisterPage;
