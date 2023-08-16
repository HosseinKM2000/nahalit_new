import SideBarLink from "./SideBarLink";

const UserSideBar = ({ dropMenu , logOutHandle}) => {
  return (
    <aside className={dropMenu ? "md:basis-1/3 lg:basis-1/4 shadow-md rounded-lg min-h-[100%] h-[100%] w-[90%] md:w-[10%] transition-all duration-300" : "md:basis-1/3 lg:basis-1/4 shadow-md rounded-lg min-h-[0px] h-[0px] md:min-h-[90vh] md:h-[100%] transition-all duration-300 overflow-hidden w-[90%] md:w-[10%]"}>
      <ul className="space-y-1 font-medium p-2 h-full">
        <SideBarLink link={"/userPage/profile"} text={"پروفایل کاربری"}/>
        <SideBarLink link={"/userPage/cart"} text={"سبد خرید"}/>
        <SideBarLink link={"/userPage/favorites"} text={"علاقه مندی ها"}/>
        <SideBarLink link={"/factors"} text={"صورت حساب ها"}/>
        <SideBarLink link={"/downloads"} text={"دانلود ها"}/>
        <SideBarLink link={"/"} text={"صفحه اصلی"}/>
        <li>
          <button onClick={logOutHandle} className="p-2 flex text-gray-900 w-full rounded-lg hover:bg-gray-100">خروج از حساب کاربری</button>
        </li>
      </ul>
    </aside>
  );
}

export default UserSideBar;