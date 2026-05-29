import { useEffect, useState } from 'react';

export function Loader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsDone(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isDone ? 'loader-hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-strip loader-strip-top">
          <div className="loader-strip-track">
            <span>Full Stack Developer</span>
            <span>Full Stack Developer</span>
            <span>Full Stack Developer</span>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <div className="loader-bar-wrap">
          <div className="loader-main-text">Loading</div>
          <div className="loader-progress"><span /></div>
        </div>

        <div className="loader-strip loader-strip-bottom">
          <div className="loader-strip-track reverse">
            <span>Creative Web Designer</span>
            <span>Creative Web Designer</span>
            <span>Creative Web Designer</span>
            <span>Creative Web Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
