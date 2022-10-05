import crashImg from "assets/appcrash.svg";

const AppCrash = ({ error }) => {
  return (
    <div className="app-crash" data-testid="app-crash">
      <div className="app-crash-content">
        <img src={crashImg} width="350" alt="app-crash" />
        <div className="app-crash-details">
          <h2>App Crashed</h2>
          <p>Something went horribly wrong.</p>
          <div>
            <p>our engineers are working on this</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCrash;
