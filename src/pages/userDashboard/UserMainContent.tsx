import { selectCurrentUser } from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";

const UserMainContent = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="">
      <div className="bg-white text-white flex flex-col lg:flex-row justify-between py-8 px-16 rounded-md">
        <div className="w-full lg:w-[50%] flex flex-col justify-center ">
          <p className="text-fozurth-color text-center">{today}</p>
          <div>
            <p className="heading-title">Welcome{user.name}</p>
            <p className="heading-p">
              Always stay updated in your {user?.role} portal
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            className="h-80 md:h-96 w-full rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICU9eMdH23S6P-3yzF5WBpZ2P7JknHEmEWQ&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserMainContent;