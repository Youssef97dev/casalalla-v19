const BookInfoTwo = ({ formData, handleChange }) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
            <span>First name</span>
            <span className="text-red-500">*</span>
          </strong>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
            <span>Last name</span>
            <span className="text-red-500">*</span>
          </strong>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
          <span>Email</span>
          <span className="text-red-500">*</span>
        </strong>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <strong className="text-[14px] leading-[20px] text-[#374151] flex justify-center items-center gap-2">
          <span>Phone</span>
          <span className="text-red-500">*</span>
        </strong>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <strong className="text-[14px] leading-[20px] text-[#374151]">
          Commentaire
        </strong>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
          className="w-full border py-2 px-3 border-gray-400 rounded-md outline-none text-[14px] text-[#374151]"
        />
      </div>
    </>
  );
};

export default BookInfoTwo;
