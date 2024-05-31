import React from "react";
import FormBox from "@/components/client/common/FormBox";

function CommunicationForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 1 : Communication" checked={true}><></></FormBox>
    </div>
  );
}

export default CommunicationForm;
