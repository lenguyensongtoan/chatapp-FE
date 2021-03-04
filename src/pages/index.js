import Auth from "../containers/auth"
import { useEffect } from "react";
function Index() {
  return (
    <>
      <main>
        <div className="app-container">
          <Auth/>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
export default Index;
