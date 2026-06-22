import { useEffect } from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    document.title = title ? `${title} | APP-BIT` : "APP-BIT";
  }, [title]);

  return null;
};

export default PageTitle;
