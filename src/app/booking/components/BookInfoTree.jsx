const BookInfoTree = ({ startDate, timeBook, numberGuests, formData }) => {
  return (
    <>
      <h1 className="text-[24px] leading-[26.4px] mr-auto text-gray-800">{`Please verify your information`}</h1>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">Date:</span>
        <strong className="text-sm">
          {new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(startDate)}
        </strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">Time:</span>
        <strong className="text-sm">{timeBook}</strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">People:</span>
        <strong className="text-sm">{numberGuests}</strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">First name:</span>
        <strong className="text-sm">{formData.firstName}</strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">Last name:</span>
        <strong className="text-sm">{formData.lastName}</strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">Phone:</span>
        <strong className="text-sm">{formData.phone}</strong>
      </div>
      <div className="w-full flex justify-start items-center gap-5 border-t border-gray-400 py-3 px-2">
        <span className="w-[30%]">Email:</span>
        <strong className="text-sm">{formData.email}</strong>
      </div>
    </>
  );
};

export default BookInfoTree;
