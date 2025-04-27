export const Footer = () => {
    return (
      <div className="flex flex-col gap-8 p-8 md:p-20 bg-[#F9F9F9]">
        {/* Başlık */}
        <p className="text-3xl md:text-[42px] text-black font-semibold leading-tight">
          Let’s work together on <br className="hidden md:block" />
          your next product.
        </p>
  
        {/* Alt kısım */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Mail */}
          <div className="flex items-center gap-2 text-lg">
            <span>👉</span>
            <a href="mailto:aatakankurnaz@gmail.com" className="a2 !text-[#AF0C48] font-semibold">
              aatakankurnaz@gmail.com
            </a>
          </div>
  
          {/* Sosyal Medya */}
          <div className="flex gap-5">
            <a href="#" className="!text-[#00AB6B] font-semibold hover:underline">Github</a>
            <a href="#" className="!text-[#0077B5] font-semibold hover:underline">Linkedin</a>
          </div>
        </div>
      </div>
    );
  }
  