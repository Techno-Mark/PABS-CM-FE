"use client";
import React from "react";
import ClientWrapper from "@/components/ClientWapper";
import CommunicationForm from "@/components/client/forms/whitelabel/CommunicationForm";
import SystemSoftwareSetupForm from "@/components/client/forms/whitelabel/SystemSoftwareSetupForm";
import ServiceTypeForm from "@/components/client/forms/whitelabel/ServiceTypeForm";
import ChallengesForm from "@/components/client/forms/whitelabel/ChallengesForm";
import WorkAssignmentForm from "@/components/client/forms/whitelabel/WorkAssignmentForm";
import EscalationmatrixForm from "@/components/client/forms/whitelabel/EscalationmatrixForm";
import MeetingAvailabilityForm from "@/components/client/forms/whitelabel/MeetingAvailabilityForm";

function Page() {
  return (
    <ClientWrapper>
      <div className="m-6 flex flex-col gap-6">
        <CommunicationForm />
        <SystemSoftwareSetupForm />
        <ServiceTypeForm />
        <ChallengesForm />
        <WorkAssignmentForm />
        <EscalationmatrixForm />
        <MeetingAvailabilityForm />
      </div>
    </ClientWrapper>
  );
}

export default Page;
