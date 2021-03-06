import { useEffect } from "react";
import AppRooms from "../../components/appRooms";
import AppChat from "../../components/appChat";
import AppNotification from "../../components/appNotifications";
import AppConfigTheme from "../../components/appConfigTheme";
function Index() {
  useEffect(() => {
    let title = document.querySelectorAll("chat-list-header");

    for (let i = 0; i < title.length; i++) {
      let totalHeight = 0;
      title[i].addEventListener("click", function () {
        let result = this.nextElementSibling;
        let activeSibling = this.nextElementSibling.classList.contains(
          "active"
        );
        this.classList.toggle("active");
        result.classList.toggle("active");
        if (!activeSibling) {
          for (i = 0; i < result.children.length; i++) {
            totalHeight = totalHeight + result.children[i].scrollHeight + 40;
          }
        } else {
          totalHeight = 0;
        }
        result.style.maxHeight = totalHeight + "px";
      });
    }

    const themeColors = document.querySelectorAll(".theme-color");

    themeColors.forEach((themeColor) => {
      themeColor.addEventListener("click", (e) => {
        themeColors.forEach((c) => c.classList.remove("active"));
        const theme = themeColor.getAttribute("data-color");
        document.body.setAttribute("data-theme", theme);
        themeColor.classList.add("active");
      });
    });
  }, []);
  return (
    <>
      <main>
        <div className="app-container">
          <AppRooms />
          <AppChat />
          <AppNotification />
          <AppConfigTheme />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
export default Index;
