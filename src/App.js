import react from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png" />
      </header>
      <nav className='nav'>
        <div>
         <a>Profile</a>
        </div>
        <div>
         <a>Messages</a>
        </div>
        <div>
         <a>News</a>
        </div>
        <div>
         <a>Music</a>
        </div>
        <div>
         <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src="https://www.silverskytravel.co.tz/images/holiday-in-zanzibar-3-days-banner.jpg" alt="#"/>
        <img className='content_logo' src="https://sun9-48.userapi.com/s/v1/if1/dwXmvoTlRzz_z7_K2PpTecyBP4GBsFARWyJy7iyWPO5fCSsbJhmmp-YK7aXTgJ21JuSO3g.jpg?size=100x0&quality=96&crop=37,53,213,213&ava=1" alt="#"/>
        <div>ava+description</div>
        <div>My post</div>
        <div>New post</div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
}

export default App;
