import React from "react";
import FormBox from "@/components/client/common/FormBox";

function SystemSoftwareSetupForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 2 : Systems & Software Set up" checked={true}>
        <></>
      </FormBox>
    </div>
  );
}

export default SystemSoftwareSetupForm;
