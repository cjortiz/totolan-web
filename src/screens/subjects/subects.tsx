import { useState } from "react";
import { MainActionType, MainLayout, translate, ViewMode } from "../../common";
import { SiriusHeaderButtons } from "../../common/component/button";
import { SubjectsList } from "./views";

export const Subjects = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [actionType, setActionType] = useState<MainActionType>(
    MainActionType.DEFAULT
  );
  return (
    <MainLayout
      buttons={SiriusHeaderButtons({
        viewMode: viewMode,
        onClickButtonType: setActionType,
      })}
      title={translate("student.studentListTitle")}
    >
      <SubjectsList></SubjectsList>
    </MainLayout>
  );
};
