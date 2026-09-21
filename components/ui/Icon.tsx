import {
  Activity, ArrowRight, Banknote, BarChart3, Bell, BookOpen, Bookmark, CalendarDays,
  Check, ChevronDown, ChevronRight, ChevronLeft, Circle, Clock, CreditCard, FileText, FolderOpen,
  GraduationCap, Home, Info, Layers, LayoutDashboard, LogOut, Menu, MessageSquare,
  Search, Settings, ShieldCheck, Sparkles, Star, Sun, User, UserCheck, Users, Video,
  Wallet, X,
} from "lucide-react";

// Configs reference icons by string key so they stay plain, serialisable data
// (safe to pass from Server to Client Components). Add new icons here.
// Swap any entry for your own SVG component when the real assets arrive.
export const ICONS = {
  activity: Activity, arrowRight: ArrowRight, banknote: Banknote, barChart: BarChart3,
  bell: Bell, book: BookOpen, bookmark: Bookmark, calendar: CalendarDays, check: Check,
  chevronDown: ChevronDown, chevronRight: ChevronRight, chevronLeft: ChevronLeft,
  clock: Clock, creditCard: CreditCard, fileText: FileText, folder: FolderOpen,
  graduation: GraduationCap, home: Home, info: Info, layers: Layers,
  layoutDashboard: LayoutDashboard, logout: LogOut, menu: Menu, message: MessageSquare,
  search: Search, settings: Settings, shield: ShieldCheck, sparkles: Sparkles, star: Star,
  sun: Sun, user: User, userCheck: UserCheck, users: Users, video: Video, wallet: Wallet, x: X,
} as const;

export type IconName = keyof typeof ICONS;

type Props = { name: IconName; size?: number; className?: string; strokeWidth?: number };

export function Icon({ name, size = 20, className, strokeWidth = 1.75 }: Props) {
  const Cmp = ICONS[name] ?? Circle;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
