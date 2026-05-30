export default function Loader({ progress, phase }) {
  return (
    <div className={`loader ${phase === 'welcome' ? 'loader-welcome-active' : ''} ${phase === 'hidden' ? 'loader-hidden' : ''}`}>
      {phase === 'welcome' ? (
        <div className="loader-welcome">Welcome</div>
      ) : (
        <>
          <div className="loader-marquee loader-marquee-top" aria-hidden="true">
            <div className="loader-marquee-track loader-left-to-right">
              <span>ABHII DESIGNS</span><span>WEB DEVELOPER</span><span>PORTFOLIO</span><span>ABHII DESIGNS</span><span>WEB DEVELOPER</span><span>PORTFOLIO</span>
            </div>
          </div>
          <div className="loader-center">
            <div className="loader-count">{String(progress).padStart(2, '0')}</div>
            <div className="loader-bar"><span style={{ width: `${progress}%` }} /></div>
            <div className="loader-caption">Loading Portfolio</div>
          </div>
          <div className="loader-marquee loader-marquee-bottom" aria-hidden="true">
            <div className="loader-marquee-track loader-right-to-left">
              <span>DESIGN</span><span>BUILD</span><span>LAUNCH</span><span>DESIGN</span><span>BUILD</span><span>LAUNCH</span><span>DESIGN</span><span>BUILD</span><span>LAUNCH</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
