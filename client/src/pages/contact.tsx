import { Form, Input, Button, message } from 'antd';
import FeedbackSvg from '../assets/Feedback.svg';
import axios from 'axios';
import API_URI from '../constant';
import { useSelector } from 'react-redux';

const Contact = () => {
  const [form] = Form.useForm(); 
  const {currentUser} = useSelector((state: any)=>state.user)
  const onFinish = async (values: any) => {
    try {
      const res = await axios.post(`${API_URI}/feedbacks`, values);
      await axios.post('https://formspree.io/f/mayrbnwk', values);
      message.success("Feedback submitted successfully");
      console.log('Received values:', res);
      form.resetFields();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      message.error("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: "50px"
    }}>
      <Form
        form={form} // Pass the form instance
        name="contact_form"
        onFinish={onFinish}
        layout="vertical"
        style={{ width: '400px' }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
          initialValue={currentUser.data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please input a valid email!' },
          ]}
          initialValue={currentUser.data.email}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <img src={FeedbackSvg} alt="Feedback" style={{height: '500px'}}/>
    </div>
  );
};

export default Contact;
