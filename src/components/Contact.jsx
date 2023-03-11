const Contact = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-center py-6">
    <div className="bg-white shadow p-8 md:p-16 rounded">
      <p className="text-xl md:text-3xl mb-5">TELEFON</p>
      <p className="text-base md:text-xl text-gray-600">732-427-072</p>
    </div>
    <div className="bg-white shadow p-8 md:p-16 rounded">
      <p className="text-xl md:text-3xl mb-5">E-MAIL</p>
      <p className="text-base md:text-xl text-gray-600">
        kontakt@skateakademia.pl
      </p>
    </div>
  </div>
);

export default Contact;
