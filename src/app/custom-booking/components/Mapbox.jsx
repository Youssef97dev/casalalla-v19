import Link from "next/link";

const Mapbox = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7698.180652510375!2d-8.13183847732848!3d31.353142798458677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4fcbd919cb%3A0x89922e232011bf59!2sCasa%20Lalla%20Takerkoust!5e0!3m2!1sfr!2sma!4v1729941797716!5m2!1sfr!2sma"
        height="500"
        style={{ border: 0, width: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapbox;
