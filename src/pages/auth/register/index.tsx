import { AuthPage } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Link } from "react-router";

export const Register = () => {
  const translate = useTranslate();

  return (
    <AuthPage
      type="register"
      loginLink={
        <span>
          {translate("pages.register.buttons.haveAccount", "すでにアカウントをお持ちですか？")}{" "}
          <Link to="/login" style={{ fontWeight: "bold" }}>
            {translate("pages.register.signin", "サインイン")}
          </Link>
        </span>
      }
    />
  );
};
