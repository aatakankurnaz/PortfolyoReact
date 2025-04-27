import ProjectP from "../assets/ProjectPhoto.png"

export const Projects = () => {
    return (
      <div className="flex flex-col gap-8 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4338CA]">Projects</h1>
  
        <div className="flex flex-col md:flex-row gap-10">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 rounded-xl shadow-md flex-1">
              <img src={ProjectP} alt="project" className="rounded-lg w-full h-auto" />
              <h2 className="text-xl font-semibold text-[#222]">Proje</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
                This was created with vanilla JS, SCSS and Parcel Bundler.
              </p>
  
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "SCSS", "Parcel"].map((tech, idx) => (
                  <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
  
              <div className="flex justify-between mt-4">
                <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">Github</a>
                <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">View Site</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  