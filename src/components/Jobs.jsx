export default function Jobs(propos) {
  return (
    <>
      <div className="amine">
        <div className="jobs">
          <div className={propos.className}>
            <h1>{propos.title}</h1>
            <div className="inf-bas">
              <p>{propos.contractType}</p>
              <p>{propos.country}</p>
              <p>{propos.city}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
