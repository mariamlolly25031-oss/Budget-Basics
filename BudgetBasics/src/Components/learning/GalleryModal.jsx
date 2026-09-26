import { useEffect } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

export default function GalleryModal({ item, onClose }) {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);


  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close learning resource"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <FiX size={20} />
        </button>


        {/* IMAGE */}
        <div className="aspect-16/8 overflow-hidden bg-slate-100 dark:bg-slate-800">

          <img
            src={item.image}
            alt={item.alt}
            className="h-full w-full object-cover"
          />

        </div>


        {/* CONTENT */}
        <div className="p-6 sm:p-8">

          {/* LABEL */}
          <div className="flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              {item.topic}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {item.type}
            </span>

          </div>


          {/* TITLE */}
          <h2
            id="gallery-modal-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {item.title}
          </h2>


          {/* OVERVIEW */}
          <div className="mt-6">

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              What is this about?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              {item.details.overview}
            </p>

          </div>


          {/* DETAILS */}
          <div className="mt-8 space-y-6">

            {item.details.sections.map((section, index) => (

              <div
                key={section.heading}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950"
              >

                <div className="flex items-start gap-3">

                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {section.heading}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {section.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* TIP */}
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">

            <div className="flex items-start gap-3">

              <FiCheckCircle
                className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                size={22}
              />

              <div>

                <h3 className="font-bold text-emerald-900 dark:text-emerald-300">
                  BudgetBasics Tip
                </h3>

                <p className="mt-1 text-sm leading-6 text-emerald-800 dark:text-emerald-400">
                  {item.details.tip}
                </p>

              </div>

            </div>

          </div>


          {/* FOOTER */}
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Learning resource • {item.date}
            </p>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              Back to Gallery
              <FiArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}