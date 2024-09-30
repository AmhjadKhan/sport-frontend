import { selectCurrentUser } from "../redux/features/userSlice";
import { useAppSelector } from "../redux/hooks";
const AdminMainContent = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  console.log({ user });
  return (
    <div className="">
      <div className="bg-white text-white flex flex-col lg:flex-row justify-between py-8 px-16 rounded-md">
        <div className="w-full lg:w-[50%] flex flex-col justify-center ">
          <p className="text-fourth-color text-center">{today}</p>
          <div>
            <p className="heading-title">Welcome {user.name}</p>
            <p className="heading-p">
              Always stay updated in your {user?.role} portal
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
  <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-md">
    <thead className="bg-gray-200">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b">Action</th>
        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b">Description</th>
        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100">
        <td className="px-6 py-4 border-b text-sm">Create</td>
        <td className="px-6 py-4 border-b text-sm">Add a new item to the list</td>
        <td className="px-6 py-4 border-b text-sm text-green-500">Available</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-6 py-4 border-b text-sm">Update</td>
        <td className="px-6 py-4 border-b text-sm">Edit an existing item</td>
        <td className="px-6 py-4 border-b text-sm text-yellow-500">In Progress</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-6 py-4 border-b text-sm">Delete</td>
        <td className="px-6 py-4 border-b text-sm">Remove an item from the list</td>
        <td className="px-6 py-4 border-b text-sm text-red-500">Restricted</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};
export default AdminMainContent;