export const Skills = () => {
    return (
      <div className="flex flex-col gap-6">
        {/* Başlık */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#4338CA]">Skills</h1>
  
        {/* Skill kartları */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* JavaScript */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">JavaScript</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
  
          {/* React */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">React.js</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
  
          {/* Node */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">Node.js</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
  
        <hr className="border-t-2 opacity-50 mt-6" />
      </div>
    )
  }
  