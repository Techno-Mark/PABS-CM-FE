import React from 'react'
import FormBox from "@/components/client/common/FormBox";

function MeetingAvailabilityForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 7 : Meeting Availability" checked={true}>
        <></>
      </FormBox>
    </div>
  )
}

export default MeetingAvailabilityForm