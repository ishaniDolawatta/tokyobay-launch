import logo from './logo.svg';
import './App.css';
import companyLogo from './bg.png';
import button from './button.png';

function App() {
  return (
    <div className="main">
        <img src={companyLogo}  />
        <a href="https://www.tokyobay.lk"><img src={button}  className="button" /></a>
    </div>
  );
}

export default App;
