import { IoMdPerson } from "react-icons/io";

const BookInfoShared = ({ startDate, timeBook, numberGuests }) => {
  return (
    <div className="w-full gap-2 rounded-lg text-gray-800 border border-gray-200 flex justify-between items-center py-2 px-4 bg-[#F3F4F6] mb-4">
      <div>
        <strong class="text-sm">Your reservation</strong>
        <div class="text-sm text-gray-500">
          {new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(startDate)}
          {" - "}
          {timeBook}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-1">
          <strong>{numberGuests}</strong>
          <IoMdPerson size={20} />
        </div>
      </div>
    </div>
  );
};

export default BookInfoShared;
