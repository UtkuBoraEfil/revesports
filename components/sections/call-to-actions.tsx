import { CallToActionItem } from "../ui/call-to-action-item";

export function CallToActions() {
  return (
    <section>
      <CallToActionItem
        title="MOST UPDATED"
        text="All information and data presented in the service is most up to date"
      />
      <CallToActionItem
        title="VERIFIED SERVICE"
        text="Our platform provides services that are official and verified by various parties"
      />
      <CallToActionItem
        title="FASTEST"
        text="We will get back to you as soon as possible"
      />
    </section>
  );
}
