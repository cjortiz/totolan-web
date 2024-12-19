import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import { color } from "../../../theme";
import "./spinner.css";
import { CircleSpinner } from "react-spinners-kit";

interface SpinnerProps {
  loading?: boolean;
}

export const Spinner = observer(({ loading }: SpinnerProps) => {
  const { appStateStore } = useStores();

  const isSpinning = loading || appStateStore.loading;

  useEffect(() => {
    console.log(appStateStore.loading);
  }, [isSpinning]);

  return isSpinning ? (
    <div className="loading-page">
      <CircleSpinner size={80} color={color.blue} loading={isSpinning} />
    </div>
  ) : (
    <div></div>
  );
});
