import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      {/* Form */}
      <div className="w-100 bg-linear-to-r/srgb from-[#e7dcfe] to-[#d0e1fc] border border-gray-200 rounded-2xl py-10 p-2 z-10">
        <h3 className="text-center font-bold text-xl">Welcome Back!</h3>
        <i className="text-gray-600 text-center block mb-6">
          We missed you! Please enter your details.
        </i>
        <div className="px-10">
          <Form layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ message: "Please input your email!" }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Nhập password" />
            </Form.Item>
            <Button className="w-full text-white! bg-[#6375f1]! py-5!">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
