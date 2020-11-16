import React, { FC, useState, useEffect } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import router from "next/router";
import { track } from "@/analytics";

interface StepProps {
  title: string;
  onNext: Function;
  id: string | number;
  step: string | number;
}
const FlowStep: FC<StepProps> = ({ title, onNext, id, step }) => (
  <div
    className={cn(
      {
        [styles.shown]: id === step,
      },
      styles.flowItem
    )}
  >
    <h2>{title}</h2>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ alignSelf: "flex-end" }} onClick={() => onNext()}>
        Next
      </button>
    </div>
  </div>
);

interface Props {}
const Flow: FC<Props> = () => {
  const [step, setStep] = useState(1);
  useEffect(() => {
    track("onboarding-step", { timestamp: new Date(), step });
  }, [step]);

  const complete = () => {
    router.push("/");
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlowStep
        onNext={() => setStep(2)}
        title="This is step 1"
        id={1}
        step={step}
      />
      <FlowStep
        onNext={() => setStep(3)}
        title="This is step 2"
        id={2}
        step={step}
      />
      <FlowStep
        onNext={() => complete()}
        title="All done!"
        id={3}
        step={step}
      />
    </div>
  );
};

export default Flow;
