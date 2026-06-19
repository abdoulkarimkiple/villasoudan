import logoImage from "../assets/images/villa-soudan-logo.jpeg";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`${compact ? "h-12 w-12" : "h-14 w-14"} logo-mark`}>
        <img src={logoImage} alt="Logo Villa Soudan" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-serif text-2xl text-white">Villa Soudan</span>
          <span className="mt-1 block text-[0.62rem] font-black uppercase tracking-[0.32em] text-villa-red">
            Bamako
          </span>
        </span>
      )}
    </div>
  );
}
