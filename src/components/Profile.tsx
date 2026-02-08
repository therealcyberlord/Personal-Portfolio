import { useState } from "react";

type ProfileProps = {
  name: string;
  description: string;
  img_path: string;
  role: string;
}

const Profile = ({
  name,
  description,
  img_path,
  role
}: ProfileProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className={`transition-all duration-1000 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img
                onLoad={() => setIsImageLoaded(true)}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-sky-400/20"
                src={img_path}
                alt="Profile picture"
              />
            </div>
          </div>

          <div className={`mt-8 text-center transition-all duration-1000 delay-300 ${isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter animate-fade-in bg-linear-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent pb-1">
              {name}
            </h2>
            <h3 className="text-xl md:text-2xl text-sky-400 mt-2 font-semibold tracking-tight">
              {role}
            </h3>
          </div>

          <div className={`mt-6 max-w-3xl text-center transition-all duration-1000 delay-500 ${isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-tight">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;