import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <h2>WariVedh</h2>

      <div>
        <Link to="/">
          {t("navbar.home")}
        </Link>
        {" | "}

        <Link to="/apply-organizer">
          {t("navbar.applyOrganizer")}
        </Link>

        {" | "}

        <Link to="/login">
          {t("navbar.login")}
        </Link>
      </div>

      <div>
        <button onClick={() => i18n.changeLanguage("en")}>
          English
        </button>

        {" | "}

        <button onClick={() => i18n.changeLanguage("mr")}>
          मराठी
        </button>
      </div>
    </nav>
  );
}

export default Navbar;