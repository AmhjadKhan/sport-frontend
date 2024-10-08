import { AutoComplete, Input, Pagination, Select } from "antd";
import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../Components/ui/NoDataFound";
import { useEffect, useState } from "react";
import Loading from "../../Components/ui/Loading";
import useDebounce from "../../hooks/useDebounce";

interface TFacilities {
  index: number;
  _id: string;
  image: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
}

const FacilityListingTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: facilities,
    isLoading,
    isFetching,
  } = useGetAllFacilityQuery({
    page,
    limit,
    isDeleted: false,
    sortBy,
    searchTerm: debouncedSearchTerm,
  });

  const facilityData: TFacilities[] = facilities?.data || [];
  const navigate = useNavigate();
  const [, setTableParams] = useState({
    pagination: {
      current: page,
      pageSize: limit,
      total: total,
    },
  });
  useEffect(() => {
    if (!isFetching && facilities) {
      setTotal(facilities?.meta?.total);
      setTableParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: facilities?.meta?.total,
        },
      }));
    }
  }, [isFetching, facilities]);

  const [searchItem, setSearchItem] = useState(false);

  const handleSortChange = (value: number) => {
    setSearchItem(false);

    if (value === 2) {
      setSortBy("-pricePerHour");
    } else if (value === 1) {
      setSortBy("pricePerHour");
    } else if (value === 0) {
      setSearchItem(true);
    }
    // setSortBy(value);
  };

  const filterOptions = [
    { value: 0, label: "Search items" },
    { value: 1, label: "Sort by price low to high" },
    { value: 2, label: "Sort by price high to low" },
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  if (facilityData?.length === 0) {
    return <NoDataFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-slate-500 ">
      <div className="container mx-auto py-16">
        <div className="mb-16">
          <h3 className="text-4xl text-center font-bold mb-8">Facility Listing Overview</h3>
          <p className="heading-p text-xl px-20 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam ipsum, illo vitae quas praesentium, ratione a quasi neque necessitatibus amet sunt dolorem error architecto officiis consequuntur! Enim, sapiente ea! amet sunt dolorem error architecto officiis consequuntur! Enim, sapiente ea!
          </p>
        </div>
        <div className="my-8 flex justify-end gap-4">
          <Select
            style={{ height: "40px", width: "250px" }}
            placeholder="Search, Filter or Sort"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={filterOptions}
            onChange={handleSortChange}
          />
          {searchItem && (
            <AutoComplete
              popupMatchSelectWidth={252}
              style={{ width: 300 }}
              onChange={handleSearch}
            >
              <Input.Search
                size="large"
                onSearch={handleSearch}
                placeholder="Search Here"
                enterButton
              />
            </AutoComplete>
          )}
        </div>
        <div>
          <div className="flex flex-row mx-auto flex-wrap justify-center items-center gap-16">
            {facilityData?.map((item: TFacilities, index: number) => (
              <div key={index} className=" w-[270px] ">
                <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl ">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    src={item.image ? item.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LHvpafs849Z1OXXxPq2G2tIACeHc0hU1FQ&s'}
                    alt="member"
                  />

                  <div className="overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center text-darkViolet">
                      $ {item.pricePerHour}
                    </p>
                    <p className="text-gray-500 text-center">
                      {item.name.substring(0, 20)}
                    </p>
                    <img
                      className="absolute -left-10 -bottom-10"
                      src=""
                      alt="circle"
                    />
                    <img
                      className="absolute -right-2 -top-4 w-9"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMH-p0abKj9zppPzM0a3FnOIitLkVcE6Oww&s"
                      alt="circle"
                    />
                  </div>
                </div>

                <p className="text-center py-4 px-6 text-lightBlue dark:text-strongCyan">
                  <span>
                    {item.description.length > 50
                      ? `${item.description.substring(0, 50)}...`
                      : item.description}
                  </span>
                </p>

                <button
                  onClick={() => navigate(`/facility-listing/${item._id}`)}
                  className="btn btn-blue-30 mx-auto w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8 flex justify-end">
          <Pagination
            current={page}
            pageSize={limit}
            total={total}
            onChange={(p, pageSize) => {
              setPage(p);
              setLimit(pageSize);
            }}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityListingTable;