import { Input } from "~/components/ui/input";
import type { Route } from "./+types/login";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Fynx - Đăng nhập hoặc đăng ký" }, { name: "description", content: "Welcome to Fynx!" }];
}

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData.get("email"));
  };

  return (
    <>
      <div className="w-full h-screen overflow-x-hidden flex items-center justify-center gap-10">
        <div className="flex-col">
          <h2 className="text-black font-bold text-6xl">
            <span className="text-orange-500">Fyn</span>x
          </h2>
          <span className="text-2xl">
            Fynx giúp bạn kết nối và chia sẻ <br />
            với mọi người trong cuộc sống của bạn.
          </span>
        </div>
        <div className="w-120 shadow-xl border p-4 rounded-md">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Mật khẩu" />
            <Button className="py-6" type="submit" variant={"login"}>
              Đăng nhập
            </Button>
            <span className="my-2 mx-auto text-blue-500 cursor-pointer hover:underline decoration-sky-500">
              Quên mật khẩu?
            </span>
            <Button
              className="w-[60%] mx-auto mt-6 mb-2 py-6 cursor-pointer font-bold text-md transition-all duration-300 ease-in"
              variant={"default"}
              onClick={() => navigate("/register")}
            >
              Tạo tài khoản mới
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
