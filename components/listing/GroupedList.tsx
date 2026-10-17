import { getListSections, type GroupedListItem, type ListGroup, type ListItem } from "@/lib/listing";
import { ListItemCard, type ListItemCardConfig } from "./ListItemCard";

export function GroupedList<T extends ListItem = ListItem>({
  items,
  onRead,
  cardConfig,
  renderCard,
  renderIcon,
  renderMeta,
  renderAction,
  groups,
}: {
  items: GroupedListItem<T>[];
  onRead?: (id: string) => void;
  cardConfig?: ListItemCardConfig;
  renderCard?: (item: GroupedListItem<T>, handleRead: () => void) => React.ReactNode;
  renderIcon?: (item: GroupedListItem<T>) => React.ReactNode;
  renderMeta?: (item: GroupedListItem<T>) => React.ReactNode;
  renderAction?: (item: GroupedListItem<T>, handleRead: () => void) => React.ReactNode;
  groups?: readonly ListGroup[];
}) {
  return (
    <>
      {getListSections(items, groups).map(({ group, items: sectionItems }) => (
        <section key={group} className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-500">{group}</h2>
          {sectionItems.map((item) => (
            <div key={item.id}>
              {renderCard ? (
                renderCard(item, () => onRead?.(item.id))
              ) : (
                <ListItemCard
                  item={item}
                  onRead={onRead}
                  config={cardConfig}
                  renderIcon={renderIcon}
                  renderMeta={renderMeta}
                  renderAction={renderAction}
                />
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
