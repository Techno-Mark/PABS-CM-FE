import React from "react";
import FormBox from "@/components/client/common/FormBox";

function WorkAssignmentForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 5 : Type of work assignment" checked={true}>
        <></>
      </FormBox>
    </div>
  );
}

export default WorkAssignmentForm;
