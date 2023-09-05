import Cookies from "js-cookie";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ProfileInput from "./ProfileInput";

const UserProfilePage = () => {
  const userInfo = JSON.parse(Cookies.get("user"))
  const currentPassword = JSON.parse(Cookies.get("user"))
  console.log(userInfo)
  const [data, setData] = useState({
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    username: userInfo.username,
    email: userInfo.email,
    mobile: userInfo.mobile,
    card_number: "",
    code_meli: "",
    password: "",
    newPassword: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const tmpData = JSON.parse(JSON.stringify(data));
    switch (e.target.name) {
      case "first_name":
        tmpData.first_name = e.target.value;
        break;
      case "last_name":
        tmpData.last_name = e.target.value;
        break;
      case "username":
        tmpData.username = e.target.value;
        break;
      case "email":
        tmpData.email = e.target.value;
        break;
      case "mobile":
        tmpData.mobile = e.target.value;
        break;
      case "card_number":
        tmpData.card_number = e.target.value;
        break;
      case "code_meli":
        tmpData.code_meli = e.target.value;
        break;
      case "password":
        tmpData.password = e.target.value;
        break;
      case "new_password":
        tmpData.newPassword = e.target.value;
        break;
      case "confirm_new_password":
        tmpData.password_confirmation = e.target.value;
        break;
        default : console.log()
    }
    setData(tmpData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    switch(true)
    {
      case data.first_name.length === 0 : toast.warning("نام را وارد کنید");
      break;
      case data.first_name.length < 3 : toast.warning("نام کوتاه است");
      break;
      case data.last_name.length === 0 : toast.warning("نام خانوادگی را وارد کنید");
      break;
      case data.username.length === 0 : toast.warning("نام کاربری را وارد کنید");
      break;
      case data.username.length < 5 : toast.warning("نام کاربری کوتاه است");
      break;
      case data.email.length === 0 : toast.warning("ایمیل را وارد کنید");
      break;
      case !data.email.includes("@") : toast.warning("ایمیل اشتباه است");
      break;
      case data.email.indexOf("@") === 0 : toast.warning("ایمیل اشتباه است!");
      break;
      case data.email.length < 5 : toast.warning("ایمیل کوتاه است");
      break;
      case data.mobile.length === 0 : toast.warning("شماره موبایل را وراد کنید");
      break;
      case data.mobile.length < 11 : toast.warning("شماره موبایل کوتاه است");
      break;
      case data.mobile.indexOf("0") !== 0 : toast.warning("شماره موبایل اشتباه است");
      break;
      case data.password.length !== 0 && data.password.length < 8 :  toast.warning("رمز عبور کوتاه است");
      break;
      case data.password.length !== 0 && data.newPassword.length === 0 : toast.warning("رمز عبور جدید را وارد کنید");
      break;
      case data.password.length !== 0 && data.newPassword.length < 8 : toast.warning("رمز عبور جدید کوتاه است");
      break;
      case data.newPassword.length !== 0 && data.password_confirmation.length === 0 : toast.warning("تکرار رمز عبور را وارد کنید");
      break;
      case data.newPassword.length !== 0 && data.password_confirmation.length !== data.newPassword.length : toast.warning("تکرار رمز عبور با رمز عبور مطابقت ندارد");
      break;
      case data.card_number.length !== 0 && data.card_number.length < 16 : toast.warning("شماره کارت کوتاه است");
      break;
      case data.code_meli.length !== 0 && data.code_meli.length < 10   : toast.warning("کد ملی کوتاه است");
      break;
      default : console.table(data)
    }
  }

  return (
    <>
      <div className="flex w-[100%]">
          <div className="w-full">
            <h2 className="mb-6 font-bold text-2xl">پروفایل کاربری</h2>
            <form onSubmit={e => handleSubmit(e)}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <ProfileInput name={"first_name"} type={"text"} label={"نام"} placeholder={"علی"} data={data.first_name} setData={handleInputChange}/>
                <ProfileInput name={"last_name"} type={"text"} label={"نام خانوادگی"} placeholder={"موسوی"} data={data.last_name} setData={handleInputChange}/>
                <ProfileInput name={"username"} type={"text"} label={"نام کاربری"} placeholder={""} data={data.username} setData={handleInputChange}/>
                <ProfileInput name={"email"} type={"email"} label={"آدرس ایمیل"} placeholder={"email@example.com"} data={data.email} setData={handleInputChange}/>
                <ProfileInput name={"mobile"} type={"number"} label={"شماره موبایل"} placeholder={"09123456789"} data={data.mobile} setData={handleInputChange}/>
                <ProfileInput name={"card_number"} type={"number"} label={"شماره کارت"} placeholder={"1234567890123456"} data={data.card_number} setData={handleInputChange}/>
                <ProfileInput name={"code_meli"} type={"number"} label={"کد ملی"} placeholder={"0123456789"} data={data.code_meli} setData={handleInputChange}/>
              </div>
              <hr/>
              <h2 className="mb-6 mt-4 font-bold text-xl">تغییر رمز عبور</h2>
              <div className="grid gap-6">
                <ProfileInput name={"password"} type={"password"} label={"رمز عبور قبلی"} placeholder={"•••••••••"} autocomplete={"password"} data={data.password} setData={handleInputChange}/>
                <ProfileInput name={"new_password"} type={"password"} label={"رمز عبور جدید"} placeholder={"•••••••••"} autocomplete={"password"} data={data.newPassword} setData={handleInputChange}/>
                <ProfileInput name={"confirm_new_password"} type={"password"} label={"تکرار رمز عبور جدید"} placeholder={"•••••••••"} autocomplete={"password"} data={data.password_confirmation} setData={handleInputChange}/>
                <button type="submit"
                        className="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full 2xl:w-[80%] 2xl:mx-auto sm:w-auto px-5 py-2.5 text-center">
                  ذخیره
                </button>
              </div>
            </form>
          </div>
      </div>
    </>
  )
};

export default UserProfilePage;