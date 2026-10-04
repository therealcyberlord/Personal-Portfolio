import { Fragment, useState, type ReactNode } from "react";

type ProfileProps = {
  name: string;
  description: string;
  imgPath: string;
  role: string;
  /** Optional line under the description, e.g. the current position */
  footnote?: ReactNode;
};

const Profile = ({ name, description, imgPath, role, footnote }: ProfileProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const enter = isImageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className={`transition-all duration-[1200ms] ease-spring ${isImageLoaded ? "scale-100 opacity-100 blur-0" : "scale-95 opacity-0 blur-md"}`}>
          <div className="rounded-full bg-gray-800/40 p-1.5 ring-1 ring-gray-700/60">
            <img
              onLoad={() => setIsImageLoaded(true)}
              className="h-32 w-32 rounded-full object-cover ring-1 ring-sky-400/30 md:h-36 md:w-36"
              src={imgPath}
              alt={`Portrait of ${name}`}
              width={144}
              height={144}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className={`mt-8 transition-all delay-200 duration-1000 ease-spring ${enter}`}>
          <p className="eyebrow text-sky-400">
            {/* Keep each role together so the line only wraps between roles */}
            {role.split(" · ").map((part, i) => (
              <Fragment key={part}>
                {i > 0 && " · "}
                <span className="whitespace-nowrap">{part}</span>
              </Fragment>
            ))}
          </p>
          <h1 className="display mt-4 text-5xl tracking-tight text-gray-200 md:text-7xl">
            {name}
          </h1>
        </div>

        <p className={`mt-6 max-w-xl text-lg leading-relaxed text-gray-400 transition-all delay-300 duration-1000 ease-spring ${enter}`}>
          {description}
        </p>

        {footnote && (
          <div className={`mt-8 transition-all delay-500 duration-1000 ease-spring ${enter}`}>
            {footnote}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
