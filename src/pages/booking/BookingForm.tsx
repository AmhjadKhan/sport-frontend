import { useNavigate, useParams } from "react-router-dom";
import {
  useAddBookingsMutation,
  useCheckFacilityAvailabilityQuery,
  useGetFacilityDetailsQuery,
} from "../../redux/api/facility/facilityApi";
import {
  Button,
  Card,
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
} from "antd";
import Meta from "antd/es/card/Meta";
import { TFacility } from "../../allTypes/user";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../Components/ui/Loading";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type TOptions = {
  id?: string;
  date?: string;
};

type TimeOptions = {
  startTime?: string;
  endTime?: string;
};

const BookingForm = () => {
  const { user } = useAppSelector(selectCurrentUser);
  const { id } = useParams();
  const { data, isError } = useGetFacilityDetailsQuery(id);
  const facility: TFacility = data?.data?.[0];
  const [options, setOptions] = useState<TOptions | null>(null);
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(null);
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(null);
  const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
  const [isCheckAvailability, setIsCheckAvailability] = useState(false);
  const [dates, setDates] = useState<Dayjs | null>(null);
  const navigate = useNavigate();
  const { data: checkAvailabilityData, isFetching } =
    useCheckFacilityAvailabilityQuery(options, {
      skip: !isCheckAvailability,
    });
  const [addBookings] = useAddBookingsMutation();

  const onChange: DatePickerProps["onChange"] = (date) => {
    if (date) {
      setDates(date);
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const optionData = { id, date: formattedDate };
      setOptions(optionData);
    } else {
        toast('plz selecte date', {
            icon: '⚠️',
            style: {
              background: '#ffcc00', 
              color: '#fff',        
            },
          });
    }
  };

  const handleOnChangeDate = () => {
    if (options) {
      setIsCheckAvailability(true);

      setTimeout(() => {
        setIsCheckAvailability(false);
      }, 3000);
    }
  };

  const onChangeStartTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");

      setTimeOptions((prev) => ({
        ...prev,
        startTime: formattedTime,
      }));
      setStartTimeValue(time); // Set the selected time value
    } else {
        toast('no time selected', {
            icon: '⚠️',
            style: {
              background: '#ffcc00', 
              color: '#fff',        
            },
          });
    }
  };
  const onChangeEndTime: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setTimeOptions((prev) => ({
        ...prev,
        endTime: formattedTime,
      }));
      setEndTimeValue(time); 
    } else {
        toast('No time selected', {
            icon: '⚠️',
            style: {
              background: '#ffcc00', 
              color: '#fff',        
            },
          });
    }
  };

  const handleProceed = async () => {
    const { startTime, endTime } = timeOptions;
    if (!user) {
        toast('plz login booking before', {
            icon: '⚠️',
            style: {
              background: '#ffcc00', 
              color: '#fff',        
            },
          });
      navigate("/login", { replace: true });
    } else if (!startTime || !endTime) {
      toast.error("Please select both start time and end time.");
      return;
    } else if (startTime && endTime && startTime >= endTime) {
        toast('plz time must be end conside', {
            icon: '⚠️',
            style: {
              background: '#ffcc00', 
              color: '#fff',        
            },
          });
      return;
    }
    const proceedOptions = {
      facility: id,
      date: options?.date,
      startTime: startTime,
      endTime: endTime,
    };

    const res = await addBookings(proceedOptions);

    if (res?.error) {
      // Check if the error has a 'data' property and it's of type FetchBaseQueryError
      if ("data" in res.error) {
        const baseQueryError = res.error as FetchBaseQueryError;
        const errorMessage =
          (baseQueryError.data as { message?: string }).message ||
          "An unexpected error occurred";
        toast.error(errorMessage);
      } else {
        // Handle SerializedError or other types of errors
        toast.error("An unexpected error occurred");
      }
    } else if (res?.data?.success && res?.data?.data?.payment_url) {
      window.location.href = res.data.data.payment_url;
    }
  };

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Occur</p>;
  }
  return (
    <div className="dark:bg-neutral-800 dark:text-white">
      <div className="container mx-auto py-16">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto gap-16">
          <Card
            hoverable
            style={{ width: 500, height: "100%" }}
            cover={<img alt="example" src={facility?.image} />}
          >
            <Meta
              title={
                facility.name.length > 50
                  ? `${facility.name.substring(0, 50)}...`
                  : facility.name
              }
              description={
                facility.description.length > 100
                  ? `${facility.description.substring(0, 100)}...`
                  : facility.description
              }
            />
            <div className="mt-4 bg-neutral-50 py-2 rounded-md">
              <p className="text-center font-medium text-2xl text-strongCyan">
                $ {facility.pricePerHour}
              </p>
            </div>
          </Card>

          {/* Form */}
          <div className=" w-full">
            <div className=" lg:w-[800px] md:w-[500px] mx-auto rounded-lg shadow-lg">
              <p className="text-center py-4 bg-teal-100 text-2xl font-semibold text-darkViolet rounded-t-lg">
                Booking For
              </p>
              <div className="px-8 py-4">
                <p className="text-darkViolet font-semibold text-xl">
                  {facility.name}
                </p>
                <p className="text-darkGrayishBlue py-2">
                  {facility.description}
                </p>
              </div>
              <div className="px-8 py-4 flex gap-6 items-end justify-end border-t  border-gray-200">
                <div className="flex-1">
                  <p className="text-sm text-darkViolet font-medium mb-2">
                    Pick Your Date
                  </p>
                  <DatePicker
                    className="w-full"
                    value={dates}
                    onChange={onChange}
                  />
                </div>
                <div className="flex justify-end ">
                  <Button
                    type="primary"
                    onClick={handleOnChangeDate}
                    className="px-8 text-darkGrayishBlue"
                  >
                    Check Availability
                  </Button>
                </div>
              </div>

              {checkAvailabilityData && (
                <div className="px-8">
                  <p>Available Slots</p>
                  <div className="flex flex-col gap-4">
                    {checkAvailabilityData &&
                      checkAvailabilityData?.data?.map(
                        (item: any, index: number) => (
                          <div key={index} className="flex gap-8">
                            <div className="flex flex-col flex-1">
                              <p>Start Time</p>
                              <p className="bg-neutral-800 text-white py-1 px-4 rounded-md">
                                {item?.startTime}
                              </p>
                            </div>
                            <div className="flex flex-col flex-1">
                              <p>end Time</p>
                              <p className="bg-neutral-800 text-white py-1 px-4 rounded-md">
                                {item?.endTime}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                  </div>
                </div>
              )}

              {/* Time Picker */}
              {checkAvailabilityData && (
                <div className="py-4 px-8">
                  <div className=" flex gap-8">
                    <div className="flex gap-8">
                      <div>
                        <p>Start Time</p>
                        <TimePicker
                          value={startTimeValue}
                          onChange={onChangeStartTime}
                          format="HH:mm"
                          minuteStep={1}
                          showNow={false}
                        />
                      </div>
                      <div>
                        <p>End Time</p>
                        <TimePicker
                          value={endTimeValue}
                          onChange={onChangeEndTime}
                          format="HH:mm"
                          minuteStep={1}
                          showNow={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py-4">
                    <Button onClick={handleProceed} type="primary">
                      Proceed to pay
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;