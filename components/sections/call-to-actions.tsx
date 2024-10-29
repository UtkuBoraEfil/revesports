import { CallToActionItem } from "../ui/call-to-action-item";

export function CallToActions() {
  return (
    <section>
      <CallToActionItem
        title="EN GÜNCEL"
        text="Hizmette sunulan tüm bilgi ve veriler en güncel bilgilerdir"
      />
      <CallToActionItem
        title="GÜVENİLİR HİZMET"
        text="Platformumuz, güvenilir hizmetler sunmaktadır"
      />
      <CallToActionItem
        title="HIZLI GERİ DÖNÜŞ"
        text="Size mümkün olan en kısa sürede geri döneceğiz"
      />
    </section>
  );
}
