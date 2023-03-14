const Contact = () => (
  <div className="flex flex-col items-center justify-center gap-16 text-center py-6">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-center">
      <div className="bg-white shadow p-8 md:p-16 rounded">
        <p className="text-xl md:text-3xl mb-5">TELEFON</p>
        <p className="text-base md:text-xl text-gray-600">732-427-072</p>
      </div>
      <div className="bg-white shadow p-8 md:p-16 rounded">
        <p className="text-xl md:text-3xl mb-5">E-MAIL</p>
        <p className="uppercase text-xs sm:text-base md:text-xl text-gray-600">
          akademiaskateboardingu@gmail.com
        </p>
      </div>
    </div>
    <div className="bg-white shadow p-8 md:p-16 rounded">
      <p className="text-xl md:text-3xl mb-5">DANE FIRMY</p>
      <p className="flex flex-col uppercase text-base md:text-xl text-gray-600">
        <span>NIP 6991968199, Lubuska 58,</span>
        <span>Akademia Skateboardingu Adam Szulc,</span>
        <span>nr konta 14 1140 2004 0000 3702 8197 5955</span>
      </p>
    </div>
  </div>
);

export default Contact;
