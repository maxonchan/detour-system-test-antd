import { AuthPage } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { Link } from "react-router";

export const Login = () => {
  const translate = useTranslate();

  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
      registerLink={
        <span>
          {translate("pages.login.buttons.noAccount", "アカウントをお持ちでないですか？")}{" "}
          <Link to="/register" style={{ fontWeight: "bold" }}>
            {translate("pages.login.signup", "新規登録")}
          </Link>
        </span>
      }
      forgotPasswordLink={
        <Link
          to="/forgot-password"
          style={{ fontSize: "12px", marginLeft: "auto" }}
        >
          {translate("pages.login.buttons.forgotPassword", "パスワードをお忘れですか？")}
        </Link>
      }
    />
  );
};
