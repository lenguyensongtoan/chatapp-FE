import AppBar from "../elements/AppBar";
import Link from "../elements/Link";
import SearchBox from "../elements/Searchbox";
import Card from "../elements/Card";
const AppRooms = () => {
  
  return (
    <div className="app-left">
      <AppBar />
      <div className="app-left__content">
        <div className="app-left-header ml-4">
          <h1>Chats</h1>
        </div>
        <div className="mt-4">
          <Link />
        </div>
        <div className="mx-3">
          <SearchBox />
        </div>
        <div className="chat-list mx-3 mt-3">
          <Card active/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AppRooms;
