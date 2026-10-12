import { AuthPage } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Link } from "react-router";

export const ForgotPassword = () => {
  const translate = useTranslate();

  return (
    <AuthPage
      type="forgotPassword"
      loginLink={
        <span>
          {translate("pages.forgotPassword.buttons.haveAccount", "パスワードを思い出しましたか？")}{" "}
          <Link to="/login" style={{ fontWeight: "bold" }}>
            {translate("pages.forgotPassword.signin", "サインイン")}
          </Link>
        </span>
      }
    />
  );
};
