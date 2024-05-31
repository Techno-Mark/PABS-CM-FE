import React from "react";
import FormBox from "@/components/client/common/FormBox";

function ServiceTypeForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 3 : Services Type" checked={true}>
        <></>
      </FormBox>
    </div>
  );
}

export default ServiceTypeForm;
