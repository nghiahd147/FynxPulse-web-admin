import { Input } from "~/components/ui/input";
import type { Route } from "./+types/login";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Đăng ký Fynx" }, { name: "description", content: "Welcome to Fynx!" }];
}

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData.get("email"));
  };

  return (
    <>
      <div className="w-full h-screen overflow-x-hidden flex flex-col items-center justify-center gap-10">
        <div className="flex-col">
          <h2 className="text-black font-bold text-6xl">
            <span className="text-orange-500">Fyn</span>x
          </h2>
        </div>
        <div className="w-120 shadow-xl border p-4 rounded-md">
          <div className="flex flex-col gap-y-2">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="text-black text-2xl font-bold">Tạo tài khoản mới</h2>
              <span className="text-gray-400">Nhanh chóng và dễ dàng</span>
            </div>
            <div className="flex flex-col gap-y-3">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <Input type="text" name="first_name" placeholder="Họ" />
                  <Input type="text" name="last_name" placeholder="Tên" />
                </div>
                <div className="flex flex-col gap-y-3 mt-2">
                  <Input type="email" name="email" placeholder="Email" />
                  <Input type="password" name="password" placeholder="Mật khẩu" />
                  <Input type="password" placeholder="Nhập lại mật khẩu" />
                </div>
                <div className="mt-2 flex flex-col gap-y-2">
                  <span className="block text-gray-400 text-[12px] text-justify">
                    Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Fynx.
                  </span>
                  <span className="block text-gray-400 text-[12px] text-justify">
                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách
                    cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc
                    nào.
                  </span>
                </div>
                <Button className="py-6" type="submit" variant={"login"}>
                  Đăng nhập
                </Button>
                <span
                  onClick={() => navigate("/")}
                  className="block my-2 text-center text-blue-500 cursor-pointer hover:underline decoration-sky-500"
                >
                  Bạn đã có tài khoản ư?
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
