import Facebook from "../assets/facebook-square-brands.svg";
import LinkedId from "../assets/linkedin-brands.svg";
import Twitter from "../assets/twitter-square-brands.svg";
import Instagram from "../assets/instagram-square-brands.svg";
import arrow from "../assets/arrow-right.svg";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
  required?: boolean;
}

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  required,
}: FieldProps) => {
  const fieldClasses =
    "peer w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-white placeholder-white/25 transition-colors duration-300 focus:border-pink/70 focus:outline-none";

  return (
    <label className="group relative flex flex-col">
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-has-[:focus]:text-pink/80">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={`${fieldClasses} mt-2 resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${fieldClasses} mt-2`}
        />
      )}
      <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-linear-to-r from-pink via-purple to-pink transition-transform duration-300 peer-focus:scale-x-100" />
    </label>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex w-screen justify-center overflow-hidden bg-black px-[calc(1.5rem+2vw)] py-[calc(3rem+4vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-1 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-purple/25 blur-[130px]"
      />

      <div className="grid w-full max-w-5xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-[calc(1.7rem+1.3vw)] font-medium leading-tight text-white">
            Kontaktirajte nas
          </h2>
          <span className="mt-4 h-[3px] w-14 rounded-full bg-linear-to-r from-pink via-purple to-pink" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/50">
            Imate ideju ili pitanje? Javite nam se — rado ćemo popričati o
            vašem sljedećem projektu.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://www.facebook.com/"
              className="contact-icon-link opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
            >
              <img src={Facebook} alt="Facebook" className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="contact-icon-link opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
            >
              <img src={LinkedId} alt="LinkedId" className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/"
              className="contact-icon-link opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
            >
              <img src={Twitter} alt="Twitter" className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="contact-icon-link opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
            >
              <img src={Instagram} alt="Instagram" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/*
          TODO: sign up at https://formspree.io (free) with mvukusic67@gmail.com,
          create a form, then replace YOUR_FORM_ID below with the real form ID.
        */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Ime" name="name" placeholder="vaše ime" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="unesite email adresu"
              required
            />
          </div>
          <Field
            label="Poruka"
            name="message"
            placeholder="vaša poruka"
            textarea
            required
          />

          <button
            type="submit"
            className="group mt-2 flex w-fit cursor-pointer items-center gap-3 self-center rounded-full bg-white px-7 py-3 text-[0.95rem] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(229,161,248,0.35)] active:scale-95 lg:self-start"
          >
            Pošalji
            <img
              src={arrow}
              alt=""
              className="w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
