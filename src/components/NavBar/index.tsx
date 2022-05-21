import Button from '../ui/Button';
import './style.scss';

const NavBar: React.FunctionComponent = (props) => {
  return (
    <>
    <nav className='d-flex flex-fill'>
      <div className="text-left flex-fill navbar--title ">
        <h1>SRstudio</h1>
      </div>
      <div className="d-flex text-right justify-center align-center flex-end ">
        <a className='navbar--link px-2' href="#">Brands</a>
        <a className='navbar--link px-2' href="#">How it works</a>
        <a className='navbar--link px-2' href="#">Influencers</a>
        <Button>Get Started</Button>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
