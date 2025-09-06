"use client";
import { Form, Input, Button, message, Card } from "antd";

export default function ContactUsPage() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      await new Promise((res) => setTimeout(res, 500));
      message.success("Thanks! We'll get back to you soon.");
      form.resetFields();
    } catch {
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Card>
        <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
        <p className="mb-6 text-gray-600">
          Fill out the form and our team will reach out shortly.
        </p>
        <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}> 
            <Input placeholder="Jane Doe" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}> 
            <Input placeholder="jane@example.com" />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter a message" }]}> 
            <Input.TextArea rows={5} placeholder="How can we help?" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Send Message</Button>
        </Form>
      </Card>
    </main>
  );
}