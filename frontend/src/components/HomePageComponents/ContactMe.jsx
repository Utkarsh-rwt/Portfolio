import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const contactEmail =  "utkarshrawat209@gmail.com";
const whatsappNumber = ("919267907087").replace(/\D/g, "");

const ContactMe = () => {
const emailHref =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(contactEmail)}` +
  `&su=${encodeURIComponent("Portfolio contact")}`;
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Utkarsh"
  )}`;

  return (
    <section className=" mt-40 rounded-3xl border border-stone-200 bg-white px-6 py-10 shadow-xl shadow-stone-200/60 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.12),transparent_28%)]" />

      <div className="mx-auto max-w-4xl ml-45">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
          Contact me
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Reach out with one click.
        </h1>
    

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href={emailHref}
            className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-stone-300 hover:bg-white"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <FaEnvelope className="text-xl" />
              </span>
              <div>
                <p className="text-sm font-medium text-stone-500">Email me</p>
                <p className="text-lg font-semibold text-black">{contactEmail}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-stone-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                <FaWhatsapp className="text-2xl" />
              </span>
              <div>
                <p className="text-sm font-medium text-emerald-700">WhatsApp me</p>
                <p className="text-lg font-semibold text-black">Quick message</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-emerald-700 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;