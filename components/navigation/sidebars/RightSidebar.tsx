import type { WidgetConfig } from "@/config/nav/types";
import { PromoCard } from "../../ui/PromoCard";
import { CalendarWidget } from "./widgets/CalendarWidget";
import { ListWidget } from "./widgets/ListWidget";
import { StatsWidget } from "./widgets/StatsWidget";

function renderWidget(w: WidgetConfig) {
  switch (w.type) {
    case "promo":
      return <PromoCard title={w.title} body={w.body} cta={w.cta} />;
    case "list":
      return <ListWidget {...w} />;
    case "stats":
      return <StatsWidget {...w} />;
    case "calendar":
      return <CalendarWidget {...w} />;
  }
}

export function RightSidebar({ widgets }: { widgets: WidgetConfig[] }) {
  return (
    <div className="space-y-5">
      {widgets.map((w) => (
        <section key={`${w.type}-${w.title}`} aria-label={w.title}>
          {renderWidget(w)}
        </section>
      ))}
    </div>
  );
}
