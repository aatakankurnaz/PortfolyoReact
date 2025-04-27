export const Profile = () => {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4338CA]">Profile</h1>
  
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">Profile</h2>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2 text-sm md:text-base">
                <p className="font-bold text-black">Doğum Tarihi</p>
                <p className="font-bold text-black">İkamet Şehri</p>
                <p className="font-bold text-black">Eğitim Durumu</p>
                <p className="font-bold text-black">Tercih Ettiği Rol</p>
              </div>
  
              <div className="flex flex-col text-sm md:text-base">
                <p className="text-black">18.07.1994</p>
                <p className="text-black">Trabzon</p>
                <p className="text-black">
                  Kocaeli Ünv. Kamu Yönetimi,<br /> Lisans, 2018
                </p>
                <p className="text-black">Frontend, UI</p>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">About Me</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
  
        <hr className="border-t-2 opacity-50 mt-6" />
      </div>
    )
  }
  