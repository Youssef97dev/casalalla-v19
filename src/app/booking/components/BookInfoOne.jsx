import Select from "react-select";
import DatePicker from "rsuite/DatePicker";
import "rsuite/DatePicker/styles/index.css";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];

const time = [
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
];

const BookInfoOne = ({
  startDate,
  setStartDate,
  setNumberGuests,
  timeBook,
  setTimeBook,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 lg:gap-8">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <strong className="text-[14px] leading-[20px] text-[#374151]">
            Date
          </strong>
          <DatePicker
            oneTap
            placeholder="Select Date"
            className="w-full border border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
            value={startDate}
            onChange={setStartDate}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <strong className="text-[14px] leading-[20px] text-[#374151]">
            Number of people
          </strong>
          <Select
            defaultValue={options[0]}
            options={options}
            isSearchable={false}
            onChange={(e) => setNumberGuests(e.value)}
            className="w-full border border-gray-400 rounded-md outline-none text-[14px] text-[#374151] "
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start lg:items-center gap-2 px-0 lg:px-10">
        <strong className="text-[14px] leading-[20px] text-[#374151]">
          Time
        </strong>
        <div className="w-full rounded-md flex justify-start items-center gap-2 overflow-auto pb-4">
          {time.map((value) => (
            <div
              key={value}
              onClick={() => setTimeBook(value)}
              className={`text-[14px] leading-[16px] rounded-lg px-2 py-2 lg:py-4 lg:px-4 bg-[#e5e7eb] text-[#374151] hover:bg-primary hover:text-white cursor-pointer ${
                timeBook === value && "bg-book_btn text-white"
              }`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookInfoOne;
