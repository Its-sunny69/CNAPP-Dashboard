import { createContext, useState } from "react";
import { userDashboardData } from "../data/data";

type Widget = {
  id: string;
  name: string;
  description: string;
};

type Category = {
  id: string;
  name: string;
  widgets: Widget[];
};

type DashboardData = {
  categories: Category[];
};

type NewWidget = {
  categoryId: string;
  id: string;
  name: string;
  description: string;
};

type DashboardContextType = {
  dashboardData: DashboardData | null;
  addNewWidget: (widget: NewWidget) => void;
  removeWidget: (categoryId: string, widgetId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    userDashboardData,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addNewWidget = (widget: NewWidget) => {
    let newwidget = {
      id: widget.id,
      name: widget.name,
      description: widget.description,
    };

    setDashboardData((prevData) => {
      if (!prevData) return prevData;
      return {
        ...prevData,
        categories: prevData.categories.map((cat) =>
          cat.id === widget.categoryId
            ? { ...cat, widgets: [...cat.widgets, newwidget] }
            : cat,
        ),
      };
    });
  };

  const removeWidget = (categoryId: string, widgetId: string) => {
    setDashboardData((prevData) => {
      if (!prevData) return prevData;
      return {
        ...prevData,
        categories: prevData.categories.map((cat) =>
          cat.id === categoryId
            ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
            : cat,
        ),
      };
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
        addNewWidget,
        removeWidget,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
