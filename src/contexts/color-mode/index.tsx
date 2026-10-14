import {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { ConfigProvider, theme } from "antd";
import { RefineThemes } from "@refinedev/antd";
import jaJP from "antd/locale/ja_JP";
import enUS from "antd/locale/en_US";
import "dayjs/locale/ja";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType,
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference,
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ja";
  const antdLocale = currentLang.startsWith("en") ? enUS : jaJP;

  useEffect(() => {
    dayjs.locale(currentLang.startsWith("en") ? "en" : "ja");
  }, [currentLang]);

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        locale={antdLocale}
        // you can change the theme colors here. example: ...RefineThemes.Magenta,
        // theme={{
        //   ...RefineThemes.Blue,
        //   algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
        // }}
        theme={{
          ...RefineThemes.Blue,
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
          token: {
            // 页面内容区的整体背景色（默认浅灰 #f5f5f5）
            colorBgLayout: mode === "light" ? "#f0f2f5" : "#141414",
          },
          components: {
            Layout: {
              // 顶栏 Header 背景色
              headerBg: mode === "light" ? "#ffffff" : "#1f1f1f",
              // 侧边栏 Sider 背景色
              siderBg: mode === "light" ? "#001529" : "#141414",
              // 内容区背景色
              bodyBg: mode === "light" ? "#f5f7fa" : "#141414",
            },
            Menu: {
              // 侧边栏菜单项背景与文本颜色
              itemBg: "transparent",
              itemColor: mode === "light" ? "#595959" : "#a6a6a6",
              itemSelectedColor: "#1677ff",
              itemSelectedBg: "#e6f4ff", // 选中项的背景色
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
