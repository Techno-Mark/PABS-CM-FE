import React from 'react'
import FormBox from "@/components/client/common/FormBox";

function ChallengesForm({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <FormBox title="Phase 4 : Challenges & Expectation" checked={true}>
        <></>
      </FormBox>
    </div>
  )
}

export default ChallengesForm