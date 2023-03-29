import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Input = ({ label, id, type, register, className, required }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label htmlFor={id}>{label}</label>
    <input
      required={required}
      className="uppercase border rounded p-2"
      id={id}
      type={type}
      {...register(id)}
    />
  </div>
);

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/.netlify/functions/email-api`,
        data
      );

      reset();

      toast.success(
        'Wiadomość wysłana poprawnie. Skontaktujemy się z Tobą mailowo lub telefonicznie.'
      );
    } catch (error) {
      console.log(error);
      toast.error(
        'Wysyłanie wiadomości nie powiodło się. Spróbuj ponownie za kilka minut.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center">
      <p className="text-2xl uppercase">Zapisz się na zajęcia</p>
      <form
        className="flex flex-col gap-4 p-2 uppercase md:grid md:grid-cols-2 md:gap-x-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Imię i nazwisko opiekuna"
          id="name"
          type="text"
          register={register}
          required
        />
        <Input
          label="Imię i nazwisko dziecka"
          id="childName"
          type="text"
          register={register}
          required
        />
        <Input
          label="E-mail"
          id="email"
          type="text"
          register={register}
          required
        />
        <Input
          label="Telefon"
          id="phone"
          type="number"
          register={register}
          required
        />
        <Input
          label="Wiek dziecka"
          id="age"
          type="number"
          register={register}
          required
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="time">Dzień i godzina</label>
          <select
            id="time"
            className="border h-10.5 p-2"
            {...register('time')}
            required
          >
            <option value="">WYBIERZ ZAJĘCIA</option>
            <option>GRUPA ŚRODA 16:00</option>
            <option>GRUPA WTOREK 18:00</option>
            <option>INDYWIDUALNE (DO USTALENIA)</option>
          </select>
        </div>
        <input
          className="p-2 border rounded bg-accent md:col-span-2 cursor-pointer"
          type="submit"
          value="wyslij"
        />
      </form>
    </div>
  );
};

export default SignIn;
