import ProfileInput from "./ProfileInput";
import {useState} from "react";
import UserPanelHeader from "../../Components/UserPanelHeader/UserPanelHeader";
import UserSideBar from "./UserSideBar";

const UserProfilePage = () => {
  const [data, setData] = useState({
    firstName: "علی",
    lastName: "موسوی",
    email: "email@example.com",
    phone: "09123456789",
    shaba: "1234567890123456",
    meliCode: "0123456789",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    const tmpData = JSON.parse(JSON.stringify(data));
    switch (e.target.name) {
      case "first_name":
        tmpData.firstName = e.target.value;
        break;
      case "last_name":
        tmpData.lastName = e.target.value;
        break;
      case "email":
        tmpData.email = e.target.value;
        break;
      case "phone":
        tmpData.phone = e.target.value;
        break;
      case "shaba":
        tmpData.shaba = e.target.value;
        break;
      case "meli_code":
        tmpData.meliCode = e.target.value;
        break;
      case "password":
        tmpData.password = e.target.value;
        break;
      case "new_password":
        tmpData.newPassword = e.target.value;
        break;
      case "confirm_new_password":
        tmpData.confirmNewPassword = e.target.value;
        break;
    }
    setData(tmpData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(data);
  }

  return (
    <>
    <div className="flex w-[100%]">
        <div className="w-full">
          <h2 className="mb-6 font-bold text-2xl">پروفایل کاربری</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <ProfileInput name={"first_name"} type={"text"} label={"نام"} placeholder={"علی"} data={data.firstName} setData={handleInputChange}/>
              <ProfileInput name={"last_name"} type={"text"} label={"نام خانوادگی"} placeholder={"موسوی"} data={data.lastName} setData={handleInputChange}/>
              <ProfileInput name={"email"} type={"email"} label={"آدرس ایمیل"} placeholder={"email@example.com"} data={data.email} setData={handleInputChange}/>
              <ProfileInput name={"phone"} type={"tel"} label={"شماره موبایل"} placeholder={"09123456789"} data={data.phone} setData={handleInputChange}/>
              <ProfileInput name={"shaba"} type={"number"} label={"شماره شبا"} placeholder={"1234567890123456"} data={data.shaba} setData={handleInputChange}/>
              <ProfileInput name={"meli_code"} type={"number"} label={"کد ملی"} placeholder={"0123456789"} data={data.meliCode} setData={handleInputChange}/>
            </div>
            <hr/>
            <h2 className="mb-6 mt-4 font-bold text-xl">تغییر رمز عبور</h2>
            <div className="grid gap-6">
              <ProfileInput name={"password"} type={"password"} label={"رمز عبور قبلی"} placeholder={"•••••••••"} data={data.password} setData={handleInputChange}/>
              <ProfileInput name={"new_password"} type={"password"} label={"رمز عبور جدید"} placeholder={"•••••••••"} data={data.newPassword} setData={handleInputChange}/>
              <ProfileInput name={"confirm_new_password"} type={"password"} label={"تکرار رمز عبور جدید"} placeholder={"•••••••••"} data={data.confirmNewPassword} setData={handleInputChange}/>
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