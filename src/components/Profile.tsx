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
    <header className="relative overflow-hidden px-6 pt-36 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[26rem] w-[44rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-sky-500/12 blur-[130px]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${isImageLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md'}`}>
          <div className="rounded-full bg-gray-800/40 p-1.5 ring-1 ring-gray-700/60">
            <img
              onLoad={() => setIsImageLoaded(true)}
              className="h-32 w-32 rounded-full object-cover ring-1 ring-sky-400/30 md:h-36 md:w-36"
              src={img_path}
              alt={`Portrait of ${name}`}
            />
          </div>
        </div>

        <div className={`mt-8 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="eyebrow text-sky-400">{role}</p>
          <h1 className="display mt-4 text-5xl text-gray-200 md:text-6xl">
            {name}
          </h1>
        </div>

        <p className={`mt-6 max-w-xl text-lg leading-relaxed text-gray-400 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isImageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {description}
        </p>
      </div>
    </header>
  );
};

export default Profile;